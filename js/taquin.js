/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	var div = document.querySelectorAll("div.box");
	div.forEach(element => {
		element.addEventListener("click", selection);
	});
}

function selection(event) {
	var caseChange = event.target;
	var vide = document.querySelector("div.empty");

	var rCC = parseInt(caseChange.id.substring(1, 2));
	var CCC = parseInt(caseChange.id.substring(4, 5));
	var rV = parseInt(vide.id.substring(1, 2));
	var CV = parseInt(vide.id.substring(4, 5));

	if (caseChange != vide) {
		if (caseChange.tagName == "SPAN") {
			caseChange = caseChange.parentNode;
		}

		if ((rCC == rV && (CCC + 1 == CV || CCC - 1 == CV)) || (CCC == CV && (rCC + 1 == rV || rCC - 1 == rV))) {
			vide.classList.remove("empty");
			caseChange.classList.add("empty");

			var span = caseChange.children.item(0);
			vide.appendChild(span);
		}
	}
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
