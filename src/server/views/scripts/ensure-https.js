const config = require('../../../../build/common/config');

if (location.href.indexOf('http://') === 0 && config().useHTTPS) {
  location.href = location.href.replace('http://', 'https://');
}
