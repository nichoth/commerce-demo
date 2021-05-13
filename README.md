# commerce demo

trying things

-----------------------------------------------

## test card

4242424242424242

https://commercejs.com/docs/guides/test-gateway#example-implementation

```js
// Create a function that can be called when a "Complete order" button is clicked
function captureCheckout() {
  // Using the checkout token we created earlier, we can use Commerce.js to capture the checkout
  commerce.checkout.capture(checkout.id, {
    // Add in any order details we might have gathered on this page
    ...orderDetails,
    payment: {
      gateway: 'test_gateway',
      card: {
        number: '4242424242424242',
        expiry_month: '02',
        expiry_year: '24',
        cvc: '123',
        postal_zip_code: '94107',
      },
    },
  }).then((order) => {
    console.log(order);
  }).catch((error) => {
    // Something went wrong during capture:
    console.log(error);
  });
}
```

### with square
>  send the created nonce to the Chec API to capture the checkout.



