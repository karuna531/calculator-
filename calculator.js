function displayValue(val){
	document.getElementById("result").value += val;

}


function solve(){
	let x = document.getElementById("result").value;
	if(x==""){
		return;
	}
	let y =eval(x);
	document.getElementById("result").value = y;
}

function clearResult(){
	document.getElementById("result").value=" ";
}

const toggleBtn = document.querySelector('.toggle-mode');


toggleBtn.addEventListener('click', function() {
 
  document.body.classList.toggle('dark-theme');
  if (this.innerHTML == "Dark Mode") {
    this.innerHTML = "Light Mode";
  } else {
    this.innerHTML = "Dark Mode";
  }
})

function back() {
    //delete last letter function.
     result.value = result.value.slice(0, - 1);
}












