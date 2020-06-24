var KombinasyonSayisi = [];

for(a = 1; a < 999; a++){
    for(b = a; b < (999-a); b++){
        var c = Math.sqrt(a*a + b*b);
        if(c%1 == 0){
            var CevreOlcusu = a + b + c;
            if(CevreOlcusu <= 1000){
                KombinasyonSayisi[CevreOlcusu] = (KombinasyonSayisi[CevreOlcusu] || 0) + 1;
            }
        }
    }
}

var ToplamKombinasyon = 0;
var EnYuksekKombinasyonSayisi = 0;

for(var CevreOlcusu = 0; CevreOlcusu <= 1000; CevreOlcusu++){
    var Kombinasyon = KombinasyonSayisi[CevreOlcusu];
    if(Kombinasyon && Kombinasyon > ToplamKombinasyon){
        console.log('Çevre Ölçüsü: ' + CevreOlcusu + '  Kombinasyon: ' + Kombinasyon);
        ToplamKombinasyon = Kombinasyon;
        EnYuksekKombinasyonSayisi = CevreOlcusu;
    }        
}
        
console.log(EnYuksekKombinasyonSayisi);
