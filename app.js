
const getCreatePin = () =>{
    const random = Math.random() *10000 ;
    const pin = (random +'').split('.')[0] ;
    if (pin.length === 4) {
       return pin
    }
    else{
        return getCreatePin()        
    }
    
}

const getDisplayPin = () =>{
document.getElementById('display-input').value = getCreatePin() ;
}

const clickNumber = document.getElementById('number-container').addEventListener('click' , function (event){
   const digit = event.target.innerText ;
   if (isNaN(digit) ) {
    //    handle backbutton
    //    handle clearbutton
    if (digit === 'Clear') {
        const typeDigit = document.getElementById('display-numbers');
        typeDigit.value = '' ; 
    }
   
   }
   else{
       const typeDigit = document.getElementById('display-numbers');
       typeDigit.value = typeDigit.value + digit ;
   }
} ) 

const getSubmit = () =>{

  const pin = document.getElementById('display-input').value ;
  const typePin =  document.getElementById('display-numbers').value ;
  if (pin === typePin) {
      document.getElementById('matched').style.display = 'block'
      document.getElementById('wrrong').style.display = 'none'
  }
  else{
    document.getElementById('wrrong').style.display = 'block'
    document.getElementById('matched').style.display = 'none'
  }
}