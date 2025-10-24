# EMIT Frontend

Frontend для проекта EMIT на React

## Быстрый старт

### 1. Установка

```
npm i
```

### 2. Запуск

```
npm run start
```

Frontend будет доступен на ```http://localhost:3000```


## Структура проекта

```
frontend/
├── package.json          # Метаданные проекта, зависимости и скрипты
├── package-lock.json     # Точные версии зависимостей для воспроизводимости сборок
├── nginx.conf            # Конфигурация Nginx для продакшн-сборки
├── Dockerfile            # Конфигурация Docker для создания образа приложения
├── docker-compose.yml    # Оркестрация многоконтейнерного приложения
├── webpack.config.js     # Конфигурация сборки Webpack для обработки ресурсов
├── .babelrc              # Конфигурация Babel для транспиляции JavaScript/TypeScript
└── src/
    ├── assets/       # Шрифты и картинки
    ├── components/   # React-компоненты
    ├── hooks/        # Хуки
    ├── pages/        # Страницы веб-приложения
    ├── styles/       # Стили, шрифты и анимации
    ├── utils/        # Утилиты
    └── index.js      # Корневой компонент
```
