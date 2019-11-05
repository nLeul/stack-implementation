"use strict";
/* global Stack */

class SymbolBalancer {
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }

    isBalanced(delimiters) {
        let count = 0;
        let array = this.text.split("");
        for (let i = 0; i < array.length; i++) {
            this.stack.push(array[i]);
        }
        while (this.stack.peek()!==undefined) {
            if (delimiters.includes(this.stack.pop())) {
                count++;
            }
        }
        if (count % 2 === 0) {
            return true;
        }
        else {
            return false;
        }

    }
}