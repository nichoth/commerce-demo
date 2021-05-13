import Commerce from '@chec/commerce.js';

var pubKey = 'pk_1832690656a0cfa0f61589546f588413b8866fc98f7a6'

const commerce = new Commerce(pubKey);

var prods = commerce.products.list().then(products => {
    // console.log('products', products)
    return products
});

var cart = commerce.cart.retrieve()
    .then((cart) => {
        // console.log('cart', cart)
        return cart
    });

Promise.all([cart, prods])
    .then(([cart, prods]) => {
        console.log('cart', cart)
        console.log('prods', prods)

        commerce.cart.add(prods.data[1].id, 5)
            .then((response) => {
                console.log('response', response)
            });
    })

console.log('woooo')
