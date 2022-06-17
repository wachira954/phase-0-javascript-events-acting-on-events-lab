// Your code here
//console.dir(document)
//console.log(document.body)
const dodger = document.getElementById("dodger");
console.log(dodger);
//dodger.style.backgroundColor = "#000000";
//dodger.style.backgroundColor = "#FF69B4";
//dodger.style.bottom = "100px";
//dodger.style.bottom = "0px";
//dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });
  console.log(KeyboardEvent);

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  
  //const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerRight();
    }
  });

