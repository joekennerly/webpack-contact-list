// console.log("Main loaded");

import { dom } from "./dom.js";

// On page load
if(sessionStorage.length === 0) dom.displayWelcome()
else dom.displayDashboard()