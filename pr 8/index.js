
document.addEventListener('keypress', submit);

  function submit(){
    var a = document.getElementById("email").value;
    var b = document.getElementById("name").value;
    var c = document.getElementById("number").value;
    var d = document.getElementById("password").value;
    if(a.trim() == ''){
     let f = document.querySelector('re');
    b.setAttribute("disabled", "disabled");
  } else {
      b.setAttribute("disabled");
      alert("Succses");
  }

  }
