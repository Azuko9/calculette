


// je déclare l'écran et je récupère sous forme de tableau le contenu text des boutons
// afin de l'afficher sur l'écran au moment du click souris.

const ecran = document.querySelector("#screen");
const Nombres = [...document.querySelectorAll("button")];

    for(let i = 0; i<Nombres.length; i++ ){
        Nombres[i].addEventListener("click", function(e){
            ecran.innerText = ecran.textContent+ Nombres[i].textContent;
        }   
        )};
 


// au clik du bouton reset , je réinitialise le text 
const Clear = document.querySelector("#clear");
    Clear.addEventListener("click", function(e){
            ecran.innerText = "";
            });


// au click du bouton egale, j'évalue le contenu du texte



const Egale = document.querySelector("#egale");    
    Egale.addEventListener("click", function(e) {
        const calculette = eval(ecran.textContent);
        ecran.innerText = calculette;
        console.log(calculette)        
    });




//je redéfinie un tableau en récupérant les valeurs datakey issu du tableau Nombres
// afin de pouvoir utiliser le clavier numérique

const Touches = Nombres.map(Element => Element);    
        document.addEventListener("keydown", (e) =>  {
            const valeur = e.key;
             if(valeur === "1" || valeur === "2" || valeur === "3"|| valeur === "4"
             || valeur === "5"|| valeur === "6"|| valeur === "7"|| valeur === "8"
             || valeur === "9"|| valeur === "0"|| valeur === "/"|| valeur === "*"
             || valeur === "-"|| valeur === "+"|| valeur === "."){
               ecran.innerText= ecran.textContent + "" + valeur + ""; 
             }
             else if(valeur === "="){
                const calculette = eval(ecran.textContent);
                ecran.innerText = calculette;
             }
             else if( valeur=== "Delete" || valeur === "Backspace" ){
                ecran.innerText = "";
             }
            console.log(valeur)
        });
        
    





