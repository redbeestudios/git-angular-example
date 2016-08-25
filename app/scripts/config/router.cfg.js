'use strict';

let Routes = () => {

  let routerConfig = [
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {

      /*
      $urlRouterProvider.otherwise(($injector)=> {
        $injector.get('$state').go('home');
      });

      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            '': {
              templateUrl: 'views/home.html'
            }
          }
        });
       */
    }];

  return routerConfig;

};

export default Routes;
