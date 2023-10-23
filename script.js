var quantidadeIngredientes = 6;

function alterarQuantidadeIngredientes() {
  quantidadeIngredientes = parseInt(document.getElementById("quantidade-ingredientes").value);

  // Limpa a lista de ingredientes ao alterar a quantidade
  document.getElementById("ingredientes").innerHTML = "";

  // Exibe a lista completa de 6 ingredientes
  for (var i = 1; i <= 6; i++) {
    var label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" name="ingredient" value="ingrediente${i}"> Ingrediente ${i}<br>`;
    document.getElementById("ingredientes").appendChild(label);
  }
}

function fazerPedido() {
  var sabor = document.getElementById("sabor").value;
  var ingredientes = document.getElementsByName("ingredient");
  var tipo = document.getElementById("tipo")
  var ingredientesSelecionados = [];

  var ingredientesSelecionadosCount = 0;
  for (var i = 0; i < ingredientes.length; i++) {
    if (ingredientes[i].checked) {
      ingredientesSelecionadosCount++;
      ingredientesSelecionados.push(ingredientes[i].value);
    }
  }

  if (ingredientesSelecionadosCount !== quantidadeIngredientes) {
    document.getElementById("erro").innerHTML = "Selecione exatamente " + quantidadeIngredientes + " ingredientes.";
    return;
  }

  var pedido = "Sabor: " + sabor + "<br>Ingredientes: " + ingredientesSelecionados.join(", ");
  document.getElementById("pedido").innerHTML = pedido;
  document.getElementById("erro").innerHTML = "";
}

// Inicialmente, cria a lista de ingredientes com base na quantidade padrão
alterarQuantidadeIngredientes();
