function buscarPalabraClave() {

    var cadena = document.getElementById("cadenaInput").value;
    var palabraClave = document.getElementById("palabraClaveInput").value;

    if (cadena.includes(palabraClave)) {
        console.log("La palabra clave aparece en la cadena.");
    } else {
        console.log("La palabra clave no aparece en la cadena.");
    }
}