import { Request, Response } from 'express';
import { Controller, HttpGet, HttpPost } from 'restorator';

@Controller(HelloController, '/hello')
export class HelloController {
  @HttpGet('/world')
  helloWorld (req: Request, res: Response) {
    res.json({message: 'Hello, world!'});
  }
}
