const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1:
  //   fs.readFile("./test-file.txt", "utf-8", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Solution 2: Stream
  //   const readableStream = fs.createReadStream("./test-file.txt");
  //   readableStream.on("data", (chunk) => res.write(chunk));
  //   readableStream.on("end", () => res.end());
  //   readableStream.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("Internal Server Error!");
  //   });

  //   Solution 3: Best solution for "BackPreasure"(responsing speed to the user is less than the reading speed from file)
  const readableStream = fs.createReadStream("./test-file.txt");
  readableStream.pipe(res); //  readableSource.pipe(writableDestination)
  readableStream.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("Internal Server Error!");
  });

  console.log("User Hited");
});

server.listen(8000, "127.0.0.1", () =>
  console.log("Server is running on port 8000")
);
