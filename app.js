var horse1 = document.getElementById("horse1");
var horse2 = document.getElementById("horse2");
var horse3 = document.getElementById("horse3");
var horse4 = document.getElementById("horse4");
var horse5 = document.getElementById("horse5");
var deneme1 = document.getElementById("deneme")

var finish = document.getElementById("finish").offsetLeft-80;
var rastgele1 = 0, rastgele2 = 0, rastgele3 = 0, rastgele4 = 0, rastgele5 = 0

var kontrol = false;
function baslat(){
    yarısma = setInterval(Yarısma,1000);
}
var Yarısma = function(){
    atbir();
    atıkı();
    atuc();
    atdort();
    atbes();
}
var rastgeleSayıUret = function(){
    var rastgele;
    do{
    var rastgele = Math.floor(Math.random() * 100);
   }while(rastgele<50);
   return rastgele;
}
function atbir(){
    if(rastgele1<finish){
        rastgele1 += rastgeleSayıUret()
        if(rastgele1 >= finish){
            rastgele1 = finish;
            clearInterval(yarısma);
            if(!kontrol){
                kontrol = true;
                setTimeout(function(){
                    alert("Kazanan At: 1");
                },2000);
            }
            horse1.style.marginLeft = finish + "px"

        }
        else{
            horse1.style.marginLeft = rastgele1 + "px"
        }
    }
    
}

function atıkı(){
    if(rastgele2<finish){
        rastgele2 += rastgeleSayıUret()
        if(rastgele2 >= finish){
            rastgele2 = finish;
            clearInterval(yarısma);
            if(!kontrol){
                kontrol = true;
                setTimeout(function(){
                    alert("Kazanan At: 2");
                },2000);
            }
            horse2.style.marginLeft = finish + "px"

        }
        else{
            horse2.style.marginLeft = rastgele1 + "px"
        }
    }
    
}

function atuc(){
    if(rastgele3<finish){
        rastgele3 += rastgeleSayıUret()
        if(rastgele3 >= finish){
            rastgele3 = finish;
            clearInterval(yarısma);
            if(!kontrol){
                kontrol = true;
                setTimeout(function(){
                    alert("Kazanan At: 3");
                },2000);
            }
            horse3.style.marginLeft = finish + "px"

        }
        else{
            horse3.style.marginLeft = rastgele1 + "px"
        }
    }
    
}

function atdort(){
    if(rastgele4<finish){
        rastgele4 += rastgeleSayıUret()
        if(rastgele4 >= finish){
            rastgele4 = finish;
            clearInterval(yarısma);
            if(!kontrol){
                kontrol = true;
                setTimeout(function(){
                    alert("Kazanan At: 4");
                },2000);
            }
            horse4.style.marginLeft = finish + "px"

        }
        else{
            horse4.style.marginLeft = rastgele1 + "px"
        }
    }
    
}

function atbes(){
    if(rastgele5<finish){
        rastgele5 += rastgeleSayıUret()
        if(rastgele5 >= finish){
            rastgele5 = finish;
            clearInterval(yarısma);
            if(!kontrol){
                kontrol = true;
                setTimeout(function(){
                    alert("Kazanan At: 5");
                },2000);
            }
            horse5.style.marginLeft = finish + "px"

        }
        else{
            horse5.style.marginLeft = rastgele1 + "px"
        }
    }
    
}