const view = object => {
  return `
    <h1>ТОП МЕСЯЦА</h1>
    <div class = "products">
      ${object.recommendations.map(product => object.products.filter(item => item.id === product).map(productItem =>  `
        <div class = "product_item">
          <a class = "productLink" href = ${"/#product/#" + productItem.url} onclick = "">
            <img class = "productImage" src = "${productItem.images[0]}" alt = "imageProduct">
          </a>
          <h2 class = "product_name">${productItem.productName}</h2>
          <span>${productItem.price}</span>
          <button class = "btn" onclick = "addToCart(${productItem.id})">Добавить в корзину</button>
        </div>
    `).join('')).join('')}
    </div>
  `;
}

export default view;