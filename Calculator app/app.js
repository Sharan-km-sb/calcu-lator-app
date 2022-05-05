const histroy = document.querySelector('.histroy ');
const output = document.getElementById('out');
const result = document.getElementById('result');
const keys = document.querySelectorAll('button');
const display = document.querySelector('.arrow');
const hdisplay = document.getElementById('hdisplay');
const ul = document.getElementById('histroy-value-list');
const clear = document.querySelector('#all-clear');
const deleteAll = document.getElementById("deleteAll");
const table = document.getElementById("myTableData");

deleteAll.addEventListener('click' ,(e) => {
             
location.reload();

});

clear.addEventListener('click',() =>{
    result.innerText = "0";
    histroy.innerText = null;
    output.textContent = "0"
});





for (const button of keys) {
    button.addEventListener('click', calculation);
}

function calculation() {
    let buttonText = this.innerText;
    

    console.log(buttonText);
  
    if(buttonText === "DEL" ){
        output.textContent = output.textContent.substring(0, (output.textContent.length-1));
        return;
             
    }

        
 
    if (buttonText === "=") {
        
        result.innerText = eval(output.innerText);
        let results = result.innerText;
        histroy.innerText = output.innerText+''+ '='+''+ results;
        

        addhistroy();

        function addhistroy() {
            
          
       
          var rowCount = table.rows.length;
          var row = table.insertRow(rowCount);
       
          
          row.insertCell(0).innerHTML= output.textContent;
          row.insertCell(1).innerHTML= result.textContent;
          row.insertCell(2).innerHTML= '<input type="button" style="color:white; cursor:pointer; padding:3px 3px; background-color: #362a89; border:1 px solid  #362a89;" value = "Del" onClick="Javacsript:deleteRow(this)">';

        }
        
     
    }
    else {

        output.textContent += buttonText;
        return;
    }


}
function deleteRow(obj) {
            
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}





