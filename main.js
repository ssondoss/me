function counterSkills() {
  let x = document.getElementById("number1").innerHTML;
  for (let index = 0; index < 100; index++) {
    setTimeout(function () {
      x = index;
    }, 3000);
  }
}

counterSkills();
