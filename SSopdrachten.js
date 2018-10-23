var simon = true;

if (simon === true){

var artikel = {
  pen: 'test',
    prijs: 1.50,
    totaal: function(aantal){
         return this.prijs * aantal;
    }
}

console.log(artikel.totaal(3));


}