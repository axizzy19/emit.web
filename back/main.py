from fastapi import FastAPI, Depends
from contextlib import asynccontextmanager

from src.database import init_db, close_db
from src.users.router import router as users_router
from src.students.router import router as students_router
from src.teams.router import router as teams_router
from src.events.router import router as events_router
from src.scores.router import router as scores_router
from src.users.auth import router as auth_router
from src.users.middlewares import CheckAuthMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield
    await close_db()


app = FastAPI(title='emit.web back', lifespan=lifespan)
app.add_middleware(CheckAuthMiddleware)


def add_api(*args):
    global app
    api_routers = []
    for router in args:
        router.prefix = '/api' + router.prefix
        api_routers.append(router)
        app.include_router(router)


add_api(
    users_router, students_router, teams_router, events_router, scores_router,
    auth_router
)
