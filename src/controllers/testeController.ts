import { Request, Response } from 'express';
import TesteService from '../services/testeService';

class TesteController {
  private testeService = new TesteService();

  async getRandomUser(request: Request, response: Response) {

    return await this.testeService.get()
    .then(res => {
      console.log('sucesso')
      return response.json(res)
    })
    .catch(err =>{
      console.log('ero')
      return response.json(err)
    })
  }
}

export default TesteController;
