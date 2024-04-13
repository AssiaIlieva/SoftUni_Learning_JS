function matchFullName(text) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
  let match = pattern.exec(text);
  let result = [];
  while (match !== null) {
    result.push(match[0]);
    match = pattern.exec(text);
  }
  console.log(result.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
