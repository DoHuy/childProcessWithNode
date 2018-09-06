"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Child {
    compute() {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        return sum;
    }
}
exports.Child = Child;
const child = new Child();
process.on('message', (msg) => {
    const sum = child.compute();
    console.log(msg);
    process.send(sum);
});
//# sourceMappingURL=child.js.map