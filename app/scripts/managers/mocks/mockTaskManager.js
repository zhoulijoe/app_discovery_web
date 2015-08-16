import { Task } from '../../models/task';

class MockTaskManager {

    constructor() {
        this.tasks = [
            new Task(1, 'Find app for a specific purpose'),
            new Task(2, 'Find out if Yume restaurant is open today'),
            new Task(3, 'Buy cheapest non-stop flight to Beijing'),
            new Task(4, 'Improve sleep pattern'),
            new Task(5, 'Adopt a cat')
        ];
    }
}

var MockTaskManagerInstance = new MockTaskManager();

export { MockTaskManagerInstance };
