const ENV = 'LOCAL';

const routes = {
  LOCAL : 'http://localhost:8000/api',
  DESARROLLO : 'http://192.168.24.178/',
  QAS : 'http://192.168.24.176/',
}

export const path = routes[ENV]
