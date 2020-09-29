import { Request, Response } from 'express';

const sanityCheck = (req: Request, res: Response) => {
  res.json('It works!!!');
};

export default sanityCheck;
