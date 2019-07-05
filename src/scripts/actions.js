console.log("Actions loaded")

export const Act = {
  render(container, component) {
    document.querySelector(container).innerHTML = component;
    console.log("Done appending form");
  }
}