# Todo App

![Todo App](path/to/preview-image.png)

## Описание

**Todo App** — это приложение для управления задачами, созданное с помощью **React** и **Material-UI (MUI)**. Пользователи могут добавлять новые задачи, отмечать их как выполненные, удалять и просматривать дату создания. В проекте используется **Redux Toolkit + RTK Query** для управления состоянием и `json-server` для хранения данных.

Цели проекта:
- Создание модульных React-компонентов.
- Адаптивный дизайн с поддержкой light/dark темы.
- Управление состоянием через Redux Toolkit и RTK Query.
- Удобный UI/UX для пользователей.

---

## Технологии

- React 19.x
- Redux Toolkit & React Redux
- RTK Query
- Material-UI (v6)
- Axios
- JSON Server
- Vite
- ESLint

---

## Установка и запуск

### Требования
- Node.js 18 или выше
- npm 10 или выше

### Установка
1. Клонируем репозиторий:
   ```bash
   git clone https://github.com/username/todo-app.git
   cd todo-app
Устанавливаем зависимости:

bash
Copy code
npm install --legacy-peer-deps
Запускаем два сервера одновременно (Vite + JSON Server):

bash
Copy code
npm run dev:all
После запуска:

Vite dev сервер: http://localhost:5173

JSON server: http://localhost:3000/todos

Структура проекта
pgsql
Copy code
todo/
├─ src/
│  ├─ app/
│  │  ├─ store.js              # Redux store
│  │  └─ hook.js               # Typed hooks для Redux
│  ├─ components/
│  │  ├─ TodoForm/
│  │  │  └─ TodoForm.jsx
│  │  ├─ TodoItem/
│  │  │  └─ TodoItem.jsx
│  │  └─ TodoList/
│  │     └─ TodoList.jsx
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ redux/
│  │  ├─ todoSlice.js
│  │  └─ todoApi.js
│  ├─ theme/
│  │  └─ muiThemes.js
│  ├─ utils/
│  │  └─ helpers.js
│  ├─ App.jsx
│  └─ main.jsx
├─ db.json                     # Данные для JSON server
├─ package.json
└─ README.md
Использование
Введите название задачи в поле ввода.

Нажмите кнопку Добавить.

Отметьте задачу как выполненную через checkbox.

Для удаления задачи нажмите на иконку Delete.

Адаптивность и тема
Поддержка мобильных и десктопных устройств (flexDirection, gap и MUI Grid).

Light и Dark тема через theme.palette.mode.

Helper функции
src/utils/helpers.js:

js
Copy code
export const isEmpty = (value) => !value || value.trim() === "";
export const formatDate = (date) => new Date(date).toLocaleString();
Планируемые улучшения
Аутентификация пользователей (login/register)

Хранение данных в локальном хранилище или на backend

Добавление категорий задач

Drag & Drop для задач

Unit и integration тесты (Jest, React Testing Library)

SEO оптимизация и SSR

Автор
Feruz Gaffarov
📧 neyrocoder@gmail.com
📞 +998910050913

Лицензия
MIT License

markdown
Copy code

Если хочешь, я могу сразу подготовить **готовую версию с картинками и ссылками**, чтобы можно было просто скопировать и вставить в GitHub, чтобы README выглядел как профессиональный.  

Хочешь, чтобы я так сделал?






You said:
bitta md file sifatida yozib ber



ChatGPT said:
Вот полная версия README.md в одном файле на русском языке для вашего Todo App:

markdown
Copy code
# Todo App

![Todo App](path/to/preview-image.png)

## Описание

**Todo App** — это приложение для управления задачами, созданное с помощью **React** и **Material-UI (MUI)**. Пользователи могут добавлять новые задачи, отмечать их как выполненные, удалять и просматривать дату создания. В проекте используется **Redux Toolkit + RTK Query** для управления состоянием и `json-server` для хранения данных.

Цели проекта:
- Создание модульных React-компонентов.
- Адаптивный дизайн с поддержкой light/dark темы.
- Управление состоянием через Redux Toolkit и RTK Query.
- Удобный UI/UX для пользователей.

---

## Технологии

- React 19.x
- Redux Toolkit & React Redux
- RTK Query
- Material-UI (v6)
- Axios
- JSON Server
- Vite
- ESLint

---

## Установка и запуск

### Требования
- Node.js 18 или выше
- npm 10 или выше

### Установка
1. Клонируем репозиторий:
   ```bash
   git clone https://github.com/username/todo-app.git
   cd todo-app
Устанавливаем зависимости:

bash
Copy code
npm install --legacy-peer-deps
Запускаем два сервера одновременно (Vite + JSON Server):

bash
Copy code
npm run dev:all
После запуска:

Vite dev сервер: http://localhost:5173

JSON server: http://localhost:3000/todos

Структура проекта
pgsql
Copy code
todo/
├─ src/
│  ├─ app/
│  │  ├─ store.js              # Redux store
│  │  └─ hook.js               # Typed hooks для Redux
│  ├─ components/
│  │  ├─ TodoForm/
│  │  │  └─ TodoForm.jsx
│  │  ├─ TodoItem/
│  │  │  └─ TodoItem.jsx
│  │  └─ TodoList/
│  │     └─ TodoList.jsx
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ redux/
│  │  ├─ todoSlice.js
│  │  └─ todoApi.js
│  ├─ theme/
│  │  └─ muiThemes.js
│  ├─ utils/
│  │  └─ helpers.js
│  ├─ App.jsx
│  └─ main.jsx
├─ db.json                     # Данные для JSON server
├─ package.json
└─ README.md
Использование
Введите название задачи в поле ввода.

Нажмите кнопку Добавить.

Отметьте задачу как выполненную через checkbox.

Для удаления задачи нажмите на иконку Delete.# redux-todo
