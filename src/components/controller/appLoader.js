import Loader from './loader';
class AppLoader extends Loader {
    apiKey;
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'dd7ccd0a32494fb691c471a79c824e0c', // получите свой ключ https://newsapi.org/
        });
    }
}
export default AppLoader;
