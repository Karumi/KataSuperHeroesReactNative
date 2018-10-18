interface Array<T> {
    isEmpty(): boolean;
}

Array.prototype.isEmpty = function isEmpty() {
    return this.length === 0;
};
