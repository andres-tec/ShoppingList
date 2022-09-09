let btn_ejec = document.getElementById("execute_btn");
let tr = document.getElementsByClassName("body_t");
let th = document.createElement("th");
let span = document.getElementsByClassName("text-muted");
let spam = document.getElementsByClassName("badge");



let td = document.createElement("td");
let cont = 1;
let index = 0;
let acum = 0;
let sumador = 0;
btn_ejec.addEventListener("click", function (e) {
    e.preventDefault();
    let producto = document.getElementById("Name").value;
    let canti = parseInt(document.getElementById("Number").value);

    sumador = sumador + canti;

    console.log(add(producto, canti, sumador))

    console.log("cont", cont);
    console.log("index", index);


});

function add(producto, canti, sumador) {


    cost = Math.floor(Math.random() * (25 - 10 + 1)) + 10;//11 20
    th.innerText = cont;
    td.innerText = producto;
    tr[index].append(th.cloneNode(true));
    tr[index].append(td.cloneNode(true));
    td.innerText = canti;
    tr[index].append(td.cloneNode(true));
    td.innerText = cost;
    tr[index].append(td.cloneNode(true));
    spam[0].innerText = sumador;
    acum = acum + cost; //11  31
    if (index == 0) {
        span[2].innerText = cost;//11

    } else {

        span[2].innerText = acum;
        console.log("este es acum:", acum);
    }

    console.log(cost);
    cont++;
    index++;
    //tr[0].insertAdjacentHTML("afterend", "<li class='list-group-item'> a fifth item</li>")
    return 0;

}
