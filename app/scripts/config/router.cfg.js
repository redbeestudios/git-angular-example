'use strict';

import HomeController from '../controllers/home.ctrl';
import DetailController from '../controllers/detail.ctrl';

let Routes = () => {

  let routerConfig = [
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {

      $urlRouterProvider.otherwise(($injector)=> {
        $injector.get('$state').go('users');
      });

      $stateProvider
        .state('users', {
          url: '/users',
          views: {
            '': {
              controller: HomeController,
              controllerAs: 'home',
              templateUrl: 'views/home.html'
            }
          }
        })
        .state('detail', {
          url: '/users/:id',
          views: {
            '': {
              controller: DetailController,
              controllerAs: 'detail',
              templateUrl: 'views/detail.html'
            }
          }
        });
    }];

  return routerConfig;

};

export default Routes;
