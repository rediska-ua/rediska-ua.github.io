const view = actions => {
  return `
    <div class="actions">
      <div class = "wrapper">
        ${actions.map(action => `
            <div class="action_item">
              <div class="action_info">
                <h2 class = "action_name">${action.name}</h2>
                <a href = ${"/#actions/#" + action.url}>
                  <img class = "action_image" src = "${action.image}" alt = "slider_item">
                </a>
              </div>
            </div>
        `).join('')}
      </div>
    </div>`;
}

export default view;