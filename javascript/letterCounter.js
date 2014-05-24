/**
 * Author: Josh Bass
 */

 var self = this;

$(function(){
	$(".textToParse").keydown(self.countLetters);
	$(".textToParse").keyup(self.countLetters);
});


var countLetters = function(){
	var letterMap = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0,
			K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0};
	
	var textToParse = $(".textToParse").val();
	for (var i=0; i < textToParse.length; i++) {
	     
		var letter = textToParse.charAt(i);
		
		letterMap[letter.toUpperCase()] = 
			(letterMap[letter.toUpperCase()] || 0) + 1;
	}
	
	$(".numA").text(letterMap.A);
	$(".numB").text(letterMap.B);
	$(".numC").text(letterMap.C);
	$(".numD").text(letterMap.D);
	$(".numE").text(letterMap.E);
	$(".numF").text(letterMap.F);
	$(".numG").text(letterMap.G);
	$(".numH").text(letterMap.H);
	$(".numI").text(letterMap.I);
	$(".numJ").text(letterMap.J);
	$(".numK").text(letterMap.K);
	$(".numL").text(letterMap.L);
	$(".numM").text(letterMap.M);
	$(".numN").text(letterMap.N);
	$(".numO").text(letterMap.O);
	$(".numP").text(letterMap.P);
	$(".numQ").text(letterMap.Q);
	$(".numR").text(letterMap.R);
	$(".numS").text(letterMap.S);
	$(".numT").text(letterMap.T);
	$(".numU").text(letterMap.U);
	$(".numV").text(letterMap.V);
	$(".numW").text(letterMap.W);
	$(".numX").text(letterMap.X);
	$(".numY").text(letterMap.Y);
	$(".numZ").text(letterMap.Z);
};
self.countLetters = countLetters;

var reset = function(){
	
	$(".numA").text("0");
	$(".numB").text("0");
	$(".numC").text("0");
	$(".numD").text("0");
	$(".numE").text("0");
	$(".numF").text("0");
	$(".numG").text("0");
	$(".numH").text("0");
	$(".numI").text("0");
	$(".numJ").text("0");
	$(".numK").text("0");
	$(".numL").text("0");
	$(".numM").text("0");
	$(".numN").text("0");
	$(".numO").text("0");
	$(".numP").text("0");
	$(".numQ").text("0");
	$(".numR").text("0");
	$(".numS").text("0");
	$(".numT").text("0");
	$(".numU").text("0");
	$(".numV").text("0");
	$(".numW").text("0");
	$(".numX").text("0");
	$(".numY").text("0");
	$(".numZ").text("0");
	$(".textToParse").val("");
};