function loadingBar(percent) {
  let completed = "%".repeat(percent / 10);
  let incopleted = ".".repeat((100 - percent) / 10);

  if (percent < 100) {
    let message = completed + incopleted;
    console.log(`${percent}% [${message}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100% Complete!`);
  }
}
loadingBar(70);
