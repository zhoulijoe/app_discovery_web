import { MockTaskManagerInstance } from '../managers/mocks/mockTaskManager';

/**
 * @ngdoc function
 * @name appDiscoveryWebApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the appDiscoveryWebApp
 */
function TasksController () {
    this.tasks = MockTaskManagerInstance.tasks;
}

export { TasksController };
