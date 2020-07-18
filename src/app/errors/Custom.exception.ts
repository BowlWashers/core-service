import { HttpStatus, HttpException } from '@nestjs/common';

// TODO: investigating
export class CustomException extends HttpException {
  constructor() {
    super('LALALA', HttpStatus.FORBIDDEN);
  }
}
