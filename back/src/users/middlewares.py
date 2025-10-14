from fastapi import Depends, HTTPException, status, Request
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
from src.users.jwt import verify_token
from src.models import User
from starlette.middleware.base import BaseHTTPMiddleware


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/login')


async def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Could not validate credentials',
            headers={'WWW-Authenticate': 'Bearer'},
        )

    user_id = payload.get('sub')
    if user_id is None:
        raise HTTPException(status_code=401, detail='Invalid token')

    user = await User.filter(id=int(user_id)).first()
    if user is None:
        raise HTTPException(status_code=401, detail='User not found')

    return user


class CheckAuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if (
            request.url.path.startswith('/auth') or
            request.url.path.startswith('/docs') or
            request.url.path.startswith('/openapi.json')
        ):
            return await call_next(request)
        token = request.headers.get('Bearer')
        if not token:
            return JSONResponse(
                status_code=401,
                content={'detail': 'Unauthorized'}
            )
        return await call_next(request)
