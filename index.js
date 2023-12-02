const COHORT = "REPLACE_ME!";
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-prajakta/events";

const state = {
  events: [],
};

document.addEventListener("DOMContentLoaded", function () {
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
    partyList.innerHTML = "";
    parties.forEach((party, index) => {
      const partyItem = document.createElement("div");
      partyItem.className = "partyItem";
      partyItem.innerHTML = `<strong>${party.name}</strong><br>
        date:${party.date}<br>
        time:${party.time}<br>
        location:${party.location}<br>
        description:${description}<br>
        <button oneClick ="deleteParty(${index})">Delete</button>
        `;
      partyList.appendChild(partyItem);
    });
  }

  renderPartyList(parties);

  window.deleteparty = function (index) {
    parties.splice(index, 1);
    renderPartyList();
  };
  const button = document.querySelector("button");
  button.addEventListener("submit", function (event) {
    event.preventDefault();
    const newName = document.getElementById("partyName").value;
    const newDate = document.getElementById("date").value;
    const newLocation = document.getElementById("location").value;
    const newTime = document.getElementById("time").value;
    const newDescription = document.getElementById("description");
    parties.push({
      name: newName,
      date: newDate,
      time: newTime,
      location: newLocation,
      description: newDescription,
    });
    renderPartyList();
    partyForm.reset();
  });
  //renderPartyList();
});

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
getParties();

/*async function postParties() {
  try {
    const postPartyResponse = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT-prajakta/events",{
            method: "POST",
             headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    const jsonResponse = await response.json();
    const party = jsonResponse
    return party
      } catch (error) {
    console.error(error.message);
  }
}*/

const data = { username: "example" };

async function postParties() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    const result = jsonResponse;
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
postParties();
