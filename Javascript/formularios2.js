function registro() {
    document.getElementById("login").className = "oculto";
    document.getElementById("entrar").className = "visible";
    document.getElementById("Cambiar_a_ingreso").className = "visible";
    document.getElementById("Cambiar_a_registro").className = "oculto";
}

function verificacion() {
    var passw = document.getElementById("contraseña").value;
    var passw2= document.getElementById("contraseña2").value;
    var Texto = document.getElementById("verde");
    var Texto2 = document.getElementById("rojo");

    if (passw == passw2) {
        Texto.innerText = "Las contraseñas coinciden"
    }
    else {
        Texto2.innerText = "Las contraseñas no coinciden"
    }
}