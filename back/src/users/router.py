from fastapi import APIRouter, HTTPException
from typing import List

from src.models import User
from src.users.schemas import UserCreate, UserResponse

router = APIRouter(prefix='/users', tags=['users'])


@router.post('/', response_model=UserResponse)
async def create_user(user: UserCreate):
    user_obj = await User.create(
        name=user.name,
        password_hash=User.get_password_hash(user.password),
        role=user.role,
        event_id=user.event_id
    )
    return user_obj


@router.get('/', response_model=List[UserResponse])
async def get_users():
    users = await User.all()
    return users


@router.get('/{user_id}', response_model=UserResponse)
async def get_user(user_id: int):
    user = await User.filter(id=user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    return user


@router.put('/{user_id}', response_model=UserResponse)
async def update_user(user_id: int, user: UserCreate):
    user_obj = await User.filter(id=user_id).first()
    if not user_obj:
        raise HTTPException(status_code=404, detail='User not found')

    await user_obj.update_from_dict({
        'name': user.name,
        'password': user.password,
        'role': user.role,
        'event_id': user.event_id
    }).save()
    return user_obj


@router.delete('/{user_id}')
async def delete_user(user_id: int):
    user = await User.filter(id=user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    await user.delete()
    return {'message': 'User deleted successfully'}
