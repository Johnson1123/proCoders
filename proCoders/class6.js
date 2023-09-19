let x;
const num = 56.7856;

x = num.toFixed(2);
x = num.toPrecision(5);
x = num.toString();
x = Number(num);
x = num.toExponential(10);

x = Math.min(4, 6, 8, 9, 10);
x = Math.max(4, 5, 6, 7, 8.9, 9, 9);
x = Math.pow(2, 4);
x = Math.round(5.4);
x = Math.floor(5.9);
x = Math.ceil(5.3);
x = Math.PI;

x = Math.floor(Math.random() * 10) + 1;

x = parseFloat(num);
x = parseInt(num);

console.log(x);
