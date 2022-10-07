const fs = require('fs');
const express = require('express');
const path = require('path');

//Requiring the data
const { users } = require('users.json'); //Ask loction of source file

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Query function for GET method
function filterByQuery(query, usersArray) {
  let filteredResults = usersArray;

  if (query.id) {
    filteredResults = filteredResults.filter(user => user.id === query.id);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(user => user.name === query.name);
  }
  if (query.email) {
    filteredResults = filteredResults.filter(user => user.email === query.email);
  }
  //verify passwords route
  if (query.password) {
    filteredResults = filteredResults.filter(user => user.password === query.password);
  }
  return filteredResults;
}

//Filter by Name function for GET method
function findById(id, usersArray) {
  const result = usersArray.filter(user => iser.id === id)[0];
  return result;
}

//Function to add user to json file using POST method
function createUser (body, usersArray) {
  console.log(body);

  const user = body;
  usersArray.push(user);
  fs.writeFileSync(

    path.join(__dirname, 'users.json'), //Ask loction of file
    JSON.stringify({ users: usersArray }, null, 2)
  );
  return user;
}

//Function to validate user's data from body
function validateUser(user) {
  if (!user.name || typeof user.name !== 'string') {
    return false;
  }
  if (!user.password || typeof user.password !== 'string') {
    return false;
  }
  if (!user.email || typeof user.email !== 'string') {
    return false;
  }
  return true;
}

//Get method to filter by query
app.get('/api/users', (req, res) => {
  let results = users;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  console.log(req.query);
  res.json(results);
});

//Get method to filter by ID
app.get('/api/users/:id', (request, response) => {
  const result =findById(request.params.id, users);
  if (result) {
    response.json(result);
  } else {
    response.send(404);
  }
});

//POST method to add users to json file
app.post('/api/users', (req, res) => {
  console.log(req.body);
  req.body.id = users.length.toString();

  if (!validateUser(req.body)) {
    res.status(400).send('Please introduce all the required information.');
  } else {
    const user = createUser(req.body, users);

    //Converts response to JSON format
    res.json(req.body);
  }
});

//Getting html to be served from Express.js server
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html')); //Ask location of html
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
