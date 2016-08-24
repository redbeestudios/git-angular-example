'use strict';

export default class UserService {

    /*ngInject*/
    constructor($http){
        this.$http = $http;
        this.BASE_URL = 'https://api.github.com/';
        this.starredUsers = [];
    }

    getUsers(query){
        return this.$http.get(this.BASE_URL + 'search/users', { params: {q: query}});
    }

    getUser(username) {
        return this.$http.get(this.BASE_URL + 'users/' + username);
    }

    star(username) {
        if (!this.isStarred(username)) {
            this.starredUsers.push(username);
        }
    }

    isStarred(username) {
        return typeof this.starredUsers.find(user => user === username) !== 'undefined';
    }
}