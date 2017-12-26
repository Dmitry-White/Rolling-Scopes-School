module.exports = function multiply(first, second) {
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
