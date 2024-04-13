window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let countElement = document.getElementById("people-count");
  let daysElement = document.getElementById("days-count");
  let fromDateElement = document.getElementById("from-date");
  let nextBtnElement = document.getElementById("next-btn");
  let main = document.getElementById("main");
  let infoListElement = document.querySelector(".ticket-info-list");
  let confirmListElement = document.querySelector(".confirm-ticket");
  let body = document.getElementById("body");

  nextBtnElement.addEventListener("click", onNext);

  function onNext(event) {
    event.preventDefault();

    if (
      firstNameElement.value === "" ||
      lastNameElement.value === "" ||
      countElement.value === "" ||
      daysElement.value === "" ||
      fromDateElement.value === ""
    ) {
      return;
    }
    let liElementInfo = document.createElement("li");
    liElementInfo.setAttribute("class", "ticket");

    let articleElementInfo = document.createElement("article");

    let fullName = document.createElement("h3");
    fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

    let fromDate = document.createElement("p");
    fromDate.textContent = `From date: ${fromDateElement.value}`;

    let forDays = document.createElement("p");
    forDays.textContent = `For ${daysElement.value} days`;

    let numPeople = document.createElement("p");
    numPeople.textContent = `For ${countElement.value} people`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.setAttribute("class", "continue-btn");
    continueBtn.textContent = "Continue";

    articleElementInfo.appendChild(fullName);
    articleElementInfo.appendChild(fromDate);
    articleElementInfo.appendChild(forDays);
    articleElementInfo.appendChild(numPeople);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(editBtn);
    liElementInfo.appendChild(continueBtn);

    infoListElement.appendChild(liElementInfo);

    let editFirstName = firstNameElement.value;
    let editLastName = lastNameElement.value;
    let editCoun = countElement.value;
    let editFromDate = fromDateElement.value;
    let editDays = daysElement.value;

    firstNameElement.value = "";
    lastNameElement.value = "";
    countElement.value = "";
    fromDateElement.value = "";
    daysElement.value = "";

    nextBtnElement.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit(event) {
      firstNameElement.value = editFirstName;
      lastNameElement.value = editLastName;
      countElement.value = editCoun;
      fromDateElement.value = editFromDate;
      daysElement.value = editDays;

      nextBtnElement.disabled = false;
      liElementInfo.remove();
    }

    continueBtn.addEventListener("click", onContinue);

    function onContinue(event) {
      let liElementConfirm = document.createElement("li");
      liElementConfirm.setAttribute("class", "ticket-content");

      let articleElementConfirm = document.createElement("article");
      articleElementConfirm = articleElementInfo;

      let confirmBtn = document.createElement("button");
      confirmBtn.setAttribute("class", "confirm-btn");
      confirmBtn.textContent = "Confirm";

      let cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("class", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      liElementConfirm.appendChild(articleElementConfirm);
      liElementConfirm.appendChild(confirmBtn);
      liElementConfirm.appendChild(cancelBtn);

      confirmListElement.appendChild(liElementConfirm);

      liElementInfo.remove();

      confirmBtn.addEventListener("click", onConfirm);

      function onConfirm(event) {
        main.remove();
        let thankYou = document.createElement("h1");
        thankYou.setAttribute("id", "thank-you");
        thankYou.textContent = "Thank you, have a nice day!";

        let backBtn = document.createElement("button");
        backBtn.setAttribute("id", "back-btn");
        backBtn.textContent = "Back";

        body.appendChild(thankYou);
        body.appendChild(backBtn);
      }

      cancelBtn.addEventListener("click", onCancel);
      function onCancel(event) {
        liElementConfirm.remove();
        nextBtnElement.disabled = false;
      }
    }
  }
}
