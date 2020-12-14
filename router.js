
class Router {
  getCurrentState() {
    let viewName = '';
    let endpointName = '';
    switch (window.location.hash.split('#')[1]) {
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
      case 'actions/':
        viewName = 'actionPage';
        endpointName = 'actions';
        break;
      default:
        globalThis.history.pushState({}, null, `/#`);
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


