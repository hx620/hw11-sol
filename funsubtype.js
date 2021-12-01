const fun1 = function(x: {f: Num, g: Num} ) {
  return x.f + x.g
};
const fun2 = function(x: {f: Num}) {
  return x.f
};
fun2({f: 0, g: 0})
