var operandoa;
var operandob;
var operacion;

var resultado = document.getElementById("resultado");

var rest = document.getElementById("rest");
var mult = document.getElementById("mult");
var div = document.getElementById("div");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n2 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n0 = document.getElementById("n0");

function sum0() {
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
function rest0() {
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
function mult0() {
  operandoa = resultado.textContent;
  operacion = "x";
  limpiar();
}
function div0() {
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}

function igual0() {
  operandob = resultado.textContent;
  resolver();
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "x":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  borrar();
  resultado.textContent = res;
}

function limpiar() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = "";
}
function borrar() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function n10() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "1";
}

function n20() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "2";
}

function n30() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "3";
}
function n40() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "4";
}
function n50() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "5";
}
function n60() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "6";
}
function n70() {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = resultado.textContent + "7";
}

function n80() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "8";
}

function n90() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "9";
}
function n00() {
  var resultado = document.getElementById("resultado");
  resultado.textContent = resultado.textContent + "0";
}
