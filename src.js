const add= document.getElementById("add");
const update= document.getElementById("update")
const search= document.getElementById("search")
const result= document.getElementById("result");

let  pool=["hey", "what", "are","you"];
add.addEventListener("click",function addElement(){
alert('hey')
const text= document.getElementById("text").value;

pool.push(text);
console.log(pool);
//result.textContent+=`${text}`;
})

search.addEventListener("click", function searchElement(){

    const text=document.getElementById("text").value;
    let found= false;
    for(let i=0; i<pool.length; i++){
        if(pool[i]==text){
            alert('you are in our database');

            result.textContent=text;
            found=true;
            break;
            
        }
       
    }

    if(!found){
        result.textContent="Empty String";
    }

   


})

update.addEventListener("click", function updateElement(){
    const text= document.getElementById("text").value;

    alert('why');
   const random= Math.floor(Math.random()*(pool.length-1));

   pool[random]=text;

})
