/*const name = document.getElementById ("partyName")
const date = document.getElementById ("date")
const time = document.getElementById ("time")
const description = document.getElementById ("description")
const location = document.getElementById ("location")*/
const partyForm = document.getElementById ("partyForm")
const newPartyForm = document.getElementById ("newPartyForm")
const partyList = document.getElementById ("partyList");
/*const listItem = document.createElement ("li");
listItem.className = "party";

listItem.innerHTML = 
<button class = "deleteButton" oneclick = "deleteParty(this)">Delete</button>;
partyList.appendChild(listItem);

async function fetchParties(){
    try{
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/event')
const data = await response.json();
party
renderPartyList()
}catch (error){
    console.error('error fetching parties:', error.message)
}
}*/
document.addEventListener('DOMContentLoaded', function () {
    const partyList = document.getElementById('party-list');
    const partyForm = document.getElementById('new-party-form');

const parties =[
    {name:"eva", date:"2023-12-01", time: "18:00", location: "venue1", description:"lorem ipsum"},
    {name: "john", date: "2023-12-06", time: "19:00", location: "venue2", description: "lorem ipsum1"}
]
console.log(parties)

function renderPartyList(){
    partyList.innerHTML = '';
    parties.forEach((party, index) => {
        const partyItem = document.createElement('div')
        partyItem.className = 'party-item';
        partyItem.innerHTML = `<strong>${party.name}</strong><br>
        date: ${party.date}<br>
        time: ${party.time}<br>
        location: ${party.location}<br>
        description: ${party.description}<br>
        <button oneclick = "deleteParty(${index})">Delete</button>`;
        partyList.appendChild(partyItem)
    })
}

window.deleteparty = function(index){
    parties.splice(index,1);
    renderPartyList();
}

partyForm.addEventListener('submit', function (event) {
event.preventDefault();
const newName = document.getElementById('partName').value;
const newDate = document.getElementById('date').value;
const newLocation = document.getElementById('location').value;
const newTime = document.getElementById('time').value;
const newDescription = document.getElementById('description').value;
parties.push({
    name: newName,
    date: newDate,
    time: newTime,
    location: newLocation,
    description: newDescription
})
renderPartyList();
partyForm.reset();
})
renderPartyList();
});