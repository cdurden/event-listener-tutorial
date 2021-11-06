function makeConditionalClosure() {
    var p = true;
    function conditional(x, f) {
        if (p) {
            return f(x);
        } else {
            return x;
        }
    }
    function toggle() {
        p = !p;
    }
    return {
        conditional: conditional,
        toggle: toggle,
    };
}

function f(x) {
    return 2 * x;
}
conditionalClosure = makeConditionalClosure();
conditional = conditionalClosure.conditional;
toggle = conditionalClosure.toggle;
