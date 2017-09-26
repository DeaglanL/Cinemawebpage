cinemaApp.controller('MainCtrl', ['$scope', 'dataShare',
    function ($scope, dataShare) {
        $scope.text = 'Hey';
        $scope.send = function () {
            dataShare.sendData($scope.text);
        };

    }
]);

cinemaApp.factory('dataShare', function ($rootScope) {
    let service = {};
    service.data = false;
    service.sendData = function (data) {
        this.data = data;
        $rootScope.$broadcast('data_shared');
    };
    service.getData = function () {
        return this.data;
    };
    return service;
});