import config from 'config';

import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';

import Config from './types';

// Helper imports
import toInt from '../helpers/toInt';

export default function (): Config {
  // Explicitly declaring types on default and env config objects as
  // any. This is only because I can't say these will have everything that satisfies
  // the Config interface, however the return value should.
  const defaultConfig: any = {
    port: config.get('port') || undefined,
  };

  const envConfig: any = omitBy({
    port: toInt(config.util.getEnv('PORT')),
  }, isNil);

  const mergedConfig = {
    ...defaultConfig,
    ...envConfig,
  };

  for (const [key, value] of Object.entries(mergedConfig)) {
    if (value === undefined) {
      throw new Error(`The config option ${key} is undefined.`);
    }
  }

  return mergedConfig;
}
