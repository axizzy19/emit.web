from typing import Optional
from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    password: str
    role: str
    event_id: Optional[int] = None


class UserLogin(BaseModel):
    name: str
    password: str


class UserUpdate(BaseModel):
    name: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None
    event_id: Optional[int] = None


class UserResponse(BaseModel):
    id: int
    name: str
    role: str
    event_id: Optional[int] = None

    class Config:
        from_attributes = True
