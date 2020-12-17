const view = object => {
  return `
  <div class="slider">
    <div class = "wrapper">
    ${object.actions.map(action => `
      <div class="slide">
        <div class="content">
          <a href = ${"/#actions/#" + action.url}>
            <img class = "slider_image" src = "${action.image}">
          </a>
          <h2>${action.name}</h2>
        </div>
      </div>
    `).join('')}
      </div>
    </div>
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