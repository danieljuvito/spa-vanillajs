import Router from './Router.js';
import './Counter.js';

const router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add(/about/, () => {
        document.title = 'About';
        alert('welcome in about page');
    })
    .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
        document.title = 'Product';
        alert(`products: ${id} specification: ${specification}`);
    })
    .add('', () => {
        // general controller
        document.title = 'Home';
        console.log('welcome in catch all controller');
    });
