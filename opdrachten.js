/*
/* Opdracht sheet 80
 */
sheet79();
sheet80();
sheet81();
sheet82();

/*
/* Opdracht sheet 79
 */
function sheet79() {
  console.log('Vermenigvuldigen met met 2 of meer getallen')
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