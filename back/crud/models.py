from enum import Enum
from tortoise import fields
from tortoise.models import Model


class UserRole(str, Enum):
    ADMIN = 'admin'
    HEAD = 'head'
    MENTOR = 'mentor'


class EventType(str, Enum):
    LECTURE = 'lecture'
    QOUTE = 'qoute'
    ACTIVITY = 'activity'


class User(Model):
    id = fields.IntField(primary_key=True)
    name = fields.CharField(max_length=255)
    password = fields.CharField(max_length=255)
    role = fields.CharEnumField(
        enum_type=UserRole, max_length=20
    )

    event: fields.ForeignKeyNullableRelation['Event'] = fields.ForeignKeyField(
        'models.Event', related_name='users', null=True
    )
    team: fields.ForeignKeyNullableRelation['Team'] = fields.ForeignKeyField(
        'models.Team', related_name='mentor_users', null=True
    )

    class Meta:
        table = 'user'


class Student(Model):
    id = fields.IntField(primary_key=True)
    full_name = fields.CharField(max_length=255)
    static_points = fields.IntField(default=0)

    team: fields.ForeignKeyNullableRelation['Team'] = fields.ForeignKeyField(
        'models.Team', related_name='students', null=True
    )
    event: fields.ForeignKeyNullableRelation['Event'] = fields.ForeignKeyField(
        'models.Event', related_name='students', null=True
    )

    scores: fields.ReverseRelation['Score']

    class Meta:
        table = 'student'


class Team(Model):
    id = fields.IntField(primary_key=True)
    name = fields.CharField(max_length=255)

    mentor: fields.ForeignKeyNullableRelation['User'] = fields.ForeignKeyField(
        'models.User', related_name='mentor_teams', null=True
    )

    students: fields.ReverseRelation['Student']
    mentor_users: fields.ReverseRelation['User']

    class Meta:
        table = 'team'


class Event(Model):
    id = fields.IntField(primary_key=True)
    name = fields.CharField(max_length=255)
    type = fields.CharEnumField(
        enum_type=EventType, max_length=20
    )
    date = fields.DatetimeField()

    students: fields.ReverseRelation['Student']
    users: fields.ReverseRelation['User']
    scores: fields.ReverseRelation['Score']

    class Meta:
        table = 'event'


class Score(Model):
    id = fields.IntField(primary_key=True)
    week = fields.IntField()
    points = fields.IntField(default=0)

    event: fields.ForeignKeyRelation['Event'] = fields.ForeignKeyField(
        'models.Event', related_name='scores'
    )
    student: fields.ForeignKeyRelation['Student'] = fields.ForeignKeyField(
        'models.Student', related_name='scores'
    )

    class Meta:
        table = 'score'
