function aguardar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function atrasar() {
  console.log("Início");
  await aguardar(3000); // Aguarda 3 segundos
  console.log("Fim após atraso");
}

atrasar();
