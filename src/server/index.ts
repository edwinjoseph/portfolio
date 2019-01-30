import app from './app';

import getConfig from '../common/config';
import logger from '../common/logger';

export default async function (): Promise<void> {
  try {
    const config = getConfig();
    const application = await app();

    application.listen(config.port, (error: Error) => {
      if (error) {
        throw error;
      }
      logger.info('App started on port:', config.port);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
