'use strict';
export default class DetailController {

    constructor (userService, $stateParams) {
        this.message = 'Hello from detail';
        this.userService = userService;
        this.$stateParams = $stateParams;
        this.getUser();
    }

    getUser() {
        this.userService
            .getUser(this.$stateParams.id)
            .then(response => {
                this.user = response.data;
            });
    }

}