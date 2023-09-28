function receivesAFunction (thing) {
    return thing();
}
function returnsANamedFunction() {
    function namedFunction() {
        return "This is a named function.";
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    function anonymousFunction() {
        return 'This is an anonymous function.';
    }
    
    if (anonymousFunction.name !== '') {
        Object.defineProperty(anonymousFunction, 'name', { value: '' });
    }
    
    return anonymousFunction;
}