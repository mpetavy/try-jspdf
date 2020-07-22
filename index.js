global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.html2pdf = {};
global.btoa = () => {};

var fs = require('fs');
var jsPDF = require('jspdf');

var doc = new jsPDF();

doc.setDrawColor("#255#0#0")
doc.text("Hello", 10, 10);
doc.line(0,0,200,200)

var data = doc.output();

fs.writeFileSync('./document.pdf', data, 'binary');

delete global.window;
delete global.html2pdf;
delete global.navigator;
delete global.btoa;