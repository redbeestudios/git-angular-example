'use strict';
export default class HomeController {

    constructor(userService){
        this.message = 'Hello from controller';
        this.userService = userService;
    }

    findUser() {
        this.userService
            .getUsers(this.query)
            .then(response => { this.users = response.data.items; })
    }

}