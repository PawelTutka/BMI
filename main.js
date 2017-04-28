"use strict";
      
function obliczbmi() {
    var waga = document.getElementById("waga").value;
    var wzrost = document.getElementById("wzrost").value;

        return waga / (wzrost/100 * wzrost/100);

    }
function obliczwage() {
    var idealbmi = 23;
     var wzrost = document.getElementById("wzrost").value;
     return (idealbmi * (wzrost/100 * wzrost/100)).toPrecision(2);

   }
    
     function bmi(){
         var waga = document.getElementById("waga").value;
         var limitdolny = 18.5;
         var limitgorny = 25;

         if (isNaN(obliczbmi())) {
             alert("Wpisz poprawnie dane posługując się cyframi");
         }
         else if (obliczbmi() < limitdolny) {
             alert("Masz niedowage!");
             alert("Musisz przytyc " + (obliczwage() - waga) + " kilo");
             alert("Twoja idealna waga to " + obliczwage() + " kilogramy");
         }
         else if (obliczbmi() > limitgorny) {
             alert("Masz nadwage!");
             alert("Musisz schudnac " + (waga - obliczwage()) + " kilo");
             alert("Twoja idealna waga to " + obliczwage() + " kilogramy");
         }
         else {
             alert("Twoja waga jest w normie");
             alert("Dla Twojego wzrostu idealnie by było gdybyś ważył " + obliczwage() + " kg");
         }
     }










