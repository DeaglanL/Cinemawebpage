"use strict";

(function () {

    angular.module('apolloCinema').service("dal", ["$http", "$q", "$log", Dal]);

    function Dal ($http, $q, $log) {
        this.http = (function serviceCaller() {
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

                POST: function (apiPath, itemToSave) {
                    let deferred = $q.defer();
                    $http(
                        {
                            method: "post",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                        deferred.resolve(results.data);
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                PUT: function (apiPath, itemToSave) {
                    let deferred = $q.defer();
                    $http(
                        {
                            method: "put",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                        deferred.resolve(results);
                    }, function (e) {
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