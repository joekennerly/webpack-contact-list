// console.log("Actions loaded")

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
  // EXPERIMENTAL - On pressing enter for text inputs
  // enter(input, callback) {
  //   document.querySelector(input).addEventListener("keyup", () => {
  //     if ("keyup" === 13) callback
  //   })
  // },
  makeObj(param) {
    return {
      name: param,
      value: null
    }
  },
  // Delete Handler
  deleteHandler() {
    Act.click("#del", event => {
      let parentElement = event.target.parentElement.parentElement;
      let card = event.target.parentElement;
      parentElement.removeChild(card);
    });
  },
  // Edit Handler
  editHandler() {
    Act.click("#edit", event => {
      let parentElement = event.target.parentElement;
      console.log("edit", parentElement);
    });
  }
}