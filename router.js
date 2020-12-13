
class Router {
  getCurrentState() {
    let viewName = '';
    let endpointName = '';
    switch (window.location.hash.split('#')[1]) {
      case '':
        window.location.hash = '';
        viewName = "mainPage";
        endpointName = 'db';
        break;
      case 'catalog':
        viewName = 'catalogPage';
        endpointName = 'db';
        break;
      case 'actions':
        viewName = 'actionsPage';
        endpointName = 'actions';
        break;
      case 'order':
        viewName = 'orderPage';
        endpointName = 'orders';
        break;
      case 'product/':
        viewName = 'productPage';
        endpointName = 'products';
        break;
      case 'cart':
        viewName = 'cartPage';
        endpointName = 'db';
        break;
      default:
        window.location.hash = '';
        viewName = "mainPage";
        endpointName = 'db';
        break;
    }
    return {
      viewName,
      endpointName
    };
  }
}

export default Router;


