$(function() {
    $("#AlturaIMC").maskMoney({ decimal: '.', thousands: '', precision: 2 });
    $("#PesoIMC").maskMoney({ decimal: '.', thousands: '', precision: 2 });
    $("#PesoCal").maskMoney({ decimal: '.', thousands: '', precision: 2 });
  })
$(document).ready(function(){

    $("#btn").click(function(){
       
       const AlturaIMC = document.getElementById('AlturaIMC').value;
       const PesoIMC = document.getElementById('PesoIMC').value;
 
       const res = document.getElementById('res')
       let imc;
       imc = PesoIMC/(AlturaIMC * AlturaIMC);
       console.log(imc)
       let calcImc = imc.toFixed (1)
       let resImc = ['18,5', '18,5 e 25', '25,0 e 29,9', '30,0 e 39,9'];
       imc = imc.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
    
       if(!AlturaIMC && !PesoIMC || AlturaIMC <= 0 && PesoIMC <= 0 ){
        alert("Preencha os campos do IMC corretamente.")//checa se os campos esta preenchidos
       }else{
            if(imc < 18.5){
                res.style.color = '#f2da78';
                res.innerHTML = `Seu IMC é de: ${imc} e está entre: ${resImc[0]} ou abaixo || Classificaçao: Magreza || Grau de obesidade: 0`
            }else if(imc >= 18.5 && imc <= 24.9){
                res.style.color = '#1FFF00';
                res.innerHTML =`Seu IMC é de: ${imc} e está entre: ${resImc[1]} ou abaixo || Classificaçao: Normal || Grau de obesidade: 0`;
            }else if (imc >= 25.0 && imc <= 29.9) {
                res.style.color = '#B7960A';
                res.innerHTML =`Seu IMC é de: ${imc} e está entre: ${resImc[2]} ou abaixo ||Classificaçao: Sobrepeso || Grau de obesidade: 1`;
            
            }else if (imc >= 30.0 && imc <= 39.9) {
                res.style.color = '#D98005';
                res.innerHTML =`Seu IMC é de: ${imc} e está entre: ${resImc[3]} || Classificaçao: Obesidade || Grau de obesidade: 2`
            }else  {
                imc > 40.0;
                res.style.color = '#FF3700';
                res.innerHTML =`Seu IMC é de: ${imc} e está entre:  está acima de 40,0 procure um médico urgente! || Classificaçao: Obesidade Grave || Grau de obesidade: 3`
            }
            
       }
    
    })
    $("#Enviar").click(function(){
        const Idade = document.getElementById("Idade").value;
        const Sexo = document.getElementById("sexo").value;
        const Peso = document.getElementById("PesoCal").value;
        const res = document.getElementById("resp");
        
        console.log(Idade)
        console.log(Sexo)
       if(Sexo == "M" && Idade == "10") {
       let valor = 	(17.686*Peso) + 658.2;
       let calcImc = valor.toFixed (1)
       valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
        res.style.color = '#4FFF00';
        res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;

       }else  if(Sexo == "F" && Idade == "10") {
        let valor =(13.384*Peso) + 692.6
        let calcImc = valor.toFixed (1)
        valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
         res.style.color = '#4FFF00';
         res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;

        }else if(Sexo == "M" && Idade == "18") {
            let valor =	(15.057 * Peso) + 692.2
            let calcImc = valor.toFixed (1)
            valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
             res.style.color = '#4FFF00';
             res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;

            }else if(Sexo == "F" && Idade == "18") {
            let valor =	(14.818*Peso) + 486.6
            let calcImc = valor.toFixed (1)
            valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
             res.style.color = '#4FFF00';
             res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;
            
            }else if(Sexo == "M" && Idade == "30") {
                let valor =	(11.472 * Peso) + 873.1
                let calcImc = valor.toFixed (1)
                valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
                 res.style.color = '#4FFF00';
                 res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;
                
                }else if(Sexo == "F" && Idade == "30") {
                    let valor =	(8.126 * Peso) + 845.6
                    let calcImc = valor.toFixed (1)
                    valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
                     res.style.color = '#4FFF00';
                     res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;
                   
                    }else if(Sexo == "M" && Idade == "60") {
                        let valor =(11.711 * Peso) + 587.7
                        let calcImc = valor.toFixed (1)
                        valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
                         res.style.color = '#4FFF00';
                         res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;
                        
                        }else if(Sexo == "F" && Idade == "60") {
                            let valor =	(9.082 * Peso) + 658.5
                            let calcImc = valor.toFixed (1)
                            valor = valor.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
                             res.style.color = '#4FFF00';
                             res.innerHTML = `Seu consumo de calorias diaria deve ser ${valor}`;
                            }







       else{
        res.innerHTML = 'testando NADA';
       }
    });

})

