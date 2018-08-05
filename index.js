const express = require ("express");
const bodyParser = require ("body-parser");

const todos = require("./todos");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/todos", todos.get);
app.post("/todos", todos.add);
app.put("/todos", todos.add);

app.get("/todos/search",todos.getOnebyCharacter);

app.delete("/todos/:id",todos.deleteTodobyId)


app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})

