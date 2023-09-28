import {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7} from '../js/ariketak.js';

test('ariketa1 doubles each element of the array', () => {
    expect(ariketa1([1, 2, 3])).toEqual([2, 4, 6]);
});

test('ariketa2 formats user objects into strings', () => {
    expect(ariketa2([{ izena: "jota", adina: 20 }, { izena: "pepe", adina: 18 }]))
        .toEqual(['jota-k 20 urte ditu', 'pepe-k 18 urte ditu']);
});

test('ariketa3 filters out odd numbers', () => {
    expect(ariketa3([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test('ariketa4 filters users older than or equal to 18', () => {
    expect(ariketa4([
        { izena: "Take", adina: 17 },
        { izena: "Pepe", adina: 18 },
        { izena: "Ane", adina: 19 }
    ])).toEqual([
        { izena: "Pepe", adina: 18 },
        { izena: "Ane", adina: 19 }
    ]);
});


test('ariketa5 calculates the sum of array elements', () => {
    expect(ariketa5([1, 2, 3, 4, 5])).toEqual(15);
});

test('ariketa6 finds the oldest user', () => {
    expect(ariketa6([
        { izena: "Take", adina: 17 },
        { izena: "Pepe", adina: 18 },
        { izena: "Ane", adina: 19 }
    ])).toEqual({ izena: "Ane", adina: 19 });
});

test('ariketa7 filters even numbers, doubles them, and then calculates their sum', () => {
    expect(ariketa7([1, 2, 3, 4, 5])).toEqual(12); // 2*2 + 4*2 = 4 + 8 = 12
});

