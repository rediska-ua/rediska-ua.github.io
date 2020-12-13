class TemplateEngine {
  render(view) {
    const rootNode = document.getElementById('main');
    rootNode.innerHTML = view;
  }
  toLoad() {
    const rootNode = document.getElementById('main');
    rootNode.innerHTML = `
      <div class = "loader">
        <img id = "loader" src = "assets/25.gif" width = "100px" heigth = "100px">
      </div>
    `
  }
}

export default TemplateEngine;