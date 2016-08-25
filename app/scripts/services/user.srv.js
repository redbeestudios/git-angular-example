'use strict';
export default class UserService {

    constructor($http) {
        this.$http = $http;
        this.BASE_URL = 'https://api.github.com/';
    }

    getUsers(query){
        return this.$http.get(this.BASE_URL + 'search/users', { params: {q: query}});
    }

    getUser(username) {
        return this.$http.get(this.BASE_URL + 'users/' + username);
    }

}