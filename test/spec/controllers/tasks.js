'use strict';

describe('Controller: TasksCtrl', function () {

    // load the controller's module
    beforeEach(module('appDiscoveryWebApp'));

    var TasksCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TasksCtrl = $controller('TasksCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should contain list of 5 tasks', function () {
        expect(TasksCtrl.tasks.length).toBe(5);
    });
});
