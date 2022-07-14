

for (var i = 0 ; i < document.querySelectorAll('.drum').length ; i++){

  document.querySelectorAll('button')[i].addEventListener("click",function(){
    var b = this.innerHTML;

    makeSound(b);
    buttonAnimation(b);
  });

}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    break;
    default:

}

}

function buttonAnimation(currentkey) {

  var activebtn = document.querySelector("."+ currentkey);

  activebtn.classList.add("pressed");

  setTimeout(function(){activebtn.classList.remove("pressed")},100);

}
