// simple first function
function welcome() {

  var greeting = "I'm so glad to be learning a new language, and sharing it dynamically with you!";
  $("#main").append( greeting );
}

// use prompt method
user_name = prompt("What's your name?");

// use string interpolation with prompt variable
function address(name){
  $("#main").append("Hi " + name + "! it's really nice to meet you. " );
}

// call address function with user_name as an argument
address(user_name);
welcome();
