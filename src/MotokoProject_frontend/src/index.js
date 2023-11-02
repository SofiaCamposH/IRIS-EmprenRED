import { MotokoProject_backend } from "../../declarations/MotokoProject_backend";

const add=document.querySelector('#add');
const substract=document.querySelector('#substract');
const multiply=document.querySelector('#multiply');
const divided=document.querySelector('#divided');
const exp=document.querySelector('#exp');

add.addEventListener('click', async(e)=>{
  await callFunction(e);
})

substract.addEventListener('click', async(e)=>{
  await callFunction(e);
})

multiply.addEventListener('click', async(e)=>{
  await callFunction(e);
})

divided.addEventListener('click', async(e)=>{
  await callFunction(e);
})

exp.addEventListener('click', async(e)=>{
  await callFunction(e);
})

async function callFunction(e){
  e.preventDefault();
  e.target.setAttribute('disabled', true);
  const num1=parseInt(document.querySelector('#valor1').value,10);
  const num2=parseInt(document.querySelector('#valor2').value,10);
  console.log(e.target.id);
  const result= await MotokoProject_backend[e.target.id](num1, num2);
  e.target.removeAttribute('disabled');
  document.querySelector('#resultado').textContent=result;
  return false;
}