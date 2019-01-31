import config from 'config';
import Config from './types';

// Helper imports
import toInt from '../helpers/toInt';

export default function (): Config {
  // Explicitly declaring types on default and env config objects as
  // any. This is only because I can't say these will have everything that satisfies
  // the Config interface, however the return value should.
  const defaultConfig: any = {
    port: toInt(config.get('port')) || undefined,
  };

  for (const [key, value] of Object.entries(defaultConfig)) {
    if (value === undefined) {
      throw new Error(`The config option ${key} is undefined.`);
    }
  }

  return defaultConfig;
}
