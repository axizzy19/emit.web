from typing import Optional
from pydantic import BaseModel


class TeamCreate(BaseModel):
    name: str
    mentor_id: Optional[int] = None


class TeamUpdate(BaseModel):
    name: Optional[str] = None
    mentor_id: Optional[int] = None


class TeamResponse(BaseModel):
    id: int
    name: str
    mentor_id: Optional[int] = None

    class Config:
        from_attributes = True
