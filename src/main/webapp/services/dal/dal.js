"use strict";

(function () {

    angular.module('apolloCinema').service("dal", ["$http", "$q", "$log", Dal]);

    function Dal ($http, $q, $log) {
        console.log("in DAL method");
        this.http = (function serviceCaller() {
            console.log("choosing HTTP method");
            return {

                GET: function (apiPath) {
                    let deferred = $q.defer();
                    $http.get(apiPath).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                POST: function (apiPath, itemToPost) {
                    console.log("In POST DAL");
                    let deferred = $q.defer();
                    $http(
                        {
                            method: "post",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToPost)
                        }
                    ).then(function (results) {
                        console.log("Resolved successfully");
                        deferred.resolve(results.data);
                    }, function (e) {
                        console.log("DAL failed");
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                PUT: function (apiPath, itemToPut) {
                    console.log("In PUT DAL");
                    let deferred = $q.defer();
                    $http(
                        {
                            method: "put",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToPut)
                        }
                    ).then(function (results) {
                        console.log("Resolved successfully");
                        deferred.resolve(results.data);
                    }, function (e) {
                        console.log("DAL failed");
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                DELETE: function (apiPath, itemToDelete) {
                    let deferred = $q.defer();
                    $http.delete(apiPath + itemToDelete.id).then(function () {
                        deferred.resolve();
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                }
            }
        })();
        $log.debug("DAL Instantiated");
    }
}());