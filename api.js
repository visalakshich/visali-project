const express = require("express")
const app = express();
//console.log(app)
const bodyparser = require('body-parser')
app.use(bodyparser.json());
let persons = [
  {
    "id": 1,
    "name": "priya",
    "company": "wipro",
  }, {

    "id": 2,
    "name": "sandhya",
    "company": "ibm",
  }, {``  

    "id": 3,
    "name": "prashanth",
    "company": "tcs",
  }, {

    "id": 4,
    "name": "papireddy",
    "company": "accenture",
  }, {

    "id": 5,
    "name": "gouse",
    "company": "infosys"
  }
];
// server checking
app.get('/', (req, res) => {
  console.log("server running")
});
// // get all the users
app.get('/get', (req, res) => {
  // res.status(500).send(persons);
  res.send(persons);
})
// // app.listen(7000, () => {
// //   console.log("users");
// // })
// // get id
app.get('/get/:name', (req, res) => {
  const a = req.params.name;
  const b = persons.filter(d => d.name == a);
  res.send(b)

  //   if (person) {
  //     res.status(200).send(person);
  //   }
  //   else {
  //     res.status(404).json("invalid id");

  //   }
  // res.send(person)
  // })
  // // app.listen(7000, () => {
  // //   console.log("users");
  // // })
  app.post('/post/', (req, res) => {
    const person = req.body;
    persons.push(person);
    res.json(persons);
  })
});
// // app.listen(7000, () => {
// //   console.log("users");
// // })
// // we delete the any id
// app.delete('/delete/:id', (req, res) => {
//   const id = req.params.id - 1;
//   if (id >= 0) {
//     persons.splice(id, 1);
//     res.status(200).send(persons);
//   }
//   else {
//     res.status(404).send("vyshu is good employee");
//   }
// })
app.put("/put/:id", (req, res) => {
  const id = req.params.id - 1; //to take the index value
  persons[id]["name"] = req.body.name;
  persons[id]["company"] = req.body.company;
  res.send(persons);
});

app.listen(6000, () =>
  console.log('completed'));
