// console.log("Actions loaded")

export const Act = {
  render(container, component) {
    document.querySelector(container).innerHTML = component;
  },
  plus(container, component) {
    document.querySelector(container).innerHTML += component;
  },
  click(button, callback) {
    document.querySelector(button).addEventListener("click", callback);
  },
  // EXPERIMENTAL - On pressing enter for text inputs
  // enter(input, callback) {
  //   document.querySelector(input).addEventListener("keyup", () => {
  //     if ("keyup" === 13) callback
  //   })
  // },
  makeObj(param, state) {
    return {
      name: param,
      userId: state
    };
  }
};
