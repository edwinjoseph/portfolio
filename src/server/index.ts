import app from './app';

import getConfig from '../common/config';
import logger from '../common/logger';

import serverListener from './express/server-listener';

export default async function (): Promise<void> {
  try {
    const config = getConfig();
    const application = await app();

    await serverListener(application, config);

  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
