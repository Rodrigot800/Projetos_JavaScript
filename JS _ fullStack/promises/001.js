let JJK = {
    name: "jjk",
    manga: 90,
    anime: 60
}

let funcManga = (NumManga) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (NumManga > 100) {
            console.log("mangá longo")
            resolve(NumManga)
        } else {
            console.log("mangá curto")
            reject("iniciante")
        }
    },2000)
  })
}

funcManga(JJK.manga).then(NumManga => {
  JJK.manga = NumManga + 1;
  console.log(JJK);
}).catch(messege => {
    console.log(messege)
})

console.log("execução de promises")
