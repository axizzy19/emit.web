from typing import Optional
from pydantic import BaseModel


class ScoreCreate(BaseModel):
    week: int
    points: int
    event_id: int
    student_id: int


class ScoreUpdate(BaseModel):
    week: Optional[int] = None
    points: Optional[int] = None
    event_id: Optional[int] = None
    student_id: Optional[int] = None


class ScoreResponse(BaseModel):
    id: int
    week: int
    points: int
    event_id: int
    student_id: int

    class Config:
        from_attributes = True
