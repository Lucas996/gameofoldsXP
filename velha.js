var cont_x = 0;
var cont_o = 0;
var cont_emp = 0;
var aux = 1;
	
		function Campo(campo) { 
		
			  var campoescolhido = document.getElementById(campo);
			  
			if ((campoescolhido.value != "O") && (campoescolhido.value !="X")) {
				if (aux == 1) {
					campoescolhido.value = "X";
					document.getElementById("O").disabled = false;
					document.getElementById("X").disabled = true;
					aux = 2;}
				else {
					campoescolhido.value = "O"
					document.getElementById("X").disabled = false;
					document.getElementById("O").disabled = true;
					aux = 1;}
			 }
		}
		function apagar() {
			var c1 = document.getElementById("1");
			var c2 = document.getElementById("2");
			var c3 = document.getElementById("3");
			var c4 = document.getElementById("4");
			var c5 = document.getElementById("5");
			var c6 = document.getElementById("6");
			var c7 = document.getElementById("7");
			var c8 = document.getElementById("8");
			var c9 = document.getElementById("9");
			c1.value = "";
			c2.value = "";
			c3.value = "";
			c4.value = "";
			c5.value = "";
			c6.value = "";
			c7.value = "";
			c8.value = "";
			c9.value = "";
		}
		function verifica() {
			  var c1 = document.getElementById("1");
			  var c2 = document.getElementById("2");
			  var c3 = document.getElementById("3");
			  var c4 = document.getElementById("4");
			  var c5 = document.getElementById("5");
			  var c6 = document.getElementById("6");
			  var c7 = document.getElementById("7");
			  var c8 = document.getElementById("8");
			  var c9 = document.getElementById("9");	
			  var emp = document.getElementById("empate");
			  var j1 = document.getElementById("j1");
			  var j2 = document.getElementById("j2");
			  var x = document.getElementById("X");
			  var o = document.getElementById("O");
			
				
			if (((c1.value == "X") && (c2.value == "X") && (c3.value == "X"))||((c4.value == "X") && (c5.value == "X") && (c6.value == "X"))||((c7.value == "X") && (c8.value == "X") && (c9.value == "X"))||((c1.value == "X") && (c4.value == "X") && (c7.value == "X"))||((c2.value == "X") && (c5.value == "X") && (c8.value == "X"))||((c3.value == "X") && (c6.value == "X") && (c9.value == "X"))||((c1.value == "X") && (c5.value == "X") && (c9.value == "X"))||((c3.value == "X") && (c5.value == "X") && (c7.value == "X"))) {
				cont_x += 1;
				j1.value = cont_x;
				if (x.value != ""){
				alert(x.value + " " + "ganhou!")
				apagar();}
				else{
				alert(" Jogador 1 ganhou!")
				apagar();
				}
			}
			if (((c1.value == "O") && (c2.value == "O") && (c3.value == "O"))||((c4.value == "O") && (c5.value == "O") && (c6.value == "O"))||((c7.value == "O") && (c8.value == "O") && (c9.value == "O"))||((c1.value == "O") && (c4.value == "O") && (c7.value == "O"))||((c2.value == "O") && (c5.value == "O") && (c8.value == "O"))||((c3.value == "O") && (c6.value == "O") && (c9.value == "O"))||((c1.value == "O") && (c5.value == "O") && (c9.value == "O"))||((c3.value == "O") && (c5.value == "O") && (c7.value == "O"))) {
				cont_o += 1;
				j2.value = cont_o;
				if (o.value != ""){
				alert(o.value + " " + "ganhou!")
				apagar();}
				else{
				alert(" Jogador 2 ganhou!")
				apagar();
				}
			}
			
			if (((c1.value == "O")||(c1.value == "X"))&&((c2.value == "O")||(c2.value == "X"))&&((c3.value == "O")||(c3.value == "X"))&&((c4.value == "O")||(c4.value == "X"))&&((c5.value == "O")||(c5.value == "X"))&&((c6.value == "O")||(c6.value == "X"))&&((c7.value == "O")||(c7.value == "X"))&&((c8.value == "O")||(c8.value == "X"))&&((c9.value == "O")||(c9.value == "X"))) {
				alert("Deu velha!");
				cont_emp += 1;
				emp.value = cont_emp;
				apagar();}
		}
