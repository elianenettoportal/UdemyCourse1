angular.module('firstApp').constant('consts', {
  appName: 'MEAN - First Application',
  version: '1.0',
  owner: 'Cod3r',
  year: '2017',
  site: 'http://cod3r.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
