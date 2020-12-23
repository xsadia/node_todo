import { getRepository } from 'typeorm';
import Lists from '../models/Lists';

class DeleteTodoService {
  public async execute( id: string ): Promise<void> {
    const listsRepository = getRepository(Lists);

    const todo = await listsRepository.findOne(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    await listsRepository.remove(todo);
  }
}

export default DeleteTodoService;