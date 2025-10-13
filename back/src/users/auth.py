from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from src.models import User
from src.users.jwt import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from src.users.middlewares import get_current_user

router = APIRouter(prefix='/auth', tags=['auth'])


@router.get('/me')
async def get_me(current_user: User = Depends(get_current_user)):
    return {
        'id': current_user.id,
        'name': current_user.name,
        'role': current_user.role
    }


@router.post('/login')
async def login(
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user_obj = await User.filter(name=form_data.username).first()

    if not user_obj:
        raise HTTPException(status_code=401, detail='Invalid credentials')

    if not user_obj.verify_password(form_data.password):
        raise HTTPException(status_code=401, detail='Invalid credentials')

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={'sub': str(user_obj.id), 'name': user_obj.name,
              'role': user_obj.role},
        expires_delta=access_token_expires
    )

    return {
        'access_token': access_token,
        'token_type': 'bearer'
    }
