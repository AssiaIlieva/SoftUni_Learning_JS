function solve() {
  const inputTask = document.querySelector("#task");
  const inputDesc = document.querySelector("#description");
  const inputDate = document.querySelector("#date");
  const [inputSection, openSection, progressSection, completeSection] =
    document.querySelectorAll("section");
  const addBtn = document.querySelector("#add");
  addBtn.addEventListener("click", toDoAdd);

  function toDoAdd(event) {
    event.preventDefault();
    if (
      inputDate.value.trim() === "" ||
      inputDesc.value.trim() === "" ||
      inputTask.value.trim() === ""
    ) {
      return;
    }
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = inputTask.value;
    const pDesc = document.createElement("p");
    pDesc.textContent = `Description: ${inputDesc.value}`;
    const pDate = document.createElement("p");
    pDate.textContent = `Due Date: ${inputDate.value}`;
    const divBtns = document.createElement("div");
    divBtns.classList.add("flex");
    const startBtn = document.createElement("button");
    startBtn.classList.add("green");
    startBtn.textContent = "Start";
    startBtn.addEventListener("click", startArticle);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("red");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteArticle);
    divBtns.appendChild(startBtn);
    divBtns.appendChild(deleteBtn);
    article.appendChild(h3);
    article.appendChild(pDesc);
    article.appendChild(pDate);
    article.appendChild(divBtns);
    openSection.lastElementChild.appendChild(article);
    inputTask.value = "";
    inputDesc.value = "";
    inputDate.value = "";

    function deleteArticle(event) {
      article.remove();
    }

    function startArticle(event) {
      startBtn.remove();
      const finishBtn = document.createElement("button");
      finishBtn.classList.add("orange");
      finishBtn.textContent = "Finish";
      finishBtn.addEventListener("click", finishArticle);
      divBtns.appendChild(finishBtn);
      progressSection.lastElementChild.appendChild(article);
    }

    function finishArticle(event) {
      divBtns.remove();
      completeSection.lastElementChild.appendChild(article);
    }
  }
}
