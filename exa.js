function agregarCosa(){
  var nuevoValorEntradaTexto = document.getElementById("valorNuevoItem").value;
  var nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML= nuevoValorEntradaTexto;
  document.getElementById("lista").appendChild(nuevoElemento);
  document.getElementById("valorNuevoItem").value="";
}

function quitarUltimo(){
  alert("Estas a punto de eliminar la ultima fruta");
  var lista = document.getElementById("lista");
  var items= document.getElementsByTagName("li");
  var indice=items.length-1;
  lista.removeChild(items[indice]);
}
