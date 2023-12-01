function extractEmails(input) {
  let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;
  let result = input.match(pattern);
  if(result){
      result.forEach((element) => {
        console.log(element);
      });
  }
}
extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);
