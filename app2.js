/* JAVASCRIPT CRYPTO ROBIN*/ 


// techniquement il faudrait inverser les noms des variables texteClair et texteCrypte
// puisque l'on cherche à décrypter un texte 
// mais cela ne change rien au fonctionnement du code 
const alphabet = [
  "A",
  "B",
  "0",
  "C",
  "D",
  "1",
  "E",
  "F",
  "2",
  "G",
  "H",
  "3",
  "I",
  "J",
  "4",
  "K",
  "L",
  "5",
  "M",
  "N",
  "6",
  "O",
  "P",
  "7",
  "Q",
  "R",
  "8",
  "S",
  "T",
  "9",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const alphabetReverse = [
  "Z",
  "Y",
  "X",
  "W",
  "V",
  "U",
  "9",
  "T",
  "S",
  "8",
  "R",
  "Q",
  "7",
  "P",
  "O",
  "6",
  "N",
  "M",
  "5",
  "L",
  "K",
  "4",
  "J",
  "I",
  "3",
  "H",
  "G",
  "2",
  "F",
  "E",
  "1",
  "D",
  "C",
  "0",
  "B",
  "A",
];
let texteClair =document.getElementById('texteClair');
let cle = document.getElementById('clé');
let bl=0;
let texteCrypte='';
let button=document.getElementById("btn");
let txt= document.getElementById('txt');

texteClair.addEventListener('input', function (event) {
	texteClair = event.target.value.toUpperCase();
  });
cle.addEventListener('input', function (event) {
	cle = event.target.value.toUpperCase();
  });



  button.addEventListener('click',()=>{
	decryptage();
	txt.textContent  = texteCrypte;
	remiseAzero();

});

// Décryptage : on démonte la chaine de caractères
// tri des espaces (empty strings) 
// on applique la clé sous les caractères du texte en clair
// on combine les valeurs lettre clé + lettre texte clair
// on obtient le nouveaux caractère


function decryptage(){
	for (i=0;i<texteClair.length;i++){
		var lettre = texteClair[i];
		if (lettre === " "){
			bl++;
			texteCrypte += " ";
		} else { 
			var danslarray = alphabetReverse.indexOf(lettre)
			var j=(i-bl)%cle.length;
			var lettre2 = cle[j];
			var danslarray2 = alphabet.indexOf(lettre2);
			var encryptage = (danslarray + danslarray2)%alphabet.length;
			texteCrypte += alphabetReverse[encryptage];
		}
	}

}

// RaZ des données
function remiseAzero() {
	texteClair="";
	cle="";
	texteCrypte="";
}

// MAJ 15/04/2021 LEBON ROBIN  
