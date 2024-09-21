// idatzi hemen zure funtzioak


export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}

function ariketa1(arr) {
    return arr.map((item) => item * 2);
  }
  function ariketa2(erab) {
    const Arik2ema = erab.map(er => er.izena + "-k " + er.adina + " urte ditu");
    return Arik2ema;
  }

  function ariketa3(zbkiak) {
    return  zbkiak.filter( zenb => zenb % 2 ==0);
  }

  function ariketa4(erab) {
    return erab.filter(er => er.adina >= 18);
  }

  function ariketa5(zbkiak) {
    return zbkiak.reduce( (acc, zenb) => acc + zenb, 0);

  }

  function ariketa6(erabiltzaileak) {
    return erabiltzaileak.reduce((acc, erabiltzaile) => erabiltzaile.adina >  acc.adina  ? erabiltzaile : acc, erabiltzaileak[0]);
  }

  function ariketa7(zbkiak) {
    return zbkiak.filter(zenb => zenb % 2 ==0).map(zenb => zenb * 2).reduce((acc, zenb) => acc + zenb,0);
  }

  function ariketa8(users) {
    const combinedItems = users.reduce((acc, user) => {
      acc.push(...user.items);
      return acc;
      }, []);
  
    return combinedItems;
  }

  function ariketa9(users) {
    const g18Urte = users.filter(erabiltzaile => erabiltzaile.adina >= 18);

    const eTotala = g18Urte.map(erabiltzaile =>
      erabiltzaile.erosketak.reduce((acc, erosketa) => acc + erosketa, 0)
    );
      const totala = eTotala.reduce((acc, total) => acc + total, 0);
    return totala;
  }

  function ariketa10(students) {
    const batasBesteko = students.map(era => {
      const total = era.scores.reduce((acc, nota) => acc + nota, 0);
      return {
          name: era.name,
          batezbestekoa: total / era.scores.length 
      };
    });
  
    const ikasleMaxNota = batasBesteko.reduce((acc, batas) => batas.batezbestekoa > acc.batezbestekoa ? batas : acc );

  return ikasleMaxNota;
  }