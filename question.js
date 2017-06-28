
var flashcard = require('./question.js');
var inquirer = require('inquirer');

  function friend(){


inquirer.prompt([
{
  type: 'input',
  name: 'size1',
  message: "Do they trust you?",
},
{
  type: 'input',
  name: 'size2',
  message: "Do you trust them?",
},
{
  type: 'input',
  name: 'size3',
  message: "Do you care about them?"
},
{
  type: 'input',
  name: 'size4',
  message: "Does this person love you?"
},
{
  type: 'input',
  name: 'size5',
  message: "What's your best friend's name?"
},
{
  type: 'input',
  name: 'size6',
  message: "What do you like most about them?",
},
{
  type: 'input',
  name: 'size7',
  message: "Do you trust them?",
},
{
  type: 'input',
  name: 'size8',
  message: "Do you guys hang out?"
},
{
  type: 'input',
  name: 'size9',
  message:  "Do you live close to this person?"
},
{
  type: 'input',
  name: 'size10',
  message: "Have they ever made you cry?"
}
]).then(function(response){

console.log('You entered '+response.size);
  });

};

module.exports = friend;


