import { MotokoProject_backend } from "../../declarations/MotokoProject_backend";

const add=document.querySelector('#add');
const substract=document.querySelector('#substract');
const multiply=document.querySelector('#multiply');
const divided=document.querySelector('#divided');
const exp=document.querySelector('#exp');

add.addEventListener('click', async (e) =>{

  e.preventDefault();
  add.setAttribute('disabled', true)

  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);

  const result= await MotokoProject_backend.add(num1, num2);

  add.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false
})

substract.addEventListener('click', async (e) =>{

  e.preventDefault();
  substract.setAttribute('disabled', true)

  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);

  const result= await MotokoProject_backend.substract(num1, num2);
  
  substract.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false
})

multiply.addEventListener('click', async (e) =>{

  e.preventDefault();
  multiply.setAttribute('disabled', true)

  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);

  const result= await MotokoProject_backend.multiply(num1, num2);
  
  multiply.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false
})

divided.addEventListener('click', async (e) =>{

  e.preventDefault();
  divided.setAttribute('disabled', true)

  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);

  const result= await MotokoProject_backend.divide(num1, num2);
  
  divided.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false
})

exp.addEventListener('click', async (e) =>{

  e.preventDefault();
  exp.setAttribute('disabled', true)

  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);

  const result= await MotokoProject_backend.exp(num1, num2);
  
  exp.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false
})