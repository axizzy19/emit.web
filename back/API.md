# EMIT Backend API - Документация для фронтенда

## Быстрый старт

```bash
make install  # Установить зависимости
make run      # Запустить сервер (http://localhost:8000)
make dev      # Запустить с автоперезагрузкой
```

## Авторизация

### POST `/api/auth/login`

**Формат:** `application/x-www-form-urlencoded` (как обычная HTML форма)

**Обязательные поля:**
- `username` - имя пользователя
- `password` - пароль

**Пример запроса:**
```javascript
const formData = new FormData();
formData.append('username', 'admin');
formData.append('password', 'password123');

const response = await fetch('/api/auth/login', {
  method: 'POST',
  body: formData
});
```

**Ответ:**
```json
{
  'access_token': 'eyJhbGciOiJIUzI1...',
  'token_type': 'bearer'
}
```

**Важно:** Токен действителен 30 дней.

### Использование токена

Добавляй токен в заголовок `Bearer` для всех защищённых запросов:

```javascript
fetch('/api/users', {
  headers: {
    'Bearer': 'eyJhbGciOiJIUzI1...'
  }
});
```

### GET `/api/auth/me`

Получить информацию о текущем пользователе (требуется токен).

---

## API Endpoints

### Users

#### POST `/api/users` - Создать пользователя

**Обязательные поля:**
- `name` (string) - имя пользователя
- `password` (string) - пароль
- `role` (string) - роль: `'admin'` | `'teacher'` | `'student'`

**Опциональные поля:**
- `event_id` (int | null) - ID мероприятия

**Пример:**
```json
{
  'name': 'ivan',
  'password': 'pass123',
  'role': 'student',
  'event_id': 1
}
```

#### GET `/api/users` - Получить всех пользователей

#### GET `/api/users/{user_id}` - Получить пользователя по ID

#### PUT `/api/users/{user_id}` - Обновить пользователя

Используй ту же структуру, что и при создании.

#### DELETE `/api/users/{user_id}` - Удалить пользователя

---

### Students

#### POST `/api/students` - Создать студента

**Обязательные поля:**
- `full_name` (string) - ФИО студента

**Опциональные поля:**
- `static_points` (int) - стартовые баллы (по умолчанию 0)
- `team_id` (int | null) - ID команды
- `event_id` (int | null) - ID мероприятия

**Пример:**
```json
{
  'full_name': 'Иванов Иван Иванович',
  'static_points': 10,
  'team_id': 1,
  'event_id': 1
}
```

#### GET `/api/students` - Получить всех студентов

#### GET `/api/students/{student_id}` - Получить студента по ID

#### PUT `/api/students/{student_id}` - Обновить студента

#### DELETE `/api/students/{student_id}` - Удалить студента

---

### Teams

#### POST `/api/teams` - Создать команду

**Обязательные поля:**
- `name` (string) - название команды

**Опциональные поля:**
- `mentor_id` (int | null) - ID наставника

**Пример:**
```json
{
  'name': 'Команда А',
  'mentor_id': 5
}
```

#### GET `/api/teams` - Получить все команды

#### GET `/api/teams/{team_id}` - Получить команду по ID

#### PUT `/api/teams/{team_id}` - Обновить команду

#### DELETE `/api/teams/{team_id}` - Удалить команду

---

### Events

#### POST `/api/events` - Создать мероприятие

**Обязательные поля:**
- `name` (string) - название мероприятия
- `type` (string) - тип мероприятия
- `date` (datetime) - дата в формате ISO 8601

**Пример:**
```json
{
  'name': 'Хакатон 2024',
  'type': 'hackathon',
  'date': '2024-12-01T10:00:00'
}
```

#### GET `/api/events` - Получить все мероприятия

#### GET `/api/events/{event_id}` - Получить мероприятие по ID

#### PUT `/api/events/{event_id}` - Обновить мероприятие

Для обновления все поля опциональны - можно обновить только нужные.

#### DELETE `/api/events/{event_id}` - Удалить мероприятие

---

### Scores

#### POST `/api/scores` - Создать оценку

**Все поля обязательные:**
- `week` (int) - номер недели
- `points` (int) - количество баллов
- `event_id` (int) - ID мероприятия
- `student_id` (int) - ID студента

**Пример:**
```json
{
  'week': 1,
  'points': 50,
  'event_id': 1,
  'student_id': 3
}
```

#### GET `/api/scores` - Получить все оценки

#### GET `/api/scores/{score_id}` - Получить оценку по ID

#### PUT `/api/scores/{score_id}` - Обновить оценку

#### DELETE `/api/scores/{score_id}` - Удалить оценку

---

## Q&A - Частые вопросы

**Q: Нужно ли передавать все поля при создании студента?**  
A: Нет! Обязательно только `full_name`. Поля `static_points`, `team_id` и `event_id` опциональны.

**Q: Как правильно логиниться?**  
A: Используй `application/x-www-form-urlencoded` и поля `username` + `password`. Не JSON!

**Q: Где передавать токен?**  
A: В заголовке `Bearer`, не `Authorization`. Пример: `{'Bearer': 'твой_токен'}`

**Q: Нужен ли токен для /auth/login?**  
A: Нет, это публичный endpoint. Токен нужен для всех остальных эндпоинтов.

**Q: Можно ли не передавать event_id при создании пользователя?**  
A: Да, это опциональное поле. Можно вообще не включать его в запрос или передать `null`.

**Q: Что значит Optional в схемах?**  
A: Это значит поле можно не передавать. Если не передашь - будет `null` или дефолтное значение.

**Q: Нужно ли передавать пароль при обновлении пользователя?**  
A: Пароль можно передать только если хочешь его изменить.

**Q: Какой формат даты использовать?**  
A: ISO 8601: `'2024-12-01T10:00:00'` или `'2024-12-01T10:00:00.000Z'`

---

## Коды ответов

- `200` - ОК
- `201` - Создано
- `400` - Неверные данные
- `401` - Не авторизован (нет токена или токен невалидный)
- `404` - Не найдено
- `500` - Ошибка сервера

---

## Swagger документация

После запуска сервера доступна по адресу: http://localhost:8000/docs

