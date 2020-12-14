const view = products => {

  let hash = window.location.hash.split('#')[2];
  let product = products.find(item => item.url === hash);
  if (product === undefined) {
    return undefined
  }
  return `
    <div class = "Item">
      <h2 class = "itemName">${product.productName}</h2>
      <img class = "productMainImage" src = "${product.images[0]}" alt = "imageProduct">
      <span>${product.productDescription}</span>
      <div class = "priceAndAdd">
        <span>${product.price}</span>
        <button class = "btn" onclick = "addToCart(${product.id})">Добавить в корзину</button>
      </div>
    </div>
    <h2>Связанные товары:</h2>
    <div class = "relatedProducts">
      ${products.filter(item => product.relatedProductIds.includes(item.id)).map(someProduct => `
        <div class = "relatedItemitem">
          <a class = "productLink" href = ${"/#product/#" + someProduct.url} onclick = "">
            <img class = "relatedProductImage" src = "${someProduct.images[0]}" alt = "imageProduct">
          </a>
          <h2 class = "product_name">${someProduct.productName}</h2>
          <span>${someProduct.price}</span>
        </div>`).join('')}
    </div>
    `;
}

export default view;