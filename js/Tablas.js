const mostrartablasydesplazamietosbinarios = () => {
    this.event.preventDefault();
    const numero = document.getElementById('numero').value;
    if (numero == 7){
        let tabla = document.getElementById('tabla');
        let tablamultipsiete = `<h2>Tabla de multiplicación del número ${numero}</h2>`;  
        for (let i = 0; i <= 10; i++) {
            tablamultipsiete += `<li>${numero} * ${i} = ${numero * i}</li>`;
            }
            tabla.innerHTML = tablamultipsiete;
            }
    else if (numero == 8){
         let tabla = document.getElementById('tabla');
         let tablasumaocho = `<h2>Tabla de suma del número ${numero}</h2>`;   
         for (let i = 0; i <= 10; i++) {
                tablasumaocho += `<li>${numero} + ${i} = ${parseInt(numero) + parseInt(i)}</li>`;
        }
         tabla.innerHTML = tablasumaocho;
        }        
    else if (numero == 9){
              let tabla = document.getElementById('tabla');
              let tabladivisnueve = `<h2>Tabla de división del número ${numero}</h2>`;   
              for (let i = 0; i <= 10; i++) {
                  tabladivisnueve += `<li>${numero} / ${i} = ${numero / i}</li>`;
            }
              tabla.innerHTML = tabladivisnueve;}

    else if  (numero == 125){
       
        let Desplazamientobinario = document.getElementById('Desplazamientobinario');
            
        let Desplazamiento = `<h2>Desplazamiento binario a la derecha del numero  ${numero}: ${numero >> 4} </h2>`; 
         tabla.innerHTML =  Desplazamiento;}
    
        else if  (numero == 25){
            let Desplazamientobinario = document.getElementById('Desplazamientobinario');
            let  Desplazamiento = `<h2>Desplazamiento binario a la derecha del numero ${numero}  : ${numero >> 1}</h2>`; 
            
            tabla.innerHTML =  Desplazamiento;}
            else if  (numero == 40){
                let Desplazamientobinario = document.getElementById('Desplazamientobinario');
            
                let  Desplazamiento = `<h2>Desplazamiento binario a la izquierda del numero  ${numero} : ${numero << 2}</h2>`; 
                
                tabla.innerHTML =  Desplazamiento;}

           else if  (numero == 10){
                    let Desplazamientobinario = document.getElementById('Desplazamientobinario');
                    let  Desplazamiento = `<h2>Desplazamiento binario a la izquierda del numero  ${numero} :  ${numero << 8}</h2>`; 
                    
                    tabla.innerHTML =  Desplazamiento;}
           else {
            alert('El número introducido debe estar (7 , 8 ,9 , 125 , 25 , 40 ,10)');
            document.getElementById("numero").value = '';
        }};