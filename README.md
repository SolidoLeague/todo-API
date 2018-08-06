# Solido Todo List REST API

## Development

```sh
npm install
npm run dev
```

## REST API Endpoints

| Endpoint                     | HTTP   | Description                       |
| ---------------------------- | ------ | --------------------------------- |
| `/todos`                     | GET    | Get all todos                     |
| `/todos/search?keyword=noun` | GET    | Get one todo by keyword via query |
| `/todos`                     | POST   | Add new todo                      |
| `/todos/:id`                 | PUT    | Update todo by id                 |
| `/todos/:id`                 | DELETE | Delete todo by id                 |

Request body example:

```json
{
  "task": "Test the API",
  "priority": "high",
  "deadline": "2018-01-01"
}
```
