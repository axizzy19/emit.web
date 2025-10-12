from fastapi import FastAPI
from contextlib import asynccontextmanager

from src.database import init_db, close_db
from src.users.router import router as users_router
from src.students.router import router as students_router
from src.teams.router import router as teams_router
from src.events.router import router as events_router
from src.scores.router import router as scores_router
from src.users.auth import router as auth_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield
    await close_db()


app = FastAPI(title='emit.web back', lifespan=lifespan)


app.include_router(users_router)
app.include_router(students_router)
app.include_router(teams_router)
app.include_router(events_router)
app.include_router(scores_router)
app.include_router(auth_router)
