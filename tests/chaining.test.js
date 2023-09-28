import {ariketa8, ariketa9, ariketa10} from '../js/ariketak.js';


test('ariketa8 concatenates the items of all users', () => {
    const users = [{ name: "Alice", items: ["apple", "banana"] }, { name: "Bob", items: ["carrot", "date"] }];
    expect(ariketa8(users)).toEqual(["apple", "banana", "carrot", "date"]);
});


test('ariketa9 filters users older than or equal to 18 and calculates the total of their purchases', () => {
    const users = [
        { izena: "Take", adina: 17, erosketak: [1200,50,500] },
        { izena: "Pepe", adina: 18, erosketak: [25,12,30] },
        { izena: "Ane", adina: 19, erosketak: [1.75,4.60,3.00] }
    ];
    expect(ariketa9(users)).toEqual(76.35);
});


test('ariketa10 calculates the average score for each student and finds the one with the highest average', () => {
    const students = [
        { name: "John", scores: [90, 85, 78] },
        { name: "Sara", scores: [89, 92, 95] },
        { name: "Ane", scores: [90, 95, 90] }
    ];
    expect(ariketa10(students)).toEqual({ name: "Sara", batezbestekoa: 92 });
});
