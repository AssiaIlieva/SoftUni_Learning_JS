function matchFullName(text) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

  let match = text.match(pattern);
  console.log(match.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
