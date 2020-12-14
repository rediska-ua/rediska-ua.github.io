const view = (orders) => {
  return `
    <form class = "order" id = "order">
      <h1>Введите данные для оформления заказа</h1>
      <h2>Ваше имя</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Пожалуйста, введите Ваше имя" id = "name" required pattern = "[А-Я][а-я]*">
      </div>
      <h2>Ваша фамилия</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Пожалуйста, введите Вашу фамилию" id = "lastname" required pattern = "[А-я][а-я]*">
      </div>
      <h2>Ваш номер телефона</h2>
      <div class = "toValidate">
        <input type = "tel" class = "validationInput" placeholder = "Пожалуйста, введите Ваш номер телефона" id = "phone" required pattern = "[+][3][8][0][0-9]{9}">
      </div>
      <h2>Ваш город</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Пожалуйста, введите Ваш город" id = "city" required pattern = "[А-Я][а-я]*">
      </div>
      <h2>Ваш адрес</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Пожалуйста, введите Ваш адрес" id = "address" required>
      </div>
      <h2>Ваш Email</h2>
      <div class = "toValidate">
        <input type = "email" class = "validationInput" placeholder = "Пожалуйста, введите Ваш email" id = "email" required pattern = "[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*">
      </div>
      <div class = "buttonsOrder">
        <button class = "btn" onclick = "submitForm()">Подтвердить</button>
        <button class = "btn" onclick = "goBack()">Обратно к корзине</button>
      </div>
    </form>
  `
}

export default view;