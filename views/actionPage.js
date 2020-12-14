const view = actions => {

  let hash = window.location.hash.split('#')[2];
  let action = actions.find(item => item.url === hash);
  if (action === undefined) {
    return undefined
  }
  return `
    <div class="action">
      <div class="wrapperAction">
        <div class="actionInfo">
            <h2 class = "action_name">${action.name}</h2>
            <img class = "action_image" src = "${action.image}" alt = "slider_item">
            <span>${action.description}</span>
            <span>${action.datePosted}</span>
        </div>
        </div>
      </div>
    </div>`;
}

export default view;