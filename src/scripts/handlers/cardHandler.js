import { Comps } from "../components.js";
import { API } from "../api.js";
import { Act } from "../actions.js";

console.log("cards loaded")

export const cardHandler = {
  init(state) {
    API.getData("cards")
      .then(cards => {
        let activeCards = cards.filter(card => card.userId === state)
        activeCards.forEach(card => {
          // console.log(card)
          // I think there needs to be a .sort


          // console.log(card.catId)
          Act.plus("#card-list", Comps.card(card))
        })
    })
  },

  addCard(state) {
    Act.click("#add-card", (event) => {
      let cat = parseInt(event.target.parentElement.parentElement.id.split("-")[1])
      let card = Act.makeObj(document.querySelector("#card-name").value, state)
      card.catId = cat
      card.amount = document.querySelector("#card-amount").value
      card.date = document.querySelector("#card-date").value
      console.log(cat)
      console.log(card)

      document.querySelector("#card-list").innerHTML += Comps.card(card);

      // if (!card.name) alert("please enter a name for the card");
      // else {
      //   API.postData("cards", card).then(() => {
      //     this.init(state);
      //   });
      // }
    })
  }
}