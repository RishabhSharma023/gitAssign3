document.getElementById("heron").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const a = parseFloat(document.getElementById("sideA-heron").value);
    const b = parseFloat(document.getElementById("sideB-heron").value);
    const c = parseFloat(document.getElementById("sideC-heron").value);

    const area = Math.sqrt((4 * a * a * b * b) - Math.pow(a * a + b * b - c * c, 2)) / 4;

    document.getElementById("resultHeron").value = area.toFixed(2);
});

document.getElementById("ambig").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const s1 = parseFloat(document.getElementById("side1-ambiguous").value);
    const s2 = parseFloat(document.getElementById("side2-ambiguous").value);
    const a = parseFloat(document.getElementById("angle-ambiguous").value);

    const area = Math.sqrt((4 * a * a * b * b) - Math.pow(a * a + b * b - c * c, 2)) / 4;

    document.getElementById("resultHeron").value = area.toFixed(2);
});