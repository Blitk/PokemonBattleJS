// água, planta, fogo

// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }
 
// const esperarAposAtaque = async () => {
//   await sleep(3000)
//   	document.getElementById("containerBotoes").style.display = "block";
// 	document.getElementById("containerAtaques").style.display = "none";
// }

// const esperarContraAtaque = async () => {
// 	await sleep(3000)
// 	document.getElementById("textoAcoes").textContent = nomeInimigo+" usou PATADA";
// 	var y = document.getElementById("hpTreinador").offsetWidth
// 	document.getElementById("hpTreinador").style.width = (y-dano)+"px";
// }

// function retornaTexto(nomePokemon){
// 	document.getElementById("textoAcoes").textContent = "O que <br>"+nomePokemon+" fará?";
// }


function lutar(){
	document.getElementById("containerBotoes").style.display = "none";
	document.getElementById("containerAtaques").style.display = "flex";
}

function ataqueInimigo(nomeInimigo, dano){
	setTimeout(function(){
		document.getElementById("textoAcoes").textContent = nomeInimigo+" usou PATADA";
		var y = document.getElementById("hpTreinador").offsetWidth
		document.getElementById("hpTreinador").style.width = (y-dano)+"px";
	},3000);
}

function zeraContainerAcoes(pokemon){
	setTimeout(function(){
		document.getElementById("textoAcoes").innerHTML = "O que <br>"+pokemon+" fará?";
	},5000);
}

function ataque(pokemon, ataque, dano, nomeInimigo){
	document.getElementById("textoAcoes").textContent = pokemon+" usou "+ataque;
	var x = document.getElementById("hpInimigo").offsetWidth
	document.getElementById("hpInimigo").style.width = (x-dano)+"px";
	document.getElementById("containerBotoes").style.display = "block";
	document.getElementById("containerAtaques").style.display = "none";
	ataqueInimigo(nomeInimigo, dano)
	zeraContainerAcoes(pokemon)
}


class Treinador{
	#ataqueEspecial;
	constructor(nome, tipo, level, caminhoImagem){
		this.nome = nome.toUpperCase();
		this.tipo = tipo.toLowerCase();
		this.level = level;
		this.caminhoImagem = caminhoImagem;
		this.HP = 200;

		switch(tipo){
			case "planta":
				this.vantagem = "água";
				this.desvantagem = "fogo";
				this.#ataqueEspecial = {
					Nome: "Folha navalha",
					Dano: 45
				};
				break;
			case "água":
				this.vantagem = "fogo";
				this.desvantagem = "planta";
				this.#ataqueEspecial = {
					Nome: "Jato de água",
					Dano: 45
				};
				break;
			case "fogo":
				this.vantagem = "planta";
				this.desvantagem = "água";
				this.#ataqueEspecial = {
					Nome: "Lança chamas",
					Dano: 45
				};
				break;
			default:
				break;
		}

		this.ataques = {
			Patada: {
				Texto: "Patada",
				Dano: 30,
				Tipo: "Normal"
			},
			Especial: {
				Texto: this.#ataqueEspecial.Nome,
				Dano: this.#ataqueEspecial.Dano,
				Tipo: this.tipo
			}

		};


	}
}


function Carregar(treinador, inimigo){

	document.getElementById("imagemInimigo").src = inimigo.caminhoImagem;
	document.getElementById("nomeInimigo").textContent = inimigo.nome;
	document.getElementById("levelInimigo").textContent = "Lv "+inimigo.level;


	document.getElementById("imagemTreinador").src = treinador.caminhoImagem;
	document.getElementById("nomeTreinador").textContent = treinador.nome;
	document.getElementById("levelTreinador").textContent = "Lv "+treinador.level;
}

