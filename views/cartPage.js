const view = object => {
  const storage = JSON.parse(localStorage.getItem('cart'));
  const products = object.products.filter(product => Object.keys(storage).includes(`${product.id}`));
  let totalPrice = 0;
  products.map(product => totalPrice = totalPrice + product.price * storage[product.id]);
  return `
  <h1>Ваша корзина</h1>
  <div class = "cart">
    ${products.map(product => `
      <div class = "cart_item">
        <div class = "cart_item_wrapper">
          <img class = "productImage" src = "${product.images[0]}" alt = "imageProduct">
          <h2 class = "product_name">${product.productName}</h2>
        </div>
        <div class = "positionInfo">
          <span>${product.price * storage[product.id]}</span>
          <button class = "cart_btn" onclick = "addToCart(${product.id})">Добавить в корзину</button>
          <span>${storage[product.id]}</span>
          <button class = "cart_btn" onclick = "removeFromCart(${product.id})">Убрать из корзины</button>
        </div>
      </div>
    `).join('')}
    <span class = "totalPrice">Всего: ${totalPrice}</span>
    <button class = "cart_btn" onclick = "processOrder()">Оформить заказ</button>
  </div>
    `;
}

export default view;