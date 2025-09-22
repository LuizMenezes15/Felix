//Base Dados
function dados() {
    //Array(vetor)
    //let ds = ["laranja, maça, banana, avocado"]
//JSON - JAVASCRIPT OBJECT NOTATION

    let ds = [
               {id:1, login:"bcjohn", passsword:"12345", email:"bcjohncontato@uol.com"}, //0
               {id:2, login:"patrick", passsword:"12345", email:"patrick@uol.com"}, //1
               {id:3, login:"paul", passsword:"12345", email:"paulallen@uol.com"}, //2
             ]


    return ds

} 







//funcao logar
function logon()  {
   
const ds = dados()

    let lg = document.querySelector("#login").value

     let ps = document.querySelector("#pass").value

     for(i=0;i < ds.length; i++) {

if (lg == ds[i].login && ps == ds[i].passsword) {
    alert("Logado!" + "\n Seu usuario é: " + lg + " \n Sua senha é: " + ps)

    console.log("Logado!")
       }



    }

}





//função simples
function hello() {
console.log("ola grande js!")
alert("ola JS")
}

//soma 
function soma() {
//Promoção/conversão
    
    let num1 = parseFloat( document.querySelector("#Login").value)

    let num2 = parseFloat( document.querySelector("#pass").value)

    const soma = num1 + num2

    console.log("A soma é: " + soma)
    alert("A soma é: " + soma)



}