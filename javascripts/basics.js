function welcome() {

  var greeting = "I'm so glad to be learning a new language, and sharing it dynamically!";
  $("#main").append( greeting );
}

user_name = prompt("What's your name?");

function address(name){
  $("#main").append("Hi " + name + "! it's really nice to meet you. " );
}

address(user_name);

welcome();

