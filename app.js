/* JAVASCRIPT CRYPTO ROBIN*/ 


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
const caractèresSpéciaux = [
  " ",
  "'",
  ".",
  ",",
  "!",
  ":",
  '"',
  "?",
  "-",
  "_",
  "&",
  "/",
  "*",
  "+",
  "=",
  "#",
  "@",
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
	cryptage();
	txt.textContent  = texteCrypte;
	remiseAzero();

});


// Cryptage : on démonte la chaine de caractères
// tri des caractères spéciaux 
// on applique la clé sous les caractères du texte en clair
// on combine les valeurs lettre clé + lettre texte clair
// on obtient le nouveaux caractère


function cryptage(){
	for (i=0;i<texteClair.length;i++){
		var lettre = texteClair[i];
		if (caractèresSpéciaux.includes(lettre)){
			bl++;
			texteCrypte += " ";
		} else { 
			switch (lettre) {
				case "É":
				case "È":
				case "Ë":
				case "Ê":
				  lettre = "E";
				  break;
				case "À":
				case "Â":
				case "Ä":
				  lettre = "A";
				  break;
				case "Ç":
				  lettre = "C";
				  break;
				case "Û":
				case "Ù":
				  lettre = "U";
				  break;
				case "Ô":
				case "Ö":
				  lettre = "O";
				  break;
				case "Î":
				case "Ï":
				  lettre = "I";
				  break;
			   }
			var danslarray = alphabet.indexOf(lettre)
			var j=(i-bl)%cle.length;
			var lettre2 = cle[j];
			var danslarray2 = alphabet.indexOf(lettre2)
			var encryptage = (danslarray + danslarray2)%alphabet.length;
			texteCrypte += alphabet[encryptage];
		}
	}

}

// RaZ des données
function remiseAzero() {
	texteClair="";
	cle="";
	texteCrypte="";
}

// MAJ 11/04/2021 LEBON ROBIN  
