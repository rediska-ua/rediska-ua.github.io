const view = (orders) => {
  return `
    <form class = "order" id = "order">
      <h2>Name</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Enter your name" id = "name" required pattern = "[A-Z][a-z]*">
      </div>
      <h2>Last Name</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Enter your last name" id = "lastname" required pattern = "[A-Z][a-z]*">
      </div>
      <h2>Phone Number</h2>
      <div class = "toValidate">
        <input type = "tel" class = "validationInput" placeholder = "Enter your phone number" id = "phone" required pattern = "[+][3][8][0][0-9]{9}">
      </div>
      <h2>City</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Enter your city" id = "city" required pattern = "[A-Z][a-z]*">
      </div>
      <h2>Address</h2>
      <div class = "toValidate">
        <input type = "text" class = "validationInput" placeholder = "Enter your address" id = "address" required>
      </div>
      <h2>Email</h2>
      <div class = "toValidate">
        <input type = "email" class = "validationInput" placeholder = "Enter your email" id = "email" required pattern = "[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*">
      </div>
      <div class = "buttonsOrder">
        <button onclick = "submitForm()">Подтвердить</button>
        <button onclick = "goBack()">Обратно к корзине</button>
      </div>
    </form>
  `
}

export default view;