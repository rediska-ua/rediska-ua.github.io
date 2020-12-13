const view = products => {

  let hash = window.location.hash.split('#')[2];
  let product = products.find(item => item.url === hash);
  return `
    <div class = "Item">
      <h2 class = "itemName">${product.productName}</h2>
      <img src = "${product.images[0]}" alt = "imageProduct" width = "450px" height = "300px">
      <span>${product.productDescription}</span>
      <span>${product.price}<span>
      <button class = "btn" onclick = "addToCart(${product.id})">Добавить в корзину</button>
    </div>
    <div class = "relatedProducts">
      ${products.filter(item => product.relatedProductIds.includes(item.id)).map(someProduct => `
        <div class = "relatedItemitem">
          <a class = "productLink" href = ${"/#product/#" + someProduct.url} onclick = "">
            <img src = "${someProduct.images[0]}" alt = "imageProduct" width = "250px" height = "150px">
          </a>
          <h2 class = "product_name">${someProduct.productName}</h2>
          <span>${someProduct.price}<span>
        </div>`).join('')}
    </div>
    `;
}

export default view;