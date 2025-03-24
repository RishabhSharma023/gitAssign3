const heronsFormula = (a, b, c) => {
    return Math.sqrt((4 * a * a * b * b) - Math.pow(a * a + b * b - c * c, 2)) / 4
}

document.getElementById("heron").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const a = parseFloat(document.getElementById("side1-heron").value);
    const b = parseFloat(document.getElementById("side2-heron").value);
    const c = parseFloat(document.getElementById("side3-heron").value);

    if (a <= 0 || b <= 0 || c <= 0) {
        alert("All sides must be positive.");
        return;
    }

    document.getElementById("resultHeron").value = heronsFormula(a, b, c).toFixed(2);
});

const ambiguousCase = (sAambig, sBambig, a) => {
    if (a === 90) {
        return 'Right triangle';
    }

    const height = Math.round(sBambig * Math.sin(a * (Math.PI / 180)));

    if (a < 90) {
        if (sAambig < height) {
            return 'No triangle';
        }
        if (sAambig === height) {
            return 'Right triangle (one solution)';
        }
        if (height < sAambig && sAambig < sBambig) {
            return 'Two triangles (ambiguous case)';
        }
        if (sAambig >= sBambig) {
            return 'One triangle';
        }
    } else if (a < 180) {
        if (sAambig <= sBambig) {
            return 'No triangle';
        } else {
            return 'One triangle (obtuse angle)';
        }
    }

    return 'No solution';
}

document.getElementById('ambig').addEventListener('submit', function (event) {
    event.preventDefault();
    const sAambig = parseFloat(document.getElementById('sideA-ambiguous').value);
    const sBambig = parseFloat(document.getElementById('sideB-ambiguous').value);
    const a = parseFloat(document.getElementById('angle-ambiguous').value);

    document.getElementById('resultAmbiguous').value = ambiguousCase(sAambig, sBambig, a);
}
);

const newtonsMethod = (g) => {
    function f(x){
        return 6*Math.pow(x,4) - 13*Math.pow(x,3) - 18*Math.pow(x,2) + 7*x + 6;
    }

    function fPrime(x){
        return 24*Math.pow(x,3) - 39*Math.pow(x,2) - 36*x + 7;
    }

    let iterationsMax=1000;
    let iteration = 0;
    while (Math.abs(f(g)) > 0.0001 && iteration < iterationsMax){
        g = g - f(g)/fPrime(g);
        iteration++;
    }
    return g;
}

document.getElementById('newton').addEventListener('submit', function(event){
    event.preventDefault();
    const g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('resultRoot').value = newtonsMethod(g);
}
);

const polynomialEvaluation = (coefficients, exponents, xvalue) => {
    var result = 0;
    for (var i = 0; i < coefficients.length; i++) {
        result += parseFloat(coefficients[i]) * Math.pow(xvalue, parseFloat(exponents[i]));
    }
    return result;
}

const polynomialFunction = (coefficients, exponents) => {
    var result = '';
    for (let i = 0; i < coefficients.length; i++) {
        if (i==0){
            result += coefficients[i] + 'x^' + exponents[i];
        }

        else if(coefficients[i] < 0){
            result += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
        }
        else {
            result += ' + ' + coefficients[i] + 'x^' + exponents[i];
        }
    }
    return result;
}

document.getElementById('polynomial').addEventListener('submit', function (event) {
    event.preventDefault();
    const coefficients = document.getElementById('coefficients').value.split(' ');
    const exponents = document.getElementById('exponents').value.split(' ');
    const xvalue = parseFloat(document.getElementById('x-value').value);

    document.getElementById('resultPolynomial').value = polynomialFunction(coefficients, exponents);
    document.getElementById('resultPolynomialEval').value = polynomialEvaluation(coefficients, exponents, xvalue);
});