
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-prajakta/events";

const state = {
  events: [],
};

  const partyForm = document.getElementById("newPartyForm");

  let parties = [
    {
      id: 1,
      name: "eva",
      date: "2023-12-01",
      time: "18:00",
      location: "venue1",
      description: "lorem ipsum",
    },
    {
      id: 2,
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
        location:${party.location}<br>
        description:${party.description}<br>
        <button class = "deleteButton">Delete</button>
        `;
      partyList.appendChild(partyItem);
      const deleteButton = partyItem.querySelector('.deleteButton');
      deleteButton.addEventListener('click', () => deleteParty(party.id));
    });
  }
  
  async function getParties() {
    try {
      const response = await fetch(API_URL);
      const responseJson = await response.json();
      const events = responseJson.data;
      state.events = events;
      console.log(state.events);
      } catch (error) {
      console.error(error.message);
    }
  }
  async function inIt(){
  await getParties();
  renderPartyList(state.events);
  const button = document.getElementsByClassName('button');
  button[0].addEventListener('click', postUserData)
  }
  renderPartyList(state.events)

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
      console.log(result)
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


 async function postUserData(events){
  events.preventDefault()
     new_event_name  = document.getElementById("partyName");
     new_date = document.getElementById("date");
     new_time = document.getElementById("time");
     new_location = document.getElementById("location");
     new_description = document.getElementById("description");
     let new_event_json = {
        name: new_event_name.value,
        description: new_description.value,
        date: new Date(new_date.value).toISOString(), // Date ISO string
        location: new_location.value
              }
              //console.log(new_date);
     await postParties(new_event_json)
     new_event_name.value = "";
     new_date.value = "";
     new_time.value = "";
     new_location.value = "";
     new_description.value = "";
     await inIt()
}

async function deleteParty(id){
    try {
      console.log(id)
          const response = await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"}
          })
   await getParties();
  renderPartyList(state.events);
    } 
    catch (error) {
          console.error(error.message);
        
        }
      }
      
  inIt()    
    
