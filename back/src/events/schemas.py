from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class EventCreate(BaseModel):
    name: str
    type: str
    date: datetime


class EventUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    date: Optional[datetime] = None


class EventResponse(BaseModel):
    id: int
    name: str
    type: str
    date: datetime

    class Config:
        from_attributes = True
