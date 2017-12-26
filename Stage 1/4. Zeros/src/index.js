module.exports = function zeros(expression) {

    function multiply(first, second) {

      function correction(pos,result){
          if (pos < result.length) {
              return result[pos];
          } else return 0;
      }

      var a1 = first.split("").reverse();
      var a2 = second.split("").reverse();
      var result = [];

      for (var i = 0; i < a1.length; i++) {
          for (var j = 0; j < a2.length; j++) {
              var pos = i + j;
              result[pos] = a1[i] * a2[j] + correction(pos,result);

              if (result[pos] > 9) {
                  result[pos + 1] = Math.floor(result[pos] / 10) + correction(pos + 1, result);
                  result[pos] -= Math.floor(result[pos] / 10) * 10;
              }
          }
      }
      return result.reverse().join("");
    }

    function Fact(num) {
        var val=1;
        for (var i = 2; i <= num; i++)
            val = multiply(val.toString(), i.toString());
        return val;
    }

    function partialFact(num) {
      var product = 1;
      while (num > 0) {
        product = multiply(product.toString(), num.toString());
        num -= 2;
      }
      return product
    }

    a = expression.split("*");

    var arr_len = a.length;
    var elem_len;
    var prod_len;
    var res_len;
    var char;
    var signs = [];
    var nums = [];
    var products = [];
    var result = 1;
    var zeros = 0;

    for (var i = 0; i < arr_len; i++) {

      elem_len = a[i].length;
      while (elem_len !== 0){
        char = a[i][elem_len-1];
        if (char == "!") {
          signs.push(char);
        } else nums.push(char);
        elem_len--;
      }

      signs = signs.join("");
      nums = nums.reverse().join("");

      if (signs == "!") {
        products.push(Fact(nums));
      } else if (signs == "!!") {
        products.push(partialFact(nums));
      }

      signs = [];
      nums = [];
    }

    signs = [];
    nums = [];

    prod_len = products.length;
    for (var i = 0; i < prod_len; i++) {
      result = multiply(result.toString(),products[i].toString());
    }

    res_len = result.length;
    for (var i = res_len-1; i > 0; i--) {
      if (result[i] == "0") {
        zeros++
      } else break;
    }

    return zeros
}
