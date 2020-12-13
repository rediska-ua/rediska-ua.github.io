const view = object => {
  console.log("finished");
  return `
  <div class = "finishedOrder">
    <span>Ваш заказ №${object.id} принят на обработку</span>
    <a href = "/#">Вернуться на главную</a>
  </div>
    `;
}

export default view;