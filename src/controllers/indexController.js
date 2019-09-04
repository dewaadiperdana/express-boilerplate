import ExampleService from '@services/exampleService';

export default class IndexController {
    static home(req, res) {
        res.send('Express boilerplate is ready');
    }
}