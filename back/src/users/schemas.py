from typing import Optional
from pydantic import BaseModel
from src.models import UserRole


class UserCreate(BaseModel):
    name: str
    password: str
    role: UserRole
    event_id: Optional[int] = None


class UserLogin(BaseModel):
    name: str
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    role: str
    event_id: Optional[int] = None

    class Config:
        from_attributes = True
