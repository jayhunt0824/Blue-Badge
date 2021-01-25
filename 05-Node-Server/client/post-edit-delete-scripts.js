/* *************************
 *** POST JOURNAL ***
 ************************** */
function postJournal() {
  // console.log("postJournal Function Called");
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let entry = document.getElementById("entry").value;
  const accessToken = localStorage.getItem("sessionToken");
  let newEntry = { journal: { title: title, date: date, entry: entry } };
  // console.log("accessToken", accessToken);

  fetch("http://localhost:3000/journal/create", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: accessToken,
    }),
    body: JSON.stringify(newEntry),
  })
    .then((response) => {
      console.log(response.json());
      displayMine();
    })
    .catch((err) => {
      console.log(err);
    });
}

/* *************************
 *** UPDATE JOURNAL ***
 ************************** */
function editJournal(postId) {
  console.log(postId);
  const fetch_url = `http://localhost:3000/journal/update/${postId}`;
  const accessToken = localStorage.getItem("sessionToken");

  let card = document.getElementById(postId);
  let input = document.createElement("input");

  if (card.childNodes.length < 2) {
    card.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("id", "updatedEntry");
    input.setAttribute("placeholder", "Edit your journal entry");
  } else {
    let updated = document.getElementById("updatedEntry").value;
    let updateEntry = { journal: { entry: updated } };
    const response = fetch(fetch_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(updateEntry),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        displayMine();
      });
    card.removeChild(card.lastChild);
  }
}

/* *************************
 *** DELETE JOURNAL ***
 ************************** */
function deleteJournal(postId) {
  console.log("deleteJournal working");
  console.log(postId);

  const fetch_url = `http://localhost:3000/journal/delete/${postId}`;
  const accessToken = localStorage.getItem("sessionToken");

  fetch(fetch_url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  }).then((response) => {
    console.log(response);
    displayMine();
  });
}
