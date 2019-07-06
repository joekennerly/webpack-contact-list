console.log("Comps loaded");

export const Comps = {

  dashboard() {
    return `
    <h1> Tracker </h1>
    <div id="form-container"></div>
    <div id="list-container"></div>
    `
  },

  categoryForm() {
    return `
    <div>
    <input type="text" id="name-input" placeholder="new cagetory">
    <button id="save-btn">Create</button>
    </div>`
  },

  category(obj) {
    return `
    <div class="category">
    <p><b>${obj.name}Category #${obj.id}</b></p>

    <article class="card-container"></article>

    <button id="edit-${obj.id}">edit</button>
    <button id="del-${obj.id}">delete</button>
    </div>
  `
  }
}
