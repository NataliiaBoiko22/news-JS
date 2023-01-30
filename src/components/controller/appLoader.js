import Loader from './loader';
class AppLoader extends Loader {
    apiKey;
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '189b5038bfe94d7fa5c972b24790ee64', // получите свой ключ https://newsapi.org/

            // apiKey: 'dd7ccd0a32494fb691c471a79c824e0c', // получите свой ключ https://newsapi.org/
        });
    }
}
export default AppLoader;
