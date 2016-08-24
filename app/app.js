/*jshint strict:false */
'use strict';

import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-messages';

import 'bower:angular-bootstrap@0.13.4';

import Routes from './scripts/config/router.cfg.js';

import './templates';

var app = angular.module('todo.list.app',
  [
    'ui.router',
    'git-angular-example-templates',
    'ngMessages'
  ]);

/* global System, document */
System.import('jquery').then(function () {
  angular.element(document).ready(function () {
    angular.bootstrap(document.body, [app.name], {
      // strictDi: trueSegment
    });
  });
});

app.run();

app
  .config(Routes());


export default app;
