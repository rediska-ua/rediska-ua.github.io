const view = object => {
  console.log("finished");
  return `
  <div class = "finishedOrder">
    <span>Ваш заказ №${object.id} принят на обработку</span>
    <button class = "cart_btn">
      <a href = "/#">Вернуться на главную</a>
    </button>
  </div>
    `;
}

export default view;