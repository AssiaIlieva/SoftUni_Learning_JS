function browserHistory(obj, commandsArr) {
  for (let command of commandsArr) {
    let [action, name] = command.split(" ");
    if (action === "Clear") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    } else if (action === "Open") {
      if (!obj["Open Tabs"].includes(name)) {
        obj["Open Tabs"].push(name);
        obj["Browser Logs"].push(command);
      }
    } else if (action === "Close") {
      if (obj["Open Tabs"].includes(name)) {
        let index = obj["Open Tabs"].indexOf(name);
        let closedTab = obj["Open Tabs"].splice(index, 1);
        obj["Recently Closed"].push(closedTab);
        obj["Browser Logs"].push(command);
      }
    }
  }
  console.log(obj["Browser Name"]);
  if (obj["Open Tabs"].length > 0) {
    console.log(`${"Open Tabs"}: ${obj["Open Tabs"].join(", ")}`);
  } else {
    console.log(`${"Open Tabs"}:`);
  }
  if (obj["Recently Closed"].length > 0) {
    console.log(`${"Recently Closed"}: ${obj["Recently Closed"].join(", ")}`);
  } else {
    console.log(`${"Recently Closed"}: `);
  }
  if (obj["Browser Logs"].length > 0) {
    console.log(`${"Browser Logs"}: ${obj["Browser Logs"].join(", ")}`);
  } else {
    console.log(`${"Browser Logs"}:`);
  }
}
browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
