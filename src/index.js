import Commerce from '@chec/commerce.js';

var pubKey = 'pk_1832690656a0cfa0f61589546f588413b8866fc98f7a6'

const commerce = new Commerce(pubKey);

commerce.products.list().then(products => {
    console.log('products', products)
});

console.log('woooo')
