const view = object => {
  return `
    <h2>ТОП МЕСЯЦА</h2>
    <div class = "products">
      ${object.recommendations.map(product => object.products.filter(item => item.id === product).map(productItem =>  `
        <div class = "product_item">
          <a class = "productLink" href = ${"/#product/#" + productItem.url} onclick = "">
            <img src = "${productItem.images[0]}" alt = "imageProduct" width = "450px" height = "300px">
          </a>
          <h2 class = "product_name">${productItem.productName}</h2>
          <span>${productItem.price}<span>
        </div>
    `).join('')).join('')}
    </div>
  `;
}

export default view;