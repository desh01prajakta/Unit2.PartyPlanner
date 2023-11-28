const name = document.getElementById ("partyName").value;
const date = document.getElementById ("date").value;
const time = document.getElementById ("time"). value;
const description = document.getElementById ("description").value;
const location = document.getElementById ("location").value;
const partyList = document.getElementById ("partList");
const listItem = document.createElement ("li");
listItem.className = "party";

listItem.innerHTML = 
<button class = "deleteButton" oneclick = "deleteParty(this)">Delete</button>;
partyList.appendChild(listItem);