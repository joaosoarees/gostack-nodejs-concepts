const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log({ title });
  console.log({ owner });

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log({ title });
  console.log({ owner });

  response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log({ id });

  response.json([
    'Projeto 5',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => console.log('🔥 Server listen http://localhost:3333'));
