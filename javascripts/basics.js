// simple first function
function welcome() {

  var greeting = "I'm so glad to be learning a new language, and sharing it dynamically with you!";
  $("#main").append( greeting );
}

// use prompt method
user_name = prompt("What's your name?");

// use string concatenation with prompt variable
function address(name){
  $("#main").append("Hi " + name + "! It's really nice to meet you. " );
}

//function to capitalize user_name
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// call address function with user_name as an argument
address( capitalize(user_name) );
welcome();
