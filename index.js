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
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
getParties();

async function postParties(data) {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    //const data = await response.json();
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };

postParties();

getParties();
