alert('Construindo escadas!!');

let tam= prompt('Quantos degraus você gostaria na sua escada?');

let resp=prompt('Tem algum material preferido? Expemplo: escada de #, sim ou não?');

if(resp === "Sim" || resp ==="sim" || resp=="SIM"){

 let material=prompt("Qual?");

 
 let i=0;
 let conta='';

    while ( i< tam){
        conta+=material;
        console.log(conta);
           i++;
            
            
        
        ;
        
    }
    
  

}

else{
    alert("Okay, construindo uma com material qualquer!!");


    

     let i=0;
    let mat='';
    
    while( i < tam){

        
        
        x= mat+='#';
        console.log(x);
        i++;

    }


}