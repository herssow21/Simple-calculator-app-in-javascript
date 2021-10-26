const outputValue=document.getElementById('output');

const  buttons= Array.from(document.getElementsByClassName('btn'));

const delt=document.querySelector('#delt');
const clear=document.querySelector('#clear');



// array method to load all button clicks for display
buttons.map( button => {
button.addEventListener('click', (e)=>{
        // outputValue.value='';
        outputValue.value += e.target.innerText;
})
});

// do the calculation and display
calculate.addEventListener('click',function(){
    try {
       outputValue.value = eval(outputValue.value); 
    } catch (error) {
        outputValue.value='Mathematical error!';
        outputValue.style.fontSize='16px';
        outputValue.style.textAlign='center';
        outputValue.style.color='red';
        setTimeout(clr,1000);
    }
});
// delete function
delt.addEventListener('click',()=>{
    outputValue.value= outputValue.value.slice(0,-1);
});

// clear output action
clear.addEventListener('click',()=>{
    outputValue.value = "";
});
// clear the error message after 1s
function clr(){
    outputValue.value = "";  
    outputValue.style.fontSize='30px';
    outputValue.style.color='#000';
    outputValue.style.textAlign='end';

}