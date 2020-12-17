import TemplateEngine from './templateEngine.js';
import Client from './client.js';
import Router from './router.js';

const router = new Router();
const templateEngine = new TemplateEngine();
const client = new Client();

let place = document.getElementById('quantity');
let quantity;


const renderSlides = () => {

  const slides = document.getElementsByClassName('slide');
  slides[0].classList.add("current");

  return slides;

}

  
const nextSlide = (slides) => {
  const current = document.getElementsByClassName("current")[0];
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};
  


const mainFunction = () => {

  quantity = place.innerText;

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
      let idOfInterval;
      if (viewName === "mainPage") {
        const slides = renderSlides();
        idOfInterval = setInterval(nextSlide, 5000, slides);
      } else {
        clearInterval(idOfInterval);
      }
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
      place.innerText = `0`;
      localStorage.clear();
    });


}

globalThis.addToCart = (id) => {
  quantity++;
  place.innerText = `${quantity}`;
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
  quantity--;
  place.innerText = `${quantity}`;
  const value = JSON.parse(localStorage.getItem('cart'));
  --value[id];
  if(value[id] === 0) {
    delete value[id];
  }
  localStorage.setItem('cart', JSON.stringify(value));
  mainFunction();

}

globalThis.processOrder = () => {
  if (quantity == 0) {
    globalThis.history.pushState({}, null, `/#`);
    alert("Вы ничего не заказали");
  } else {
    globalThis.history.pushState({}, null, `/#order`);
  }
  mainFunction();
}



window.addEventListener('hashchange', () => mainFunction());
mainFunction()








