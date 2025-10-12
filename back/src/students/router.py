from fastapi import APIRouter, HTTPException
from typing import List

from src.models import Student
from src.students.schemas import StudentCreate, StudentUpdate, StudentResponse

router = APIRouter(prefix='/students', tags=['students'])


@router.post('/', response_model=StudentResponse)
async def create_student(student: StudentCreate):
    student_obj = await Student.create(
        full_name=student.full_name,
        static_points=student.static_points,
        team_id=student.team_id,
        event_id=student.event_id
    )
    return student_obj


@router.get('/', response_model=List[StudentResponse])
async def get_students():
    students = await Student.all()
    return students


@router.get('/{student_id}', response_model=StudentResponse)
async def get_student(student_id: int):
    student = await Student.filter(id=student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail='Student not found')
    return student


@router.put('/{student_id}', response_model=StudentResponse)
async def update_student(student_id: int, student: StudentCreate):
    student_obj = await Student.filter(id=student_id).first()
    if not student_obj:
        raise HTTPException(status_code=404, detail='Student not found')

    await student_obj.update_from_dict({
        'full_name': student.full_name,
        'static_points': student.static_points,
        'team_id': student.team_id,
        'event_id': student.event_id
    }).save()
    return student_obj


@router.delete('/{student_id}')
async def delete_student(student_id: int):
    student = await Student.filter(id=student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail='Student not found')
    await student.delete()
    return {'message': 'Student deleted successfully'}
