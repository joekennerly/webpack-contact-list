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
    <div class="card">
      <div>Name: $0.00</div>
      <div>
        <button>~</button><button>x</button>
      </div>
    </div>
    <div class="card">
    <div>Name: $0.00</div>
      <div>
        <button>~</button><button>x</button>
      </div>
    </div>
    <div class="card">
    <div>Name: $0.00</div>
      <div>
        <button>~</button><button>x</button>
      </div>
    </div>

    <button>+</button>
    </article>

    <footer>
    <button id="edit-${obj.id}" class="btn">edit</button>
    <button id="del-${obj.id}" class="btn">delete</button>
    </footer>
    </div>
  `
  }
}
