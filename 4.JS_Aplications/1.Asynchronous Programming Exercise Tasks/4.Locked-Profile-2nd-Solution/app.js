function lockedProfile() {
  (async () => {
    let profileRequest = await fetch(
      `http://localhost:3030/jsonstore/advanced/profiles`
    );
    let profiles = await profileRequest.json();
    let mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    Object.keys(profiles).forEach((key, i) => {
      let profile = profiles[key];
      let htmlProfile = createHtmlProfile(
        i + 1,
        profile.username,
        profile.email,
        profile.age
      );
      mainSection.appendChild(htmlProfile);
    });
  })();
  function createHtmlProfile(userIndex, username, email, age) {
    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    let profileImage = document.createElement("img");
    profileImage.src = "./iconProfile2.png";
    profileImage.classList.add("userIcon");

    let lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock";

    let lockRadio = document.createElement("input");
    lockRadio.type = "radio";
    lockRadio.name = `user${userIndex}Loced`;
    lockRadio.value = "lock";
    lockRadio.checked = true;

    let unlockLabel = document.createElement("label");
    unlockLabel.textContent = "Unlock";

    let unLockRadio = document.createElement("input");
    unLockRadio.type = "radio";
    unLockRadio.name = `user${userIndex}Loced`;
    unLockRadio.value = "unlock";

    let br = document.createElement("br");
    let hr = document.createElement("hr");

    let usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";

    let usernameInput = document.createElement("input");
    usernameInput.name = `user${userIndex}Username`;
    usernameInput.value = username;
    usernameInput.readOnly = true;
    usernameInput.disabled = true;

    let hiddenFieldsDiv = document.createElement("div");
    hiddenFieldsDiv.id = `user${userIndex}Username`;

    let hiddenFieldsHr = document.createElement("hr");

    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = `user${userIndex}Email`;
    emailInput.value = email;
    emailInput.readOnly = true;
    emailInput.disabled = true;

    let agelLabel = document.createElement("label");
    agelLabel.textContent = "Age:";
    let agelInput = document.createElement("input");
    agelInput.type = "text";
    agelInput.name = `user${userIndex}Age`;
    agelInput.value = age;
    agelInput.readOnly = true;
    agelInput.disabled = true;

    hiddenFieldsDiv.appendChild(hiddenFieldsHr);
    hiddenFieldsDiv.appendChild(emailLabel);
    hiddenFieldsDiv.appendChild(emailInput);
    hiddenFieldsDiv.appendChild(agelLabel);
    hiddenFieldsDiv.appendChild(agelInput);

    hiddenFieldsDiv.style.display = 'none'

    let showMoreBtn = document.createElement("button");
    showMoreBtn.textContent = "Show more";
    showMoreBtn.addEventListener("click", showHiddenInfoHendler);

    profileDiv.appendChild(profileImage);
    profileDiv.appendChild(lockLabel);
    profileDiv.appendChild(lockRadio);
    profileDiv.appendChild(unlockLabel);
    profileDiv.appendChild(unLockRadio);
    profileDiv.appendChild(br);
    profileDiv.appendChild(hr);
    profileDiv.appendChild(usernameLabel);
    profileDiv.appendChild(usernameInput);
    profileDiv.appendChild(hiddenFieldsDiv);
    profileDiv.appendChild(showMoreBtn);

    return profileDiv;
  }
  function showHiddenInfoHendler(e) {
    let profile = e.target.parentElement;
    let showMoreButton = e.target;
    let hiddenFieldsDiv = e.target.previousElementSibling;
    let radioButton = profile.querySelector("input[type=radio]:checked");
    if (radioButton.value !== "unlock") {
      return;
    }
    showMoreButton.textContent =
      showMoreButton.textContent === "Show more" ? "Hide it" : "Show more";
    hiddenFieldsDiv.style.display =
      hiddenFieldsDiv.style.display === "block" ? "none" : "block";
  }

  {
    /* <div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="" disabled readonly />
				<div class="user1Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user1Age" value="" disabled readonly />
				</div>
				
				<button>Show more</button>
			</div> */
  }
}
