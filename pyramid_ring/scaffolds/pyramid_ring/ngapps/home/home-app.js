/**
 * Created by shimon on 1/2/17.
 */
"use strict";
var homeApp = angular.module('homeApp', []);

homeApp.controller('HelloWorld', function ($scope) {
    $scope.greet = 'Hello World!!!';
});