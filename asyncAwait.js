function getUsers(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve([
            {name: "Victor", lang:"JS"},
            {name: "Revers", lang: "C"},
            {name: "Kasnowski", lang: "C#"}
        ])
      },2000)
    })
}

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

async function main(){
    var id = await getId();
    var email = await searchId(id);
    try{
      await sendEmail("Hello, World!", email);
      console.log("Email enviado!");
    }catch(error){
      console.log(error);
    } 
}


main();


