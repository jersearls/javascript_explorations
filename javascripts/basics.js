// use string concatenation with userName variable
function address(name){
  $("h1").html(name + ' is ready to learn some JavaScript!');
}

// gather user input
$('#header').on('click', function (e) {
  // send info to console
  console.log(e.target);
  // call address function with user_name as an argument
  var userName = $('input[name="whoami"]').val();
  address(_.capitalize(userName));
})


