'use strict';

export default class MyProfileController {

    /*@ngInject*/
    constructor(userService) {
        this.userService = userService;
    }

}

export default class MyProfileDirective {

    /*@ngInject*/
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.controllerAs = 'profile';
        this.scope = {};
        this.bindToController = {
            user: '='
        };
        this.templateUrl = 'views/my.profile.html';
        this.controller = MyProfileController;
    }

    static directiveFactory() {
        return new MyProfileDirective();
    }
}