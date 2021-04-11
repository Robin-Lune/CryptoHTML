/* JAVASCRIPT CRYPTO ROBIN*/ 

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
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
		if (lettre === " "|| lettre ==="'"|| lettre ==="."|| lettre===","|| lettre==="!"|| lettre===":"|| lettre==='"'|| lettre==="?" || lettre ==="-" || lettre==="_"){
			bl++;
			texteCrypte += " ";
		} else { 
			switch (lettre) {
				case 'É':
					lettre = 'E';
					break ;
				case 'È':
					lettre = 'E';
					break ;
				case 'Ë':
					lettre = 'E';
					break ;
				case 'Ê':
					lettre = 'E';
					break ;
				case 'À':
					lettre = 'A';
					break ;
				case 'Â':
					lettre = 'A';
					break ;
				case 'Ä':
					lettre = 'A';
					break ;
				case 'Ç':
					lettre = 'C';
					break ;		
				case 'Û':
					lettre = 'U';
					break ;		
				case 'Ù':
					lettre = 'U';
					break ;		
				case 'Ô':
					lettre = 'O';
					break ;		
				case 'Ö':
					lettre = 'O';
					break ;				
				case 'Î':
					lettre = 'I';
					break ;		
				case 'Ï':
					lettre = 'I';
					break ;		
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