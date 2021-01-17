const express = require('express');

const app = express();

app.get('/projects', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.post('/projects', (request, response) => {
  response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.put('/projects/:id', (request, response) => {
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
