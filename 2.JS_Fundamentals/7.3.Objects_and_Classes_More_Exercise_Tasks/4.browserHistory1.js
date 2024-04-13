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
  console.log(`${"Open Tabs"}: ${obj["Open Tabs"].join(", ")}`);
  console.log(`${"Recently Closed"}: ${obj["Recently Closed"].join(", ")}`);
  console.log(`${"Browser Logs"}: ${obj["Browser Logs"].join(", ")}`);
}

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
