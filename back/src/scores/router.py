from fastapi import APIRouter, HTTPException
from typing import List

from src.models import Score, User
from src.scores.schemas import ScoreCreate, ScoreResponse

router = APIRouter(prefix='/scores', tags=['scores'])


async def update_user_points(score_obj: ScoreCreate):
    user_obj = await User.filter(id=score_obj.student_id).first()
    if not user_obj:
        raise HTTPException(status_code=404, detail='User not found')
    try:
        await User.filter(id=score_obj.student_id).update(
            points=user_obj.points + score_obj.points
        )
    except Exception:
        raise HTTPException(
            status_code=400, detail='Failed to update user points')


@router.post('/', response_model=ScoreResponse)
async def create_score(score: ScoreCreate):
    score_obj = await Score.create(
        week=score.week,
        points=score.points,
        event_id=score.event_id,
        student_id=score.student_id
    )
    await update_user_points(score)
    return score_obj


@router.get('/', response_model=List[ScoreResponse])
async def get_scores():
    scores = await Score.all()
    return scores


@router.get('/{score_id}', response_model=ScoreResponse)
async def get_score(score_id: int):
    score = await Score.filter(id=score_id).first()
    if not score:
        raise HTTPException(status_code=404, detail='Score not found')
    return score


@router.put('/{score_id}', response_model=ScoreResponse)
async def update_score(score_id: int, score: ScoreCreate):
    score_obj = await Score.filter(id=score_id).first()
    if not score_obj:
        raise HTTPException(status_code=404, detail='Score not found')

    await score_obj.update_from_dict({
        'week': score.week,
        'points': score.points,
        'event_id': score.event_id,
        'student_id': score.student_id
    }).save()
    await update_user_points(score)
    return score_obj


@router.delete('/{score_id}')
async def delete_score(score_id: int):
    score = await Score.filter(id=score_id).first()
    if not score:
        raise HTTPException(status_code=404, detail='Score not found')
    await score.delete()
    return {'message': 'Score deleted successfully'}
