function guc(n, guc) {
	var basamaklar = [1];
	while (guc--) {
		var cr = 0;
		for (var i = 0; i < basamaklar.length; i++) {
			var num = n * basamaklar[i] + cr;
			basamaklar[i] = num % 10;
			cr = Math.floor(num/10);
		}
		while (cr > 0) {
			basamaklar.push(cr % 10);
			cr = Math.floor(cr/10);
		}
	}
	return basamaklar.reverse().join('');
}

function farklıGucler(min, max) {
	var out = [];
	for (var n = 2; n <= max; n++) {
		for (var pow = 2; pow<= max; pow++) {
			out.push( guc(n, pow) );
		}
	}
	return out.filter(function(val, i, self) {
		return self.indexOf(val) === i;
	}).length;
}

console.log( farklıGucler(2, 100) );