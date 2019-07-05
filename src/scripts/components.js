console.log("Comps loaded");

export const Comps = {
  container: document.getElementById("container"),

  initializeFormListener(button) {
    let saveBtn = document.querySelector(button);
    console.log(saveBtn);
    // debugger

    saveBtn.addEventListener("click", () => {
      console.log("button clicked");
    });
  },

  formComponent() {
    return `
    <input type="text" id="name-input" placeholder="name">
    <input type="text" id="phone-input" placeholder="phone">
    <input type="text" id="address-input" placeholder="address">
    <button id="save-btn">Save Contact</button>`;
  },

  contactComponent(contactObject) {
    return `
    <div>
    <p><b>${contactObject.name}</b></p>
    <p>Phone: ${contactObject.phone}</p>
    <p>Address: ${contactObject.address}</p>
    <button>click</button>
    </div>
  `
  }
}
