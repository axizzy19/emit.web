from fastapi import APIRouter, HTTPException
from typing import List

from src.models import Event
from src.events.schemas import EventCreate, EventUpdate, EventResponse

router = APIRouter(prefix='/events', tags=['events'])


@router.post('/', response_model=EventResponse)
async def create_event(event: EventCreate):
    event_obj = await Event.create(name=event.name, type=event.type, date=event.date)
    return event_obj


@router.get('/', response_model=List[EventResponse])
async def get_events():
    events = await Event.all()
    return events


@router.get('/{event_id}', response_model=EventResponse)
async def get_event(event_id: int):
    event = await Event.filter(id=event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    return event


@router.put('/{event_id}', response_model=EventResponse)
async def update_event(event_id: int, event: EventCreate):
    event_obj = await Event.filter(id=event_id).first()
    if not event_obj:
        raise HTTPException(status_code=404, detail='Event not found')

    await event_obj.update_from_dict({'name': event.name, 'type': event.type, 'date': event.date}).save()
    return event_obj


@router.delete('/{event_id}')
async def delete_event(event_id: int):
    event = await Event.filter(id=event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    await event.delete()
    return {'message': 'Event deleted successfully'}
