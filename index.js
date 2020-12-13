import TemplateEngine from './templateEngine.js';
import Client from './client.js';
import Router from './router.js';

const router = new Router();
const templateEngine = new TemplateEngine();
const client = new Client();


const mainFunction = () => {

  console.log("mainFunc")

  templateEngine.toLoad();

  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', "{}")
  }

  const {viewName, endpointName} = router.getCurrentState();

  let view;
  import (`./views/${viewName}.js`)
    .then((viewModule) => {
      view = viewModule.default;
      return client.getData(endpointName);
    })
    .then((data) => {
      templateEngine.render(view(data));
    });
}

globalThis.goBack = () => {
  window.history.back();
}

globalThis.submitForm = () => {

  const form = document.getElementById('order');
  if (!form.checkValidity()) {
    alert("Incorrect form of the form");
    return;
  }

  const name = document.getElementById('name');
  const lastName = document.getElementById('lastname');
  const phone = document.getElementById('phone');
  const city = document.getElementById('city');
  const address = document.getElementById('address');
  const email = document.getElementById('email');
  const cart = JSON.parse(localStorage.getItem('cart'));
  const time = new Date();
  console.log(time);

  const order = {
    name: name.value,
    lastName: lastName.value,
    phone: phone.value,
    city: city.value,
    address: address.value,
    email: email.value,
    products: cart,
    orderTime: time,
  }
  templateEngine.toLoad();
  
  let view;
  import (`./views/orderFinish.js`)
    .then((viewModule) => {
      view = viewModule.default;
      return client.postData(order, 'orders');
    })
    .then((data) => {
      globalThis.history.pushState({}, null, `/#order/order${data.id}`);
      templateEngine.render(view(data));
      localStorage.clear();
    });


}

globalThis.addToCart = (id) => {
  const value = JSON.parse(localStorage.getItem('cart'));
  if (value[id] === undefined) {
    value[id] = 1;
  } else {
    ++value[id];
  }
  localStorage.setItem('cart', JSON.stringify(value));
  mainFunction();

}

globalThis.removeFromCart = (id) => {
  const value = JSON.parse(localStorage.getItem('cart'));
  --value[id];
  if(value[id] === 0) {
    delete value[id];
  }
  localStorage.setItem('cart', JSON.stringify(value));
  mainFunction();

}



window.addEventListener('hashchange', () => mainFunction());
//window.addEventListener('load', () =>  mainFunction())

mainFunction()








