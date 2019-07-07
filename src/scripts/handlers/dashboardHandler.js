// console.log("dashboard loaded")

import { Comps } from "../components.js";
import { Act } from "../actions.js"
import { dom } from "../dom.js"
import { API } from "../api.js";

export const dashboardHandler = {
  logout() {
    Act.click("#logout-button", () => {
      sessionStorage.removeItem("activeUser")
      dom.displayWelcome()
    })
  },

  // Load categories in active state
  loadCategories(state) {
    API.getData("categories")
      .then(categories => {
        let activeCatigories = categories.filter(cat => cat.userId === state)
        activeCatigories.forEach(cat => Act.plus("#list-container", Comps.category(cat)))
      })
  },

  // When save btn clicked...
  createCategory() {
    Act.click("#save-btn", () => {
      // Save input as obj
      let category = Act.makeObj(document.querySelector("#name-input").value);

      // If there is no name for category, alert message
      if (!category.name) alert("please enter a name for the category")
      else Act.plus("#list-container", Comps.category(category))
    })
  }
}