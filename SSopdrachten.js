var simon = true;



function simon() {
    if (simon === true) {
        /*
        opdracht 1
         */
        var artikel = {
            pen: 'test',
            prijs: 1.50,
            totaal: function (aantal) {
                return this.prijs * aantal;
            }
        }

//console.log(artikel.totaal(3));
        /*
        einde opdracht 1
         */
        /* begin opdracht 2
         */

        var arr = ['peer', 'appel ', 'aardbei', 'watermelon'];


        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

// Used like so

        console.log(arr);


        arr.unshift('appel');
        arr.splice(2, 2);
        arr.splice(2, 0, "banaan");
        arr = shuffle(arr);
        console.log(arr);


        /*einde opdracht 2
         */

        /* begin opdracht 3
    */


        class Boeken {
            constructor(auteur, title) {
                this.auteur = auteur,
                    this.title = title
            }
        }

        var a = new Boeken("simon", "De hackerman");
        var b = new Boeken("fred", "Waarom is simon beter dan mij deel 1");
        var c = new Boeken("vlad", "Waarom is simon beter dan mij deel 2");
        var d = new Boeken("sherita", "Waarom is simon beter dan mij deel 3");
        var f = new Boeken("celine", "Waarom is simon beter dan mij deel 4");
        var g = new Boeken("wouter", "Waarom is simon beter dan mij deel 5");
        var h = new Boeken("albert", "Waarom is simon beter dan mij deel 6");
        var i = new Boeken("marleen", "De Waarom is simon beter dan mij deel 7");

        console.log(a, b, c, d, f, g, h, i)
    }
}

/*
    Begin dag 2
 */


console.clear();
function createtables() {
    function createTable(tekst) {
        var tableRow = document.createElement("td");
        var tableText = document.createTextNode(tekst);
        tableRow.appendChild(tableText);

        return tableRow;

    };

    var mijntableRow1 = createTable('john');
    var mijntableRow2 = createTable('doe');
    var mijntableRow3 = createTable('pieter');
    var mijntableRow4 = createTable('henk');
    var mijntableRow5 = createTable('harry');
    var mijntableRow6 = createTable('maikel');
    var mijntableRow7 = createTable('gerry');


    var result = document.getElementById('tabel');
    result.appendChild(mijntableRow1);
    result.appendChild(mijntableRow2);
    result.appendChild(mijntableRow3);
    result.appendChild(mijntableRow4);
    result.appendChild(mijntableRow5);
    result.appendChild(mijntableRow6);
    result.appendChild(mijntableRow7);
}

// lijst vullen met data

class car  {
    constructor(merk) {
        this.merk = merk;
    };
    toString(){
        return this.merk
    }
};

let cars = [];
//cars.push('audi','bwm','mercedes','bavaria');
cars.push(new car('audi'),new car('bwm'),new car('mercedes'),new car('bavaria'));
cars.sort((a) => a.merk < a.merk ? -1 : a.merk > a.merk ? 1 : 0);
console.log(cars)
console.log(cars.join());





//
//
// var tabelInput= ['Harry','Barry','henkie','Barry','henkie','Barry','henkie','Barry','henkie','Barry','henkie','Barry','henkie',];
// var result = document.getElementById('tabel');
//
//     result.innerHTML=
//         tabelInput.map((a,i) => `<td data-nr="${i}">${a}</td>`)
//         .join("");
var schrijfveld = document.getElementById("tekstveld");
document.getElementById("klikbutton").addEventListener("click", function() {
    schrijfveld.classList.toggle("onzichtbaar");
});

var schrijfUitvoer = document.getElementById('uitvoer')
document.getElementById("invoer").addEventListener("change", function(){
    console.log(invoer.value);
    document.getElementById('uitvoer').innerHTML += invoer.value.toUpperCase();
});


var buttonbereken = document.getElementById("berekenen");
buttonbereken.addEventListener("click",function(){
    let field1 = document.getElementById("veld1").value;
    let field2 = document.getElementById("veld2").value;

    if (isNaN(field1) || isNaN(field2)){
        alert('geen getal ga weg')
       // field1.style.color="red";
    } else {
        let uitkomst = parseInt(field1) + parseInt(field2);
        document.getElementById('output').innerHTML += uitkomst
    }
});


let object = {
    namen:[],
    add: function(naam) {
        this.namen.push(naam)
    },
    toList: function(){
      this.namen.sort();
      return this.namen.map( naam => `<li>${naam}</li>`).join("");
    },
};

let lijst = document.querySelector("ul");
let input = document.querySelector("#namen");
input.addEventListener("change",function(e){
    let tekst = e.target.value;
    object.add(tekst);
    lijst.innerHTML = object.toList();
    e.target.value = "";
    e.target.focus();
});




//
/*jshint esversion:6 */

console.clear();
class Artikel {
    constructor(naam, prijs) {
        this.naam = naam;
        this.prijs = prijs;
        this.aantal = 1;
    }
    totaal() {
        return this.prijs * this.aantal;
    }
}

var artikelen = [new Artikel("pen", 1.5),
    new Artikel("potlood", 0.5), new Artikel("gum", 0.8)
];
var artikelList = document.getElementById("artikelList");
var options = artikelen
    .map((a, i) => `<option value="${i}">${a.naam} (${a.prijs})</option>`)
    .join("");
artikelList.innerHTML = "<option value='-1'>maak keuze</option>" + options;
var module = {
    data: [],
    add: function(artikel) {
        var index = this.data.indexOf(artikel);
        if (index >= 0) this.data[index].aantal++;
        else this.data.push(artikel);
    },
    remove: function(i) {
        if (this.data[i].aantal > 1) this.data[i].aantal--;
        else this.data.splice(i, 1);
    },
    toRows: function() {
        return this.data
            .map((a, i) =>
                `<tr data-nr='${i}'><td>${a.naam}:</td><td>${a.aantal} *</td>` + `<td>${a.prijs} =</td><td>${a.totaal()}</td></tr>`)
            .join("");
    },
    sum: function() {
        return this.data
            .map(a => a.totaal())
            .reduce((a, b) => a + b, 0);
    },
    toJSON: function() {
        return JSON.stringify(this.data);
    }
};
var table = document.getElementsByTagName("table")[0];

function addRemoveListeners() {
    var tr = document.getElementsByTagName("tr");
    tr = Array.from(tr);
    tr.forEach(
        row => row.addEventListener("dblclick", function() {
            module.remove(row.dataset.nr);
            reset();
        }));
}

function resetOptions() {
    document.querySelector("#artikelList option[value='-1']").selected = "selected";
}

function reset() {
    table.innerHTML = module.toRows();
    if (module.data.length > 0) table.innerHTML +=
        `<tr id="totaal"><td>Totaal:</td><td> </td><td> </td><td>${module.sum()}</td></tr>`;

    addRemoveListeners();
    resetOptions();
}
reset();
artikelList.addEventListener("input", function(e) {
    module.add(artikelen[e.target.value]);
    reset();
}, false);
document.getElementById("export").onclick = () =>
    console.log(module.toJSON());




/*jshint esversion:6 */

console.clear();

let Artikel = (function(tableId, selectId){
    let bestellingen = [];
    let artikelen = [];
    return class {
        constructor(naam, prijs){
            this.naam = naam;
            this.prijs = prijs;
            this.aantal = 1;
        }
        add(){
            let index = bestellingen.indexOf(this);
            if(index>=0){
                bestellingen[index].aantal++;
            } else {
                bestellingen.push(this);
            }
        }
        remove(){
            let index = bestellingen.indexOf(this);
            if(index>=0){
                if(bestellingen[index].aantal>1){
                    bestellingen[index].aantal--;
                } else {
                    bestellingen.splice(index,1);
                }
            }
        }
        totaal(){
            return this.prijs * this.aantal;
        }
        static get bestellingen(){
            return JSON.stringify(bestellingen);
        }
        toRow(){
            var that = this;
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = td1.cloneNode();
            var td3 = td1.cloneNode();
            var td4 = td1.cloneNode();
            var naam = document.createTextNode(this.naam + ": ");
            var aantal = document.createTextNode(this.aantal + " * " );
            var prijs = document.createTextNode(this.prijs + " = ")
            var totaal = document.createTextNode(this.totaal());
            td1.appendChild(naam);
            td2.appendChild(aantal);
            td3.appendChild(prijs);
            td4.appendChild(totaal);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.addEventListener("dblclick", function(){
                that.remove();
                Artikel.resetTable(tableId);
            });
            return row;
        }
        static toRows(){
            var rows = bestellingen.map(a => a.toRow());
            var row = document.createElement("tr");
            row.setAttribute("id", "totaal");
            var td1 = document.createElement("td");
            var td2 = td1.cloneNode();
            var td3 = td1.cloneNode();
            var td4 = td1.cloneNode();
            var naam = document.createTextNode("Totaal:");
            var aantal = document.createTextNode(" ");
            var prijs = document.createTextNode(" ");
            var totaal = document.createTextNode(Artikel.sum());
            td1.appendChild(naam);
            td2.appendChild(aantal);
            td3.appendChild(prijs);
            td4.appendChild(totaal);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            rows.push(row);
            return rows;
        }
        static resetTable(){
            var table = document.getElementById(tableId);
            table.innerHTML = "";
            Artikel.toRows().forEach(row => table.appendChild(row));
        }
        static resetOptions(){
            var artikelList = document.getElementById(selectId);
            artikelList.innerHTML="";
            Artikel.toOptions().forEach(o=>artikelList.appendChild(o));
            document.querySelector(`#${selectId} option[value='0']`).selected="selected";
            artikelList.addEventListener("input", function(event){
                var artikel = artikelen.find(x => x.naam == event.target.value);
                artikel.add();
                Artikel.resetOptions2();
                Artikel.resetTable();
            });
        }

        static resetOptions2(){
            document.querySelector(`#${selectId} option[value='0']`).selected="selected";
        }
        static sum(){
            return bestellingen.map(a => a.totaal())
                .reduce((a,b)=> a + b,0);
        }
        static addArtikel(a){
            artikelen.push(a);
        }
        toOption(){
            //var that = this;
            var option = document.createElement("option");
            option.setAttribute("value", this.naam);
            var content = document.createTextNode(`${this.naam} (${this.prijs})`);
            option.appendChild(content);
            return option;
        }
        static toOptions(){
            var options = artikelen.map(a => a.toOption());
            var option = document.createElement("option");
            option.setAttribute("value", 0);
            var content = document.createTextNode(`Maak een keuze`);
            option.appendChild(content);
            options.unshift(option);
            return options;
        }
    };

})("bestelling", "artikelList");

Artikel.addArtikel(new Artikel("pen", 1.5));
Artikel.addArtikel(new Artikel("potlood",0.5));
Artikel.addArtikel(new Artikel("gum", 0.8));
Artikel.resetOptions();
document.getElementById("export").addEventListener("click", function(){
    console.log(Artikel.bestellingen);
});

