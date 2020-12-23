import { Router } from 'express';
import { getRepository } from 'typeorm'
import CreateTodoSerive from '../services/CreateTodoService';
import Lists from '../models/Lists';
import DeleteTodoService from '../services/DeleteTodoService';

const todosRoutes = Router();

todosRoutes.get('/', async(request, response) => {
  const todoRepository = getRepository(Lists);

  const todos = await todoRepository.find();

  return response.status(200).json(todos);
});

todosRoutes.post('/', async(request, response) => {
  const { title } = request.body;

  const createTodo = new CreateTodoSerive();

  const todo = await createTodo.execute({ title });

  return response.status(200).json(todo);
});

todosRoutes.post('/:id', async(request, response) => {
  const { id } = request.params;

  const deleteTodo = new DeleteTodoService();

  await deleteTodo.execute(id);

  return response.status(204).send();
});

export default todosRoutes;