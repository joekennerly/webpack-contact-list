// console.log("Main loaded");

// import { API } from "./api.js";
// import { Comps } from "./components.js";
// import { Act } from "./actions.js";
import { dom } from "./dom.js";

// On page load
if(!sessionStorage) dom.displayWelcome()
else dom.displayDashboard()