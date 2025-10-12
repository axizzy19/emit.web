from tortoise import Tortoise


TORTOISE_ORM = {
    'connections': {
        'default': 'sqlite://db.sqlite3'
    },
    'apps': {
        'models': {
            'models': ['src.models', 'aerich.models'],
            'default_connection': 'default',
        }
    }
}


async def init_db():
    await Tortoise.init(
        db_url='sqlite://db.sqlite3',
        modules={'models': ['src.models']}
    )
    await Tortoise.generate_schemas()


async def close_db():
    await Tortoise.close_connections()
