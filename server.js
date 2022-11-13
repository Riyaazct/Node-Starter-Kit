// const express = require("express");
// const app = express();

// // app.get("/", (req, res) => res.send("Yay Node!"));
// app.get("/", (req, res) => {
//   res.send("Yay Node!!");
//   // console.log("This is the request Object on line 7:", res);
// });

// app.get("/node", (req, res) => res.send("Node it is 👌"));

// app.get("/codeyourfuture", (req, res) =>
//   res.send("Code your future is awesome!!!")
// );

// app.get("/chocolate", (req, res) => {
//   let amount = req.query.amount;
//   res.send("Hello World! The amount of chocolates is " + amount);
// });

// // code here
// app.get("/multiply", function (req, res) {
//   let value1 = req.query.value1;
//   let value2 = req.query.value2;
//   res.send(
//     `The result of : ${value1} multiplied by ${value2} = ${
//       value1 * value2
//     } `
//   );
// });

// app.listen(3000, () =>
//   console.log(
//     "Server is listening on port 3000. Ready to accept requests!"
//   )
// );

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// app.get("/multiply", (req, res) => {
//   let value1 = req.query.value1;
//   let value2 = req.query.value2;
//   res.send("The total of the 2 values is: " + value1 * value2);
// });

const express = require("express");
const app = express();

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:albumId", function (req, res) {
  // req.params.albumId will match the value in the url after /albums/
  const albumId = req.params.albumId;
  res.send(albumsData.find((element) => element.albumId === albumId));

  // now we can use the value for req.params.albumId to find the album requested
  // how do we "find" something in an array

  // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
});

// notice .post (not .get)
app.post("/albums", function (req, res) {
  console.log("POST /albums route");
});

app.post("/albums", function (req, res) {
  console.log("POST /albums route");
  console.log(req.body);
});

app.listen(3000, () =>
  console.log(
    "Server is listening on port 3000. Ready to accept requests!"
  )
);
