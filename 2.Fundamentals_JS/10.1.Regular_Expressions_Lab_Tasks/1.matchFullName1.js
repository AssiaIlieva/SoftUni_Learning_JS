function matchFullName(names) {
  let pattern = /\b(?<name>[A-Z][a-z]+) (?<surname>[A-Z][a-z]+)\b/g;
  
  let validNames = [];
  while((validName = pattern.exec(names)) !== null){
    console.log(validName);
    validNames.push(validName[0])
  }
  console.log(validNames.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
