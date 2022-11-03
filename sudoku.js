

var message_erreur=""
var nombre_choisi = null
var carreau_choisi = null
var erreurs = 0
var grille = [
    "---8---- 9",
    "-19--583-",
    "-43-1---7",
    "4--15---3",
    "--27-4-1-",
    "-8--9-6--",
    "-7---63--",
    "-3--7--8-",
    "9-45----1"

]


var solution = [
    "256837149",
    "719425836",
    "843619257",
    "467158923",
    "392764518",
    "581392674",
    "178246395",
    "635971482",
    "924583761"

]



window.onload = function(){
    jeu();
}


function jeu(){
    
    for(let i = 1; i<=9; i++){
       
        let nombre = document.createElement("div");
        nombre.id = i;
        nombre.innerText = i;
        nombre.addEventListener("click", gerer_nombre);
        nombre.classList.add("nombre");
        document.getElementById("chiffres").appendChild(nombre);
    }


   
    for(let ligne = 0; ligne < 9; ligne++){
        for(let colonne = 0; colonne < 9; colonne++){
            let carreau = document.createElement("div");
            carreau.id = ligne.toString() + "-" + colonne.toString();
            if(grille[ligne][colonne] != "-"){
                carreau.innerText = grille[ligne][colonne];
                carreau.classList.add("carreau");
            } 
            if(ligne == 2 || ligne == 5) {
                carreau.classList.add("horizontal")
            } 
            if(colonne == 2 || colonne == 5)  {
                carreau.classList.add("vertical")
            }     
            carreau.addEventListener("click", gerer_case);
            carreau.classList.add("carreau");
            document.getElementById("grille").append(carreau);
            
        }

    }
}


function gerer_case(){
    if(nombre_choisi){
        if(this.innerText != ""){           
            return;
        }
        this.innerText = nombre_choisi.id
        let liste_chiffre = this.id.split("-");
        let ligne = parseInt(liste_chiffre[0]);
        let colonne = parseInt(liste_chiffre[1]);

        if(solution[ligne][colonne] == nombre_choisi.id){
            this.innerText = nombre_choisi.id
        }else{
            erreurs += 1;
            document.getElementById("erreurs").innerText = erreurs +" erreur(s)"
        }
    }
}


function gerer_nombre(){    
    if(nombre_choisi != null){
        nombre_choisi.classList.remove("choix_nbre");        
    }    
    nombre_choisi = this;
    nombre_choisi.classList.add("choix_nbre");
}