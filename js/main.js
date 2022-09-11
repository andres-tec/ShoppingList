let btn_ejec = document.getElementById("execute_btn");
let tr = document.getElementsByClassName("body_t");
let th = document.createElement("th");
let span = document.getElementsByClassName("text-muted");
let spam = document.getElementsByClassName("badge");
let tbody = document.getElementsByClassName("tbody_clss");
let productos = [];
let array_totales = [];
const key = "info";
const key_1 = "info_t";

let td = document.createElement("td");
let cont = 1;
let index = 0;
let acum = 0;
let sumador = 0;
let cost = 0;

//aqui carga de datos 


//tr = document.getElementsByClassName("body_t")[0];
if (localStorage.getItem(key)) {
    productos = JSON.parse(localStorage.getItem(key));
    array_totales = JSON.parse(localStorage.getItem(key_1));

    for (index = 0; index < productos.length;) {
        th.innerHTML = "";
        th.innerHTML = productos[index].id;
        td.innerHTML = productos[index].product_name;
        tr[index].append(th.cloneNode(true));
        tr[index].append(td.cloneNode(true));
        td.innerHTML = productos[index].cuantity;
        tr[index].append(td.cloneNode(true));
        td.innerHTML = productos[index].price;
        tr[index].append(td.cloneNode(true));
        spam[0].innerText = array_totales[0];
        span[2].innerText = array_totales[1];


        if (index == 5) {
            for (index = 6; index < productos.length; index++) {
                tr[5].insertAdjacentHTML("afterend", `<th>${productos[index].id}</th><td>${productos[index].product_name}</td><td>${productos[index].cuantity}</td><td>${productos[index].price}</td>`);

            }
            break;
        }

        index++;

    }





    acum = array_totales[1];
    sumador = array_totales[0];
    cont = array_totales[2];
    index = array_totales[3]
    console.log(array_totales);
}

// temp.forEach(element => {
//});
//alert1.innerText = localStorage.getItem("info");
//alert1.style.display = "block";
//setTimeout(() => { alert1.style.display = "none" }, 3000);
btn_ejec.addEventListener("click", function (e) {
    e.preventDefault();
    let producto = document.getElementById("Name").value;
    let canti = parseInt(document.getElementById("Number").value);
    sumador = sumador + canti;
    console.log("cont", cont);
    console.log("index", index);
    console.log("sumador", sumador);

    if (index >= 5) {
        console.log(addtr(producto, canti));

    } else {
        console.log(add(producto, canti));

    }

    console.log(producto);
    let nombre = { "id": cont, "product_name": producto, "cuantity": canti, "price": cost };
    array_totales[0] = sumador;
    array_totales[1] = acum;
    array_totales[2] = cont;
    array_totales[3] = index;
    cont++;

    productos.push(nombre);
    localStorage.setItem(key, JSON.stringify(productos));
    localStorage.setItem(key_1, JSON.stringify(array_totales));

    //aqui va el JSON
});

function add(producto, canti) {


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
    index++;

    return sumador;
}







function addtr(producto, canti) {

    cost = Math.floor(Math.random() * (25 - 10 + 1)) + 10;//11 20
    tr[5].insertAdjacentHTML("afterend", `<th>${cont}</th><td>${producto}</td><td>${canti}</td><td>${cost}</td>`);

    acum = acum + cost; //11  31
    span[2].innerText = acum;
    spam[0].innerText = sumador;

    console.log("este es acum:", acum);
    index++;
}