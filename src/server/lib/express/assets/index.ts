import { Assets } from './types';

import clone from 'lodash/clone';
import isEmpty from 'lodash/isEmpty';

function assetLocation(path: string): string {
  return `${path}`;
}

export default function (request: Assets = { styles: [], scripts: [] }): Assets {
  const assets = clone(request);
  if (!isEmpty(request.styles)) {
    assets.styles = assets.styles.map(assetLocation);
  }
  if (!isEmpty(request.scripts)) {
    assets.scripts = assets.scripts.map(assetLocation);
  }
  return assets;
}
