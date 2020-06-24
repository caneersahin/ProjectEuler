var Sonuc = 'Ayın ilk gününün pazar olma sayısı: ';
var AylarınGunleri = [0,31,0,31,30,31,30,31,31,30,31,30,31];
function Subat(yil) {
    if (yil % 4 != 0) return 28;
    if (yil % 100 == 0 && yil % 400 != 0) return 28;
    return 29;
}

function PazarGunleri() {
    var Gun = 1;
    var ToplamPazar = 0;
    for (var Ay = 0; ++Ay < 13;) {
        Gun += (Ay == 2) ? Subat(1900) : AylarınGunleri[Ay];
    }
    for (var yil = 1900; ++yil < 2001;) {    
        for (Ay = 0; ++Ay < 13;) {
            if (Gun % 7 == 0) ToplamPazar++;
            Gun += (Ay == 2) ? Subat(yil) : AylarınGunleri[Ay];
        }
    }
    return ToplamPazar;
}

Sonuc += PazarGunleri();  
console.log(Sonuc)