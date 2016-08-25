'use strict';

import HomeController from '../controllers/home.ctrl';

let Routes = () => {

  let routerConfig = [
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {

      $urlRouterProvider.otherwise(($injector)=> {
        $injector.get('$state').go('home');
      });

      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            '': {
              controller: HomeController,
              controllerAs: 'home',
              templateUrl: 'views/home.html'
            }
          }
        });
    }];

  return routerConfig;

};

export default Routes;
