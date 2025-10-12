from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from src.models import User
from src.users.schemas import UserLogin

router = APIRouter(prefix='/auth', tags=['auth'])


@router.post('/login')
async def login(
    user: UserLogin,
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user_obj = await User.filter(name=user.name).first()
    if not user_obj:
        raise HTTPException(status_code=401, detail='Invalid credentials')

    if not User.verify_password(user.password, user_obj.password_hash):
        raise HTTPException(status_code=401, detail='Invalid credentials')

    return {
        'access_token': form_data.access_token,
        'token_type': 'Bearer'
    }
