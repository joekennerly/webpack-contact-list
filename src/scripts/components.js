// console.log("Comps loaded");

export const Comps = {

  welcome() {
    return `
    <div id="welcome-page">
      <header>
        <h1> Tracker </h1>
        <div id="login-container">
          <input id="username-input" type="text" value="joe"/>
          <button id="login-button">Login</button>
        </div>
      </header>
      <div id="list-container"></div>
    </div>
    `
  },

  dashboard() {
    return `
    <header>
      <h1> Tracker </h1>
      <div id="form-container"></div>
      <button id="logout-button">Logout</button>
    </header>
    <div id="list-container"></div>
    `
  },

  categoryForm() {
    return `
    <div>
    <input type="text" id="name-input" placeholder="new cagetory">
    <button class="btn" id="save-btn">Create</button>
    </div>`
  },
  categoryEditForm() {
    return `
    <div>
    <input type="text" id="name-edit" placeholder="enter new name" autofocus>
    <button class="btn" id="save-edit">Change</button>
    </div>`
  },

  category(obj) {
    return `
    <div class="category" id="category-${obj.id}">
      <p><b>${obj.name} #${obj.id}</b></p>

      <p>Total:</p>

      <article class="card-container">
        <div id="card-list"></div>
        <div class="card-form">
          <input type="text" id="card-name" placeholder="name"/>
          <input type="text" id="card-amount" placeholder="$0.00"/>
          <input type="date" id="card-date">
        </div>
        <button id="add-card">+</button>
      </article>

      <footer>
        <button id="edit-${obj.id}" class="btn">edit</button>
        <button id="del-${obj.id}" class="btn">delete</button>
      </footer>
    </div>
  `
  },

  card(obj) {
    return `<div id="card-${obj.id}" class="card">
      <div>${obj.name}: $ ${obj.amount}</div>
      <div>
        <button>~</button>
        <button>x</button>
      </div>
    </div>`
  }
}
