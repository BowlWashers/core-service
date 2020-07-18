import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

// TODO: investigating
@Injectable()
export default class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): void {
    res.setHeader('x-request-id', req.headers['x-request-id'] || uuid());

    next();
  }
}
