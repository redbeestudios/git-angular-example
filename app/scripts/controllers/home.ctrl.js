'use strict';

export default class HomeController {

    /*ngInject*/
    constructor (userService) {
        this.message = 'Hello from controller';
        this.userService = userService;
    }

    getAllUsers(){
        this.userService
            .getUsers(this.query)
            .then(response => {
                this.users = response.data.items;
            });
    }

}