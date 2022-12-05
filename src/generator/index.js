const pepe = 2 / 2;

function* gen() {
    yield pepe;
    yield 2;
    yield 3;
};

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array) {
    for (let value of array) {
        yield value;
    }
};

const it = iterate([`Gabriel`, `Agustina`, `Greta`]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);