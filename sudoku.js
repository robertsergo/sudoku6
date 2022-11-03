
var nombre_choisi = null
//var carreau_choisi = null

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
    setGame();
}

function setGame(){
    //digits 0-9
    for(let i = 1; i<=9; i++){
        //<div id="1" class="number">1</div>
        let nombre = document.createElement("div");
        nombre.id = i;
        nombre.innerText = i;
        nombre.addEventListener("click", gerer_nombre);
        nombre.classList.add("nombre");
        document.getElementById("chiffres").appendChild(nombre);
    }

    //board 9x9
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let carreau = document.createElement("div");
            carreau.id = r.toString() + "-" + c.toString();
            if(grille[r][c] != "-"){
                carreau.innerText = grille[r][c];
                carreau.classList.add("carreau");
            } 
            if(r == 2 || r == 5) {
                carreau.classList.add("horizontal-line")
            } 
            if(c == 2 || c == 5)  {
                carreau.classList.add("vertical-line")
            }     
            carreau.addEventListener("click", gerer_case);
            carreau.classList.add("carreau");
            document.getElementById("grille").append(carreau);
            
        }

    }
}

function gerer_nombre(){
    
    if(nombre_choisi != null){
        nombre_choisi.classList.remove("number-selected");        
    }
    
    nombre_choisi = this;
    nombre_choisi.classList.add("number-selected");
}

function gerer_case(){
    if(nombre_choisi){
        if(this.innerText != ""){           
            return;
        }
        this.innerText = nombre_choisi.id
        let liste_chiffre = this.id.split("-");
        let r = parseInt(liste_chiffre[0]);
        let c = parseInt(liste_chiffre[1]);

        if(solution[r][c] == nombre_choisi.id){
            this.innerText = nombre_choisi.id
        }else{
            erreurs += 1;
            document.getElementById("erreurs").innerText = erreurs
        }
    }

}