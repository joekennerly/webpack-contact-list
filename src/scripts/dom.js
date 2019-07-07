// console.log("dom loaded")

import { Comps } from "./components.js";
import { Act } from "./actions.js";
import { welcomeHandler } from "./handlers/welcomeHandler.js";
import { dashboardHandler } from "./handlers/dashboardHandler.js";

export const dom = {
  displayWelcome() {
    Act.render("#container", Comps.welcome());
    // At user login, sessStore is set to userId
    welcomeHandler.login()
  },

  displayDashboard() {
    // State displays info pertaining only to user
    let state = parseInt(sessionStorage.getItem("activeUser"))
    Act.render("#container", Comps.dashboard());
    Act.render("#form-container", Comps.categoryForm());
    dashboardHandler.logout()
    dashboardHandler.loadCategories(state)
    dashboardHandler.createCategory(state)
    dashboardHandler.deleteCategory(state)
    dashboardHandler.editCategory(state)
  }
}