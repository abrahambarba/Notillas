//obtener variables de inputs

nom=document.getElementById("tit")
cont=document.getElementById("cont")
selec=document.getElementById("selec") //busca solo id's

function obtener(){
    if(nom.value!=""&&cont.value!=""&&selec.value!=""){ //necesariamente las 3 están vacias 
    
    //innerhtml es el contenido de la etiqueta
    
    color=colores()+','+colores()+','+colores() //se forma un color nuevo con las intensidades de RGB, con Math.Random

    notas=document.querySelector(".notas") //se toma el contenedor y el innerHTML tomda lo que está dentro del contenedor
    notas.innerHTML+= 
            '<div class="nota" style="background-color:rgb('+color+')">'+ //se crea el color aleatorio rgb(15,60,200)


                '<input type="text" value="'+nom.value+'">'+
                '<textarea name="" id="" cols="30" rows="10">'+cont.value+'</textarea>'+
                
                '<div class="catnota">'+
                    selec.value+
                '</div>'+

                '<div class="borrar" onclick="borrar(this)">X</div>'+ //this es para actuar sobre el mismo
            '</div>';
 
            //SE VACIAN LOS CAMPOS
    nom.value=""
    cont.value=""
    selec.value=""}
    else{
        alert("¡NO DEJES CAMPOS VACIOS!")
    }
}


function colores(){
    return Math.random()*(256);

}

function borrar(element){
    element.parentElement.remove()
}

