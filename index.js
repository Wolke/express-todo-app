const express = require('express');
const app = express();

app.use(express.json());
const toDos = [];
app.get('/todos', (req, res) => {
  res.json(toDos);
});
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newToDo = { id: Math.random().toString(36), title, completed: false };
  toDos.push(newToDo);
  res.jason(newToDo);
});
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = toDos.findIndex(toDo => toDo.id === id);
  if (index !== -1) {
    toDos.splice(index, 1);
    res.send({ message: 'ToDo removed' });
  } else {
    res.status(404).send({ message: 'ToDo not found' });
  }
});
app.listen(3000, () => console.log('Express server listening on port 3000'));