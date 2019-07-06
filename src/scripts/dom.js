import { Comps } from "./components.js";
import { Act } from "./actions.js";
import { API } from "./api.js";

export const dom = {
  displayDashboard() {
    // #container.innerhhtml = dashboard containers
    Act.render("#container", Comps.dashboard());
    // Load the pre-existing categories
    API.getData("categories")
      .then(categories => {
        categories.forEach(category => {
          Act.plus("#list-container", Comps.category(category))
        })
      })

    // Append create category form to #form-container
    Act.render("#form-container", Comps.categoryForm());

    // When save btn clicked...
    Act.click("#save-btn", () => {
      // Save input as obj
      let category = Act.makeObj(document.querySelector("#name-input").value);
      // Pass input obj to contact component and += to dom
      Act.plus("#list-container", Comps.category(category));
    });
  }
}