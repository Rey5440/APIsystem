const randomHelper1 = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

module.exports = randomHelper1;