const view = object => {
    return `
        ${object.productsCategories.map(category => `
          <div class = "categoryItem">
           <h2 class = "categoryName">${category.description}</h2>
             <div class = "products">
               ${object.products.filter(item => item.categoryId === category.id).map(product => `
                  <div class = "product_item">
                    <a class = "productLink" href = ${"/websiteShop.github.io/#product/#" + product.url} onclick = "">
                      <img src = "${product.images[0]}" alt = "imageProduct" width = "450px" height = "300px">
                    </a>
                    <h2 class = "product_name">${product.productName}</h2>
                    <span>${product.price}<span>
                    <button class = "btn" onclick = "addToCart(${product.id})">Добавить в корзину</button>
                  </div>
                `).join('')}
              </div>
          </div>
        `).join('')}
      `;
}

export default view;

