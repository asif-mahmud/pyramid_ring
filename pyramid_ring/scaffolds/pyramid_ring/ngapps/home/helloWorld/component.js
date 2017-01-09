/**
 * Created by shimon on 1/9/17.
 */
"use strict";
angular
    .module('helloWorld')
    .component('helloWorld', {
    templateUrl: 'helloworld.html',
    controller: function () {
        this.greet = 'Hello World';
    }
});