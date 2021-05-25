document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

const fileInput = document.querySelector("#file-js-example input[type=file]");
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector("#file-js-example .file-name");
    fileName.textContent = fileInput.files[0].name;
  }
};

var keys = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var code='';

function getCode(button){
	code=generateCode(8);
	document.getElementById('code').innerHTML = "<center><label style='font-size:35px; margin-top:30px;'>"+code+"</label></center>";
	document.getElementById('button').removeAttribute('disabled');
	button.setAttribute('disabled', 'disabled');
}

function generateCode(len){
	code='';
		for(i=0; i<len; i++){
			code+=keys.charAt(Math.floor(Math.random()*keys.length));
		}
	
	return code;
}

function checkCode(button){
	var val=document.getElementById('ccode').value;
	
if(val == ""){
		document.getElementById('result').innerHTML="<center class='text-danger'>Fill up the form first!</center>";
	}else{
		if(code==val){
			document.getElementById('result').innerHTML="<center class='text-success'>The code can be use</center>";
		}else{
			document.getElementById('result').innerHTML="<center class='text-danger'>Invalid code<center>";
		}
	}
}