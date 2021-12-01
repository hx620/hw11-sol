const fun = function(x: {let f: Num}) {
  return x.f + x.f;
};
fun({let f: 0}) + fun({let f: 1, let g: 2})
