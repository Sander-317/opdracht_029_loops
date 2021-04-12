
let startNumber = 0;
let endNumber = 20;

const oddEvenCheck = function (number) {
    if (number % 2 === 0) {
        return "even";
    }
    return "odd";
};

while (startNumber <= endNumber) {
    const oddEven = oddEvenCheck(startNumber);
    console.log(startNumber + " = " + oddEven);
    startNumber++;
}
