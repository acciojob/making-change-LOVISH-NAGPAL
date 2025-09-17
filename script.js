const makeChange = (cents) => {
    let obj = { q: 0, d: 0, n: 0, p: 0 };

    obj.q = Math.floor(cents / 25);
    cents %= 25;

    obj.d = Math.floor(cents / 10);
    cents %= 10;

    obj.n = Math.floor(cents / 5);
    cents %= 5;

    obj.p = cents;

    return obj;
};


Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
