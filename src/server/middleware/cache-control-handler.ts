import { Response } from 'express';

function setToNever(res: Response): void {
  res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
}
export default {
  setToNever
};
