import app from './app';

import logger from '../common/logger';

export default async function (): Promise<void> {
  try {
    const application = await app();

    application.listen(3000, (error: Error) => {
      if (error) {
        throw error;
      }
      logger.info('App started on port:', 3000);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
