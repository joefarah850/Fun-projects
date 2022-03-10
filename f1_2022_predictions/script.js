let drivers = ["", "Max Verstappen", "Sergio Perez", "Lewis Hamilton", "George Russell", "Carlos Sainz", "Charles Leclerc", "Lando Norris",
               "Daniel Ricciardo", "Fernando Alonso", "Esteban Ocon", "Pierre Gasly", "Yuki Tsunoda", "Sebastian Vettel", "Lance Stroll",
               "Nicholas Latifi", "Alex Albon", "Valtteri Bottas", "Guanyu Zhou", "Mick Schumacher", "Kevin Magnussen"];

let constr = ["", "Mercedes", "Red Bull", "Ferrari", "McLaren", "Alpine", "Alpha Tauri", "Aston Martin", "Williams", "Alfa Romeo", "Haas"]

var driver1 = document.getElementById("Drivers1");
var driver2 = document.getElementById("Drivers2");
var driver3 = document.getElementById("Drivers3");
var driver4 = document.getElementById("Drivers4");
var driver5 = document.getElementById("Drivers5");
var driver6 = document.getElementById("Drivers6");
var driver7 = document.getElementById("Drivers7");
var driver8 = document.getElementById("Drivers8");
var driver9 = document.getElementById("Drivers9");
var driver10 = document.getElementById("Drivers10");
var driver11 = document.getElementById("Drivers11");
var driver12 = document.getElementById("Drivers12");
var driver13 = document.getElementById("Drivers13");
var driver14 = document.getElementById("Drivers14");
var driver15 = document.getElementById("Drivers15");
var driver16 = document.getElementById("Drivers16");
var driver17 = document.getElementById("Drivers17");
var driver18 = document.getElementById("Drivers18");
var driver19 = document.getElementById("Drivers19");
var driver20 = document.getElementById("Drivers20");

var const1 = document.getElementById("Const1");
var const2 = document.getElementById("Const2");
var const3 = document.getElementById("Const3");
var const4 = document.getElementById("Const4");
var const5 = document.getElementById("Const5");
var const6 = document.getElementById("Const6");
var const7 = document.getElementById("Const7");
var const8 = document.getElementById("Const8");
var const9 = document.getElementById("Const9");
var const10 = document.getElementById("Const10");

var driverObj = [driver1, driver2, driver3, driver4, driver5, driver6, driver7, driver8, driver9, driver10, driver11, driver12, driver13,
                 driver14, driver15, driver16, driver17, driver18, driver19, driver20];

var constObj = [const1, const2, const3, const4, const5, const6, const7, const8, const9, const10];                 

(function () {
  function select (select, drivers) {
    for (var i = 0; i < drivers.length; i++) {
      var optn = drivers[i];
      var elm = document.createElement("option");
      elm.textContent = optn;
      elm.value = optn;
      select.appendChild(elm);
    }
  }

  select(driver1, drivers);
  select(driver2, drivers);
  select(driver3, drivers);
  select(driver4, drivers);
  select(driver5, drivers);
  select(driver6, drivers);
  select(driver7, drivers);
  select(driver8, drivers);
  select(driver9, drivers);
  select(driver10, drivers);
  select(driver11, drivers);
  select(driver12, drivers);
  select(driver13, drivers);
  select(driver14, drivers);
  select(driver15, drivers);
  select(driver16, drivers);
  select(driver17, drivers);
  select(driver18, drivers);
  select(driver19, drivers);
  select(driver20, drivers);

  select(const1, constr);
  select(const2, constr);
  select(const3, constr);
  select(const4, constr);
  select(const5, constr);
  select(const6, constr);
  select(const7, constr);
  select(const8, constr);
  select(const9, constr);
  select(const10, constr);
})();

function changeValueD(driver) {
  //Getting Value
  // //var selValue = document.getElementById("singleSelectDD").value;
  var selObj = document.getElementById(driver);
  // // var selValue = selObj.options[selObj.selectedIndex].value;
  // //Setting Value
  // // document.getElementById("textFieldValueJS").value = selValue;
  // selObj.options[selObj.selectedIndex].disabled = true;
  

  for (var i = 0; i < driverObj.length; i++) {
    if (selObj.selectedIndex != 0)
      driverObj[i].options[selObj.selectedIndex].disabled = true;
  }

  var index = [];

  for (var i = 0; i < driverObj.length; i++)
    index[i] = driverObj[i].selectedIndex;

  for (var i = 0; i < driverObj.length; i++) {
    for (var j = 1; j < driverObj[i].options.length; j++)
      if (!index.includes(j))
        driverObj[i].options[j].disabled = false;
  }
}

function changeValueC(constr) {
  //Getting Value
  // //var selValue = document.getElementById("singleSelectDD").value;
  var selObj = document.getElementById(constr);
  // // var selValue = selObj.options[selObj.selectedIndex].value;
  // //Setting Value
  // // document.getElementById("textFieldValueJS").value = selValue;
  // selObj.options[selObj.selectedIndex].disabled = true;
  

  for (var i = 0; i < constObj.length; i++) {
    if (selObj.selectedIndex != 0)
      constObj[i].options[selObj.selectedIndex].disabled = true;
  }

  var index = [];

  for (var i = 0; i < constObj.length; i++)
    index[i] = constObj[i].selectedIndex;

  for (var i = 0; i < constObj.length; i++) {
    for (var j = 1; j < constObj[i].options.length; j++)
      if (!index.includes(j))
        constObj[i].options[j].disabled = false;
  }
}