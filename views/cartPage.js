const view = object => {
  const storage = JSON.parse(localStorage.getItem('cart'));
  const products = object.products.filter(product => Object.keys(storage).includes(`${product.id}`));
  let totalPrice = 0;
  products.map(product => totalPrice = totalPrice + product.price * storage[product.id]);
  return `
  <div class = "cart">
    ${products.map(product => `
      <div class = "cart_item">
        <img src = "${product.images[0]}" alt = "imageProduct" width = "450px" height = "300px">
        <h2 class = "product_name">${product.productName}</h2>
        <span>${product.price}<span>
        <button class = "btn" onclick = "addToCart(${product.id})">Добавить в корзину</button>
        <span>${storage[product.id]}<span>
        <button class = "btn" onclick = "removeFromCart(${product.id})">Убрать из корзины</button>
      </div>
    `).join('')}
    <span>Total price is ${totalPrice}</span>
    <a href = "/#order" onclick = "">Оформить заказ</a>
  </div>
    `;
}

export default view;