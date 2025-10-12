from fastapi import APIRouter, HTTPException
from typing import List

from src.models import Score
from src.scores.schemas import ScoreCreate, ScoreUpdate, ScoreResponse

router = APIRouter(prefix='/scores', tags=['scores'])


@router.post('/', response_model=ScoreResponse)
async def create_score(score: ScoreCreate):
    score_obj = await Score.create(
        week=score.week,
        points=score.points,
        event_id=score.event_id,
        student_id=score.student_id
    )
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
    return score_obj


@router.delete('/{score_id}')
async def delete_score(score_id: int):
    score = await Score.filter(id=score_id).first()
    if not score:
        raise HTTPException(status_code=404, detail='Score not found')
    await score.delete()
    return {'message': 'Score deleted successfully'}
