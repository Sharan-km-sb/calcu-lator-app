const histroy = document.querySelector('.histroy ');
const output = document.getElementById('out');
const result = document.getElementById('result');
const keys = document.querySelectorAll('button');
const display = document.querySelector('.arrow');
const hdisplay = document.getElementById('hdisplay');
const delete_btn = document.getElementById('delete');
const ul = document.getElementById('histroy-value-list');
const clear = document.querySelector('#all-clear');

clear.addEventListener('click',() =>{
    result.innerText = "0";
    histroy.innerText = null;
    output.textContent = "0"
});



delete_btn.addEventListener('click', () => {
     
         ul.innerText = null;

});

display.addEventListener('click', () => {

    hdisplay.classList.toggle('active');
}
);

for (const button of keys) {
    button.addEventListener('click', calculation);
}

function calculation() {
    let buttonText = this.innerText;
    console.log(buttonText);
     
        
        
 
    if (buttonText === "=") {
        result.innerText = eval(output.innerText);
        histroy.innerText = result.innerText;
        let results = result.innerText;

        addhistroy();

        function addhistroy() {
            
            let li = document.createElement("li");
            li.setAttribute('id', results);
            li.appendChild(document.createTextNode(output.innerText+''+ '='+''+ results));
            ul.appendChild(li);

        }


    }
    else {

        output.textContent += buttonText;
        return;
    }

}





