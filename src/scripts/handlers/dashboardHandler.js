// console.log("dashboard loaded")

import { Comps } from "../components.js";
import { Act } from "../actions.js";
import { dom } from "../dom.js";
import { API } from "../api.js";
import { cardHandler } from "./cardHandler.js";

export const dashboardHandler = {
  logout() {
    Act.click("#logout-button", () => {
      sessionStorage.removeItem("activeUser");
      dom.displayWelcome();
    });
  },

  // Load categories in active state
  loadCategories(state) {
    API.getData("categories").then(categories => {
      let activeCatigories = categories.filter(cat => cat.userId === state);
      activeCatigories.forEach(cat => {
        //Add each Category
        Act.plus("#list-container", Comps.category(cat))

        cardHandler.init(state)
        cardHandler.addCard(state)
      });
    });
  },

  // When save btn clicked...
  createCategory(state) {
    Act.click("#save-btn", () => {
      // Save input as obj
      let category = Act.makeObj(
        document.querySelector("#name-input").value,
        state
      );

      // If there is no name for category, alert message
      if (!category.name) alert("please enter a name for the category");
      else {
        API.postData("categories", category).then(() => {
          document.querySelector("#list-container").innerHTML = "";
          this.loadCategories(state);
          cardHandler.init(state)
          cardHandler.addCard(state)
        });
      }
    });
  },

  // Delete
  deleteCategory(state) {
    Act.click("#list-container", event => {
      let id = event.target.id;
      if (id.startsWith("del-")) {
        console.log(event.target.id);
        id = id.split("-");
        API.deleteData("categories", id[1]).then(() => {
          document.querySelector("#list-container").innerHTML = "";
          this.loadCategories(state);
        });
      }
    });
  },

  // Edit
  editCategory(state) {
    Act.click("#list-container", event => {
      let id = event.target.id;
      if (id.startsWith("edit-")) {
        id = id.split("-");
        document.querySelector(`#category-${id[1]}`).innerHTML = "";
        document.querySelector(
          `#category-${id[1]}`
        ).innerHTML += Comps.categoryEditForm();
        Act.click("#save-edit", () => {
          let editCategory = Act.makeObj(
            document.querySelector("#name-edit").value,
            state
          );
          if (!editCategory.name) alert("please enter a name for the category");
          else {
            API.editData("categories", id[1], editCategory).then(() => {
              document.querySelector("#list-container").innerHTML = "";
              this.loadCategories(state);
            });
          }
        });
      }
    });
  }
};
