// Função de callback
function callback() {
    console.log("A função de callback foi chamada!");
  }
  
  // Função externa que recebe a função de callback como argumento
  function funçãoExterna(cb) {
    console.log("A função externa está sendo executada...");
    // Chamando a função de callback dentro da função externa
    cb();
  }
  
  // Chamando a função externa e passando a função de callback como argumento
  funçãoExterna(callback);
  