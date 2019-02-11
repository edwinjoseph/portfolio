if (location.href.indexOf('http://') === 0 && window.model.config.useHTTPS) {
  location.href = location.href.replace('http://', 'https://');
}
