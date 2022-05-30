import angular from 'angular';

import {initialiseAgGridWithAngular1, ModuleRegistry, ClientSideRowModelModule} from "ag-grid-enterprise";

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

initialiseAgGridWithAngular1(angular);
ModuleRegistry.registerModules([ClientSideRowModelModule])

class AppCtrl {
    constructor($scope) {
        const columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];

        const rowData = [
            {make: "Toyota", model: "Celica", price: "35000"},
            {make: "Ford", model: "Mondeo", price: "32000"},
            {make: "Porsche", model: "Boxter", price: "72000"}
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowData: rowData,
            onGridReady: function (params) {
                params.api.sizeColumnsToFit();
            }
        }
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['agGrid'])
    .directive('app', app)
    .controller('AppCtrl', ['$scope', AppCtrl]);

export default MODULE_NAME;
