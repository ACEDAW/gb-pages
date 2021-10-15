let input = document.getElementById('correo');
const boton = document.getElementById('boton');
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

boton.onclick=pulsarBoton;
function pulsarBoton()
{
    if(!regex.test(input.value))
    {
        document.querySelector(".error").style.display="block";
    }
}