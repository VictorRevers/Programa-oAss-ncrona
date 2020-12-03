function enviarEmail(body, to, callback){
    setTimeout(()=>{
        var error = false;

        if(error){
            callback("Não foi possível enviar seu e-mail!");
        }else{
            callback();
            console.log(`
            To: ${to}
            ---------------------
    
            ${body}
            ------------------------
            De: Victor Revers
            `)
        }
        
    },8000)
}

console.log("Enviando...");
enviarEmail("Olá, seja bem vindo!", "email@email.com", (erro)=>{
  if(erro == undefined){
    console.log('E-mail enviado!');
  }else{
      console.log(`Ocorreu um erro! ${erro}`)
  }  
  
});
