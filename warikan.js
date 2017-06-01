
var total = document.getElementById('kaikei');
var man = document.getElementById('ninzu');
var value = document.getElementById('keisan');

  /*割り勘式（少数点四捨五入）*/
function answer() {
  var sum = Math.round( eval(total.value) / eval( man.value ) );
  swal("お一人様" + sum + "円です", "お疲れ様でした‼", "success");
};
