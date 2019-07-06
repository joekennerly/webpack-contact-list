console.log("Actions loaded")

export const Act = {
  render(container, component) {
    document.querySelector(container).innerHTML = component
  },
  plus(container, component) {
    document.querySelector(container).innerHTML += component
  },
  click(button, callback) {
    document.querySelector(button).addEventListener("click", callback)
  },
  makeObj(param) {
    return {
      name: param,
      value: null
    }
  },
  // Edit Handler
  editHandler() {
    Act.click("#edit", event => {
      let parentElement = event.target.parentElement;
      console.log("edit", parentElement);
    });
  },
  // Delete Handler
  deleteHandler() {
    Act.click("#del", event => {
      let parentElement = event.target.parentElement.parentElement;
      let card = event.target.parentElement;
      parentElement.removeChild(card);
    });
  }
}