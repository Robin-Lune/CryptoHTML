# CryptoHTML
Projet d'une page web qui permet de crypter du texte. 

L'algotrithme  de cryptographie est écrit en JavaScipt, language dans lequel je me plonge actuellement. 

j'avais d'abord écrit l'algorithme en Python il y a quelques années (vous pouvez le retrouver dans mes repositories). 
Le passage d'un language à l'autre n'a pas été simple, par exemple en python j'étais passé par l'unicode des caractères entrés, je n'ai pour l'instant pas réussi cette technique en JavaScript, mais je vais me pencher un peu plus sur le sujet. D'où l'utilisation d'un tableau [alphabet].  

Comment fonctionne cette algorithme ? 

Le principe est assez simple. 
L'utilisateur entre en premier lieu son texte à crypter puis la clé de cryptage. 

On récupère les données; 

On démonte la chaine de caractères en triant les espaces (" " et d'autres caractères spéciaux)  on les garde en mémoire pour pouvoir installer le mot clé en parrallèle. 
On passe tout en Uppercase 
le résultat schématiquement ressemble à ça: 

ligne de texte :   "Hello world du Javascript !"
clé: "robin"

En sortie du premier stade on a donc :

HELLO WORLD DU JAVASCRIPT     //
ROBIN ROBIN RO BINROBINRO    //

On additionne la valeur de l'index des lettres (texte + clé) du tableau [alphabet]. Ce qui nous donne le réultat de l'index du nouveau caractère crypté.

On concaténe tous les nouveaux caractères dans la variable texteCrypté en y ajoutant les espaces. 

Et le tour est joué ! 

Le tout peut sûrement être amélioré, n'hésitez pas à me faire des retours sur des possibles améliorations ! 
