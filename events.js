const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
    console.log("Inside Inherited Class");
  }
}

const mySales = new Sales();
mySales.on("newSale", () => {
  console.log("There was a new sale!");
});

mySales.on("newSale", () => {
  console.log("Customer name: Polash");
});

mySales.on("newSale", (stock) => {
  console.log(
    `There left only ${stock} ${stock === 1 ? "item" : "items"} in stock.`
  );
});

mySales.emit("newSale", 1);

// ===========================================================================

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received!");
  res.end("Request Received!");
});

// Here the second Emitter does not work parelally:
// server.on("request", (req, res) => {
//   console.log("Another Request Received!");
//   res.end("Another Request Received!");
// });

server.on("close", () => console.log("Server Closed!"));

server.listen(8000, "127.0.0.1", () => console.log("Waiting for request..."));
