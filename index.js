const COHORT = "REPLACE_ME!";
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-prajakta/events";

const state = {
  events: [],
};

document.addEventListener("DOMContentLoaded", async function () {
  const partyForm = document.getElementById("newPartyForm");

  let parties = [
    {
      name: "eva",
      date: "2023-12-01",
      time: "18:00",
      location: "venue1",
      description: "lorem ipsum",
    },
    {
      name: "john",
      date: "2023-12-06",
      time: "19:00",
      location: "venue2",
      description: "lorem ipsum1",
    },
  ];
  console.log(parties);

  function renderPartyList(parties) {
    const partyList = document.getElementById("partyList");
       // parties.addEventListener('click', function(parties))
       partyList.innerHTML = "";
    parties.forEach((party, index) => {
      const partyItem = document.createElement("div");
      partyItem.className = "partyItem";
      partyItem.innerHTML = `<strong>${party.name}</strong><br>
        date:${party.date}<br>
        location:${party.location}<br>
        description:${party.description}<br>
        <button oneClick ="click(${party.id})">Delete</button>
        `;
      partyList.appendChild(partyItem);
    });
  }
  async function getParties() {
    try {
      const response = await fetch(API_URL);
      const responseJson = await response.json();
      const events = responseJson.data;
      //console.log(events)
      state.events = events;
      console.log(state.events);
      //const jsonResponse1 = await response.json();
      // state.events = jasonResponse1.data;
      //const result = jsonResponse
      // return result;
    } catch (error) {
      console.error(error.message);
    }
  }
  await getParties();
  renderPartyList(state.events);

  // window.deleteparty = function (index) {
    // //parties.splice(index, 1);
     //renderPartyList();
   //};
 //const button = document.querySelector("button");
//   button.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const newName = document.getElementById("partyName").value;
//     const newDate = document.getElementById("date").value;
//     const newLocation = document.getElementById("location").value;
//     const newTime = document.getElementById("time").value;
//     const newDescription = document.getElementById("description");
//     parties.push({
//       name: newName,
//       date: newDate,
//       time: newTime,
//       location: newLocation,
//       description: newDescription,
//     });
//     renderPartyList();
//     partyForm.reset();
//   });
  //renderPartyList();
  renderPartyList(state.events)
})



async function postParties(data) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonResponse = await response.json();
      const result = jsonResponse;
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }
  


let name = []
const data = { id: 1,
    name: "Event Name",
    description: "This is a description of the event.",
    date: "2021-09-30T00:00:00.000Z", // Date ISO string
    location: "123 Street" };

let new_event_name;
let new_date;
let new_time;
let new_location;
let new_description;


function postUserData(){
     new_event_name  = document.getElementById("partyName");
     new_date = document.getElementById("date");
     new_time = document.getElementById("time");
     new_location = document.getElementById("location");
     new_description = document.getElementById("description");
     let new_event_json = {
        name: new_event_name,
        description: new_description,
        date: new_date, // Date ISO string
        location: new_location
      }
     postParties(new_event_json)
}

async function deleteParty(id){
    try {
          const response = await fetch(`${API_URL} ${'/'} ${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"}
          })
          const responseJson = await response.json();
          const events = responseJson.data;
          state.events = events;
          console.log(state.events);
    } 
    catch (error) {
          console.error(error.message);
        }
      }
      
    
