from typing import Optional
from pydantic import BaseModel


class StudentCreate(BaseModel):
    full_name: str
    static_points: int = 0
    team_id: Optional[int] = None
    event_id: Optional[int] = None


class StudentResponse(BaseModel):
    id: int
    full_name: str
    static_points: int
    team_id: Optional[int] = None
    event_id: Optional[int] = None

    class Config:
        from_attributes = True
