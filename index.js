const express = require ("express")
const bodyParser = require ("body-parser")

const controllers = require("./controllers")
const todos = require("./todos")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", controllers.displayInfo)
app.post("/", controllers.displayName)

app.get("/todos", todos.get)
app.post("/todos", todos.add)
app.delete("/todos",todos.deleteTodos)

app.get("/todos/:id",todos.getOnebyId)
app.delete("/todos/:id",todos.deleteTodobyId)
app.put("/todos/:id", todos.updateTodobyId)


app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})

