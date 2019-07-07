// console.log("welcome handler loaded")

import { Act } from "../actions.js";
import { API } from "../api.js";
import { dom } from "../dom.js";

export const welcomeHandler = {
  login() {
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
              dom.displayDashboard()
            }
        })
      }
    })
  }
}