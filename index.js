function conv(){
    var input = document.getElementById("eingabe").value;
    var splitInput = input.split("/");
    var id = splitInput[5];
    var output = "https://drive.google.com/uc?export=download&id=" + id;
    const oT = document.getElementById("output").value = output;
}
function copy(){
    const output = document.getElementById("output");
    const copy = document.getElementById("copyB");

    output.select();
    document.execCommand("Copy");
    alert("Copied!");
}