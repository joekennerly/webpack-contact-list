console.log("Main loaded");

import { API } from "./api.js";
import { Comps } from "./components.js";
import { Act } from "./actions";


Act.renderForm(Comps.formComponent());
Comps.initializeFormListener();


API.getData("contacts").then(contactData => {
  console.log("contactData:", contactData)
  contactData.forEach(contact => { });
});
