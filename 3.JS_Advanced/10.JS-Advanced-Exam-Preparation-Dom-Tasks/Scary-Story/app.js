window.addEventListener("load", solve);

function solve() {
  let divMainEl = document.getElementById("main");
  let previewUlEl = document.getElementById("preview-list");
  let firstNameEl = document.getElementById("first-name");
  let lastNameEl = document.getElementById("last-name");
  let ageEl = document.getElementById("age");
  let storyTitleEl = document.getElementById("story-title");
  let genreEl = document.getElementById("genre");
  let storyEl = document.getElementById("story");

  let publishBtn = document.getElementById("form-btn");

  publishBtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let age = ageEl.value;
    let storyTitle = storyTitleEl.value;
    let genre = genreEl.value;
    let story = storyEl.value;

    if (
      firstName === "" ||
      lastName === "" ||
      age === "" ||
      storyTitle === "" ||
      genre === "" ||
      story === ""
    ) {
      return;
    }
    let h4NameEl = document.createElement("h4");
    h4NameEl.textContent = `Name: ${firstName} ${lastName}`;
    let pAgeEl = document.createElement("p");
    pAgeEl.textContent = `Age: ${age}`;
    let pTitleEl = document.createElement("p");
    pTitleEl.textContent = `Title: ${storyTitle}`;
    let pGenreEl = document.createElement("p");
    pGenreEl.textContent = `Genre: ${genre}`;
    let pStoryEl = document.createElement("p");
    pStoryEl.textContent = story;
    let articlePreviewEl = document.createElement("article");

    articlePreviewEl.appendChild(h4NameEl);
    articlePreviewEl.appendChild(pAgeEl);
    articlePreviewEl.appendChild(pTitleEl);
    articlePreviewEl.appendChild(pGenreEl);
    articlePreviewEl.appendChild(pStoryEl);

    let liPreviewEl = document.createElement("li");
    liPreviewEl.setAttribute("class", "story-info");
    liPreviewEl.appendChild(articlePreviewEl);

    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.textContent = "Save Story";
    liPreviewEl.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit Story";
    liPreviewEl.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = "Delete Story";
    liPreviewEl.appendChild(deleteBtn);

    previewUlEl.appendChild(liPreviewEl);

    publishBtn.disabled = true;

    let editFirstName = firstName;
    let editLastName = lastName;
    let editAge = age;
    let editStoryTitle = storyTitle;
    let editGenre = genre;
    let editStory = story;

    firstNameEl.value = "";
    lastNameEl.value = "";
    ageEl.value = "";
    storyTitleEl.value = "";
    genreEl.value = "";
    storyEl.value = "";

    editBtn.addEventListener("click", (ev) => {
      firstNameEl.value = editFirstName;
      lastNameEl.value = editLastName;
      ageEl.value = editAge;
      storyTitleEl.value = editStoryTitle;
      genreEl.value = editGenre;
      storyEl.value = editStory;

      publishBtn.disabled = false;
      liPreviewEl.remove();
    });

    saveBtn.addEventListener("click", (ev) => {
      divMainEl.textContent = "";
      let h1SavedMassageEl = document.createElement("h1");
      h1SavedMassageEl.textContent = "Your scary story is saved!";
      divMainEl.appendChild(h1SavedMassageEl);
    });

    deleteBtn.addEventListener("click", (ev) => {
      publishBtn.disabled = false;
      liPreviewEl.remove();
    });
  });
}
