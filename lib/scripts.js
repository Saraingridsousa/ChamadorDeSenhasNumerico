jQuery(document).ready(function ($) {
  const senhaAtual = $("#senhaAtualNumero");
  const senhaNormal = $("#senhaNormal");
  const audioChamada = $("#audioChamada");
  const ultimaSenhaTexto = $("#ultimaSenhaTexto");
  const ultimaSenhaNumero = $("#ultimaSenhaNumero");
  //const inputGuiche = $("#inputGuiche");

  let index = parseInt(localStorage.getItem("index_chamadas")) || 0;
  const totalSenhas = 1001; // de 0000 a 1000

  function pad(num, size) {
    let s = "0000" + num;
    return s.slice(-size);
  }

  function atualizarTela() {
    const numero = pad(index, 4);
    senhaAtual.text(numero);
    senhaNormal.val(numero);

    // Mostrar "GUICHÊ LIVRE" somente se senha > 0000
    if (index > 0) {
      ultimaSenhaTexto.text("GUICHÊ LIVRE");
    } else {
      ultimaSenhaTexto.html("&nbsp;"); // vazio
    }
  }

  atualizarTela();

  $("body").on("keydown", function (e) {
    // Seta direita → próximo número
    if (e.keyCode === 39 && index < totalSenhas - 1) {
      index++;
      localStorage.setItem("index_chamadas", index);
      atualizarTela();
      audioChamada.trigger("play");
    }

    // Seta esquerda → número anterior
    if (e.keyCode === 37 && index > 0) {
      index--;
      localStorage.setItem("index_chamadas", index);
      atualizarTela();
    }

    // Tecla "P" → reproduz áudio
    if (e.key.toLowerCase() === "p") {
      audioChamada.trigger("play");
    }

    /* Teclas 1 a 9 → altera guichê
    if (e.key >= "1" && e.key <= "9") {
      ultimaSenhaNumero.text(e.key);
    }
  });

  // Clique no número do guichê → mostra input
  ultimaSenhaNumero.on("click", function () {
    const valorAtual = $(this).text().trim();
    inputGuiche.val(valorAtual).show().focus();
    $(this).hide();
  });

  // Salva guichê editado ao sair ou apertar Enter
  inputGuiche.on("blur keydown", function (e) {
    if (e.type === "blur" || e.keyCode === 13) {
      const novoValor = $(this).val().trim();
      if (/^[1-9]$/.test(novoValor)) {
        ultimaSenhaNumero.text(novoValor);
      }
      $(this).hide();
      ultimaSenhaNumero.show();
    }*/
  });
});
