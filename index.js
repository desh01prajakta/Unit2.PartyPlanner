const name = document.getElementById ("partyName").value;
const date = document.getElementById ("date").value;
const time = document.getElementById ("time"). value;
const description = document.getElementById ("description").value;
const location = document.getElementById ("location").value;
const partyForm = document.getElementById ("partyForm").value;
const newPartyForm = document.getElementById ("newPartyForm").value;
const partyList = document.getElementById ("partList");
const listItem = document.createElement ("li");
listItem.className = "party";

listItem.innerHTML = 
<button class = "deleteButton" oneclick = "deleteParty(this)">Delete</button>;
partyList.appendChild(listItem);

async function fetchParties(){
    try{
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/event')
const data = await response.json();
renderPartyList()
}catch (error){
    console.error('error fetching parties:', error.message)
}
}