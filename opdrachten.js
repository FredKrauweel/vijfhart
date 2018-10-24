/*
/* Opdracht sheet 80
 */
/*sheet79();
sheet80();
sheet81();
sheet82();
sheet100();
sheet101();
sheet102();
sheet103();
sheet116();*/
sheet129();
sheet130();
sheet131();

/*
/* Opdracht sheet 79
 */
function sheet79() {
  console.log('Vermenigvuldigen met met 2 of meer getallen');

  function maal(a, b) {
    a = a || 0;
    b = b || 1;
    let result = a * b;
    let args = arguments;
    for (let i = 2; i < arguments.length; i++) {
      result *= args[i];
    }
    return result;
  }

  console.log('maal(2,5)', maal(2, 5));
  console.log('maal(3,4,5)', maal(3, 4, 5));

}

/*
/* Opdracht sheet 810
 */
function sheet80() {
  var getallen = [1, 3, 5, 7, 9];

  function verdubbel(getal) {
    console.log(getal * 2);
  }

  console.log('zelf gedefinieerde functie');
  getallen.forEach(verdubbel);

  console.log('anonieme functie');
  getallen.forEach(function (getal) {
    console.log(getal * 2);
  });


  console.log('arrow functie')
  getallen.forEach(getal => console.log(getal * 2));
}

/*
/* Opdracht sheet 81
 */
function sheet81() {
  function maal(a, b) {
    a = a || 0;
    b = b || 1;
    if (typeof a === 'number' && typeof b === 'number') {
      return a * b;
    }
    if (typeof a === 'number' && typeof b === 'string') {
      return b.repeat(a);
    }
    if (typeof a === 'string' && typeof b === 'number') {
      return a.repeat(b);
    }
    //throw('geef minstens één getal op.');
  }

  console.log('maal(3,4): ', maal(3, 4));
  console.log('maal(3,"a"): ', maal(3, 'a'));
  console.log('maal("test",2): ', maal('test', 2));
  console.log('maal("a","b"): ', maal('a', 'b'));
}


/*
/* Opdracht sheet 82
 */
function sheet82() {
  console.log('IIFE')
  var totaal = (function () {
    var tot = tot || 0;
    return function (getal) {
      tot += getal;
      return tot;
    };
  })();

  console.log(totaal(3)); // 3
  console.log(totaal(1)); // 4
  console.log(totaal(2)); // 6

}

/*
/* Opdracht sheet 100
 */
function sheet100() {
  console.log('Object')

  function Mijnobject(intro, namen) {
    this.intro = intro;
    this.namen = namen;
  }

  var mijnObject = new Mijnobject
  (
    "De deelnemers zijn: ",
    ["Vlad", "Simon", "Sherita", "Fred"]
  );

  Mijnobject.prototype.toon = function () {
    var txt = this.intro;
    txt += this.namen.sort().join(", ");
    return txt;
  };

  console.log(mijnObject.toon());

  console.log('Class')

  class MijnTweedeObject {
    constructor(intro, namen) { // geen keyword function
      this.intro = intro;
      this.namen = namen;
    }

    toon() { // geen keyword function
      var txt = this.intro;
      txt += this.namen.sort().join(", ");
      return txt;
    }
  }

  var mijnTweedeObject = new MijnTweedeObject
  (
    "De deelnemers zijn ook nog: ",
    ["Celine", "Marleen", "Albert", "Paul"]
  );

  console.log(mijnTweedeObject.toon());
}

/*
/* Opdracht sheet 101
 */
function sheet101() {
  console.log('date manupulation')
  var namen = ["Jan", "Pier", "Joris", "Corneel"];
  console.log("origineel: ", namen.join());
  var eerste = namen.shift();
  namen.splice(1, 0, eerste);
  console.log("eerste 2 verwisseld: ", namen.join());
  namen.splice(2, 1, "JORIS");
  console.log("3e naam gewijzigd: ", namen.join());
}

/*
/* Opdracht sheet 102
 */
function sheet102() {

  class Boek {
    constructor(auteur, titel) {
      this.auteur = auteur;
      this.titel = titel;

    }

    toString() {
      return this.auteur + ": " + this.titel;
    }
  }

  var boeken = [];
  boeken.push(new Boek("Jan", "Het leven van Jan"));
  boeken.unshift(new Boek("Piet", "Het leven van Piet"));
  boeken.splice(1, 0, new Boek("Klaas", "Het leven van Klaas"));
  boeken.forEach(b => console.log(b.toString()));
  boeken.sort((a, b) => a.titel < b.titel ? -1 : a.titelt > b.titel ? 1 : 0);
  console.log(boeken.map(b => b.auteur).join());
  boeken.filter(b => b.auteur == 'Piet').forEach(b => console.log(b.toString()));

}

/*
/* Opdracht sheet 103
 */
function sheet103() {
  console.log('date manupulation')

  Date.prototype.nl = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  Date.prototype.formatDate = function (date) {
    d = date.getDate();
    m = this.nl[date.getMonth()];
    y = date.getFullYear();
    return d + " " + m + " " + y;
  }
  let d = new Date();
  console.log('datum:  ', d);
  console.log('nl datum:  ', d.formatDate(d));

  console.log("netjes");

  class Datum {
    constructor(dag, maand, jaar) {
      this.dag = new Date(jaar, maand - 1, dag);
    }

    toString() {
      return this.dag.getDate() + " " +
        Datum.maanden[this.dag.getMonth()] + " " +
        this.dag.getFullYear();
    }

    static get maanden() {
      return ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    }
  }

  //Datum.prototype.maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  var dag = new Datum(1, 1, 2018);
  console.log(dag.toString())
}

function sheet116() {
  console.log('dom append')

  let producten = [['potlood', '1,15'], ['pen', '3,85'], ['lineaal', '2,15'], ['gum', '0,86'], ['plakband', '1,55']];
  let result = document.getElementById("result");
  let table = document.createElement("TABLE");


  for (let i = 0; i < producten.length; i++) {
    var row = table.insertRow(i);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

// Add some text to the new cells:
    cell1.innerHTML = producten[i][0];
    cell2.innerHTML = producten[i][1];
  }

  // Create an empty <thead> element and add it to the table:
  var header = table.createTHead();

// Create an empty <tr> element and add it to the first position of <thead>:
  var row = header.insertRow(0);

// Insert a new cell (<td>) at the first position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

// Add some bold text in the new cell:
  cell1.innerHTML = "<b>Product</b>";
  cell2.innerHTML = "<b>Prijs</b>";


  result.appendChild(table);


  let artikelen = [['potlood', '1,15'], ['pen', '3,85'], ['lineaal', '2,15'], ['gum', '0,86'], ['plakband', '1,55']];
  artikelen.sort();

  function maakItem(naam, index) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(naam));
    li.setAttribute("data-nr", index);
    return li;
  }

  var mijnlijst = document.createElement("ul");
  artikelen.forEach(((a, i) => mijnlijst.appendChild(
    maakItem(a, i)
  )));

  document.body.appendChild(mijnlijst);
}

function sheet129() {
  console.log('toggle event op button');

  let btnToggle = document.getElementById('btnToggle');
  btnToggle.addEventListener("click",
    function () {
      console.log("btnToggle geklikt");
      let txt = document.getElementById('lipTxt');
      if (txt.classList.contains('zichtbaar')) {
        txt.classList.replace('zichtbaar', 'verborgen');
      } else if (txt.classList.contains('verborgen')) {
        txt.classList.replace('verborgen', 'zichtbaar');
      } else {
        txt.classList.add('verborgen');
      }
    }, false);
}

function sheet130() {
  console.log('change-event');
  let invoer = document.getElementById('invoer');
  let uitvoer = document.getElementById('uitvoer');
  invoer.addEventListener('change',
    function () {
      uitvoer.textContent = invoer.value.toUpperCase();
    }, false);
}

function sheet131() {
  console.log('lijst vullen met data');

  class DataFiller {
    constructor(namen) { // geen keyword function
      this.namen = namen;
    }
    toon() { // geen keyword function

      let txt = this.namen.sort().join(", ");
      return txt;
    }

    add(naam) {
      console.log("toevoegen");
      this.namen.push(naam);
      this.toList();

      console.log(this.namen);
    }

    toList() {
      let lijst = document.getElementById('namenlijst');
      while (lijst.firstChild) {
        lijst.removeChild(lijst.firstChild);
      }
      this.namen.forEach(((a, i) => lijst.appendChild(
        maakLi(a, i)
      )));

      function maakLi(naam, index) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(naam));
        li.setAttribute("data-nr", index);
        return li;
      }

    }
  }

  var dataFiller = new DataFiller
  (
    ["Celine", "Marleen", "Albert", "Paul"]
  );

  console.log(dataFiller.toon());

  document.getElementById('namen').addEventListener('change',
    function () {
      ;
      dataFiller.add(this.value);
      namen.value='';
    }, false);

  document.addEventListener("DOMContentLoaded", function() {
   dataFiller.toList();
  });
}