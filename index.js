// Import stylesheets
import './style.css';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newFormulario()
})

const newFormulario = () => {
  const usuario = form.username.value.trim()
  const password = form.password.value.trim()
  const params = {
    user: usuario,
    pass: password
  }
  console.log(params)

  if(password !== "" && usuario !== ""){
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200) {
        consulta = this.responseText;
      }
    }
    peticion.open('POST', 'peiticion.js');
    peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    peticion.send(params)

  } else {
    console.log('vacio')
  }
}