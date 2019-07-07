// console.log("dom loaded")

import { Comps } from "./components.js";
import { Act } from "./actions.js";
import { API } from "./api.js";

export const dom = {
  displayWelcome() {
    Act.render("#container", Comps.welcome());
    Act.click("#login-button", () => {
      let username = document.querySelector("#username-input").value
      if (!username) alert("You must enter a username")
      else {
        API.getData("users")
          .then(users => {
            let validUser = users.filter(user => {
              return user.name === username
            })
            if (!validUser[0]) alert("invalid username")
            else {
              console.log(`${validUser[0].name}, id = ${validUser[0].id}`)
              sessionStorage.setItem("activeUser", validUser[0].id)
              this.displayDashboard()
            }
        })
      }
    })
  },

  displayDashboard() {
    let state = parseInt(sessionStorage.getItem("activeUser"))
    console.log("state = ", state)
    // #container.innerhhtml = dashboard containers
    Act.render("#container", Comps.dashboard());
    Act.click("#logout-button", () => {
      sessionStorage.removeItem("activeUser")
      this.displayWelcome()
    })

    // Load the pre-existing categories
    API.getData("categories")
      .then(categories => {
        let activeCatigories = categories.filter(cat => cat.userId === state)
        activeCatigories.forEach(cat => Act.plus("#list-container", Comps.category(cat)))
      }),
    // Append create category form to #form-container
    Act.render("#form-container", Comps.categoryForm());

    // When save btn clicked...
    Act.click("#save-btn", () => {
      // Save input as obj
      let category = Act.makeObj(document.querySelector("#name-input").value);

      // If there is no name for category, alert message
      if (!category.name) alert("please enter a name for the category")
      else Act.plus("#list-container", Comps.category(category))
    });
  }
}