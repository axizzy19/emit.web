from fastapi import APIRouter, HTTPException
from typing import List

from src.models import Team
from src.teams.schemas import TeamCreate, TeamUpdate, TeamResponse

router = APIRouter(prefix='/teams', tags=['teams'])


@router.post('/', response_model=TeamResponse)
async def create_team(team: TeamCreate):
    team_obj = await Team.create(name=team.name, mentor_id=team.mentor_id)
    return team_obj


@router.get('/', response_model=List[TeamResponse])
async def get_teams():
    teams = await Team.all()
    return teams


@router.get('/{team_id}', response_model=TeamResponse)
async def get_team(team_id: int):
    team = await Team.filter(id=team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail='Team not found')
    return team


@router.put('/{team_id}', response_model=TeamResponse)
async def update_team(team_id: int, team: TeamCreate):
    team_obj = await Team.filter(id=team_id).first()
    if not team_obj:
        raise HTTPException(status_code=404, detail='Team not found')

    await team_obj.update_from_dict({'name': team.name, 'mentor_id': team.mentor_id}).save()
    return team_obj


@router.delete('/{team_id}')
async def delete_team(team_id: int):
    team = await Team.filter(id=team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail='Team not found')
    await team.delete()
    return {'message': 'Team deleted successfully'}
