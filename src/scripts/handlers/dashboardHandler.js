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
  createCategory(state) {
    Act.click("#save-btn", () => {
      // Save input as obj
      let category = Act.makeObj(document.querySelector("#name-input").value, state);

      // If there is no name for category, alert message
      if (!category.name) alert("please enter a name for the category")
      else {
        API.postData("categories", category)
        document.querySelector("#list-container").innerHTML = ""
        // API.getData("categories")
        //   .then(categories => {
        //   console.log(categories)
        // })
        this.loadCategories(state)
        // Act.plus("#list-container", Comps.category(category))
      }
    })
  },

  // Delete
  deleteCategory(state) {
    Act.click("#list-container", event => {
      let id = event.target.id
      if (id.startsWith("del-")) {
        console.log(event.target.id)
        id = id.split("-")
        API.deleteData("categories", id[1])
        document.querySelector("#list-container").innerHTML = ""
        this.loadCategories(state)
      }
    })
  }
  // document.querySelector("#listContainer").addEventListener("click", event => {
  //   let id = event.target.id
  //   if (event.target.id.startsWith("edit-")){
  //     let eventName = document.querySelector("#event-name").value;
  //     let eventDate = document.querySelector("#event-date").value;
  //     let eventLocation = document.querySelector("#event-location").value;
  //     const card = this.newEvent(eventName, eventDate, eventLocation)
  //     id = id.split("-")
  //     API.editCard("events", id[1], card)
  //   }
  // })
}