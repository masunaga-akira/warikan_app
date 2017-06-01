
var total = document.getElementById('kaikei');
var man = document.getElementById('ninzu');
var value = document.getElementById('keisan');


  /*割り勘式（少数点四捨五入）*/
function answer() {
  if(typeof(man.value) == "number" && typeof(total.value) == "number"){
    var sum = Math.round( eval(total.value) / eval( man.value ) );
  }
  if(isNaN(sum)){
  swal("お一人様" + sum + "円です", "お疲れ様でした‼", "success");
  }
  swal("入力された値が不正です");
};
