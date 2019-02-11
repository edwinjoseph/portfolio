import { Application } from 'express';

import Config from '../../common/config/types';
import logger from '../../common/logger';

export default function (app: Application, config: Config): Promise<void> {
  const port = config.port;
  return new Promise((resolve, reject) => {
    app.listen(port, (error: Error) => {
      if (error) {
        return reject(error);
      }
      logger.info('http server listening on', port);
      resolve();
    });
  });
}
