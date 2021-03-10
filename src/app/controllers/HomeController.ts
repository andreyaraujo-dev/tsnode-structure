import { Request, Response } from 'express';

class HomeControler {
  index(req: Request, res: Response) {
    return res.send('Hello World!');
  }
}

export default new HomeControler();
