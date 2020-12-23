import { getRepository } from 'typeorm';
import Lists from '../models/Lists';

interface Request {
  title: string;
}

class CreateTodoSerive {
  public async execute ({ title }: Request): Promise<Lists> {
    const todoRepository = getRepository(Lists);

    const todo = todoRepository.create({
      title
    });

    await todoRepository.save(todo);

    return todo;
  }
}

export default CreateTodoSerive;