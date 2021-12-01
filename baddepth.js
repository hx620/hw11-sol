const x = {let f: {const g: true}};
const fun = function(y: {let f: {}}) {
  y.f = {};
};
fun(x);
x.f.g
