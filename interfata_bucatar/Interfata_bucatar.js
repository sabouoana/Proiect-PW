let ok = 0;
let lista = document.getElementById("MenuCook");


let foodList = new Array();
let foodMenu = new Array();


function serverSide() {

	$.ajax({
		type: "GET",
		url: "/chefGetLists",
		success: function (res) {
			for (let i = 0; i < res.length; i++)
				foodList.push(res[i]);
		}
	});

	$.ajax({
		type: "GET",
		url: "/getAllMenus",
		success: function (res) {
			
			for (let i = 0; i < res.length; i++)
				foodMenu.push(res[i]);
			loadOrders();
			
		}

	});
}

$(document).ready(serverSide());
function loadOrders(){

	for (let i = 0; i < foodList.length; i++) {

		if (foodList[i].food != null)
		{	list = foodList[i].food.split("_");
			console.log(list)
			for (let j = 0; j < list.length; j++) {
				for (let k = 0; k < foodMenu.length; k++) {
					if(parseInt(list[j])==foodMenu[k].id_food){
						createOrder(foodMenu[k].description);
					}
				}
			}
		}
	}
}

function run(){
	//To be used for in real time update of the list
	//foodList.length=0;
	//foodMenu.length=0;
	//serverSide();



}
setInterval(run, 10000);

function createOrder(food) {

    let div = document.createElement('div');
    div.className = 'ListElements';
    div.id = 'Foodconfimation';
    console.log(div.id);
    div.innerHTML = food + '<button id="MenuCook" onclick = "cc_Run()"></button>';
    document.body.appendChild(div);


}


function changeColor(color) {
    document.getElementById("MenuCook").style.background = color;
}


function cc_Run() {
    ok++;
    if (ok == 1)
        changeColor('yellow');
    if (ok == 2)
        changeColor('green');

    if (ok == 3) {
        ok = 0;
        var div = document.getElementById("Foodconfimation");

        div.parentNode.removeChild(div);

    }

}