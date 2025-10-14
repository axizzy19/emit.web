from pydantic import BaseModel


class ScoreCreate(BaseModel):
    week: int
    points: int
    event_id: int
    student_id: int


class ScoreResponse(BaseModel):
    id: int
    week: int
    points: int
    event_id: int
    student_id: int

    class Config:
        from_attributes = True
