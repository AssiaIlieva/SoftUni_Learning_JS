function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      let text = articles.shift();
      let container = document.getElementById("content");
      let newArticle = document.createElement("article");
      newArticle.innerText = text;
      container.appendChild(newArticle);
    }
  };
}
