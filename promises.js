function getId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        })
    },1500);
}

function searchId(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("email@email");
        },2000);
    });
}

function sendEmail(body, to){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var getErro = false;

            if(!getErro){
                resolve({time: 4, to:"email@email"});
            }else{
                reject("Falha ao enviar!");
            }
        },4000)
    });
}

sendEmail("Olá mundo", "email@email.com").then((data)=>{
    console.log("Email enviado!");
    console.log(`Tempo: ${data.time} Dados: ${data.to}`)
}).catch((error)=>{
    console.log(`${error}`)
});

getId().then((id)=>{
    searchId(id).then((email)=>{
        sendEmail("Olá, como vai?", email).then(()=>{
            console.log("Email enviado, para o usuário com id: " + id);
        }).catch(err =>{
            console.log(err);
        });
    });
})