var name=sessionStorage.getItem("result");
//for table with bill
var price=sessionStorage.getItem("price");
//console.log(price);
var TotalBill = sessionStorage.getItem("total");
//console.log(name);
//console.log(TotalBill);
let totaldata ='<td colspan="3" >'+name+'</td><td>'+TotalBill+'</td>';
name+=totaldata;
document.getElementById("content").innerHTML=price;
document.getElementById("total").innerHTML=TotalBill;

localStorage.removeItem("result");
localStorage.removeItem("total");
