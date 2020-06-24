var a = 1;
var b = 2;
var c = Math.sqrt(a*a + b*b);
var sonuc = a+b+c;
while(sonuc != 1000){
    if(sonuc > 1000){
        a++;
        b = a+1;
    } else {
        b++;
    }
    c = Math.sqrt(a*a + b*b);
    sonuc = a + b + c;
}
console.log('a:' + a + '  b:' + b + '  c:' + c);
console.log(a*b*c);
