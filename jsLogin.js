//Los eventos se llaman desde las etiquetas HTML
const user = "ManuelaMC"
const pw = 1234
function verificar(){
    let usuario = document.getElementById("nombre").value 
    let clave = document.getElementById("clave").value
    if(usuario == user && clave == pw){
        alert("Login exitoso") //alert: ventana emergente 
    }else{
        alert("Verifique los datos ingresados")
    }
}
