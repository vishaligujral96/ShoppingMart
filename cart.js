var fruits=[
    {
    "name":"mango",
    "cat":"fruit",
    "price":"100",
    "quantity":"0",
    },
    {
    "name":"apple",
    "cat":"fruit",
    "price":"100",
    "quantity":"0",
    },
    {
    "name":"pear",
    "cat":"fruit",
    "price":"80",
    "quantity":"0",
    },
    {
    "name":"grapes",
    "cat":"fruit",
    "price":"50",
    "quantity":"0",
    },
    {
    "name":"papaya",
    "cat":"fruit",
    "price":"100",
    "quantity":"0",
    },
    {
    "name":"orange",
    "cat":"fruit",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"cherry",
    "cat":"fruit",
    "price":"150",
    "quantity":"0",
    },
    {
    "name":"peach",
    "cat":"fruit",
    "price":"100",
    "quantity":"0",
    },
    {
    "name":"chiku",
    "cat":"fruit",
    "price":"70",
    "quantity":"0",
    },
    {
    "name":"banana",
    "cat":"fruit",
    "price":"20",
    "quantity":"0",
    },
    {
    "name":"blueberry",
    "cat":"fruit",
    "price":"200",
    "quantity":"0",
    },
   ]
    var vegetables=[
    {
    "name":"beans",
    "cat":"vegetable",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"potato",
    "cat":"vegetable",
    "price":"50",
    "quantity":"0",
    },
    {
    "name":"tomato",
    "cat":"vegetable",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"onion",
    "cat":"vegetable",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"cauliflower",
    "cat":"vegetable",
    "price":"50",
    "quantity":"0",
    },
    {
    "name":"lemon",
    "cat":"vegetable",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"ladyfinger",
    "cat":"vegetable",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"chillies",
    "cat":"vegetable",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"carrot",
    "cat":"vegetable",
    "price":"20",
    "quantity":"0",
    },
    {
    "name":"cabbage",
    "cat":"vegetable",
    "price":"40",
    "quantity":"0",
    },
   ]
   var biscuits=[ 
   {
    "name":"britania",
    "cat":"biscuits",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"parle",
    "cat":"biscuits",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"priyagold",
    "cat":"biscuits",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"sunfeast",
    "cat":"biscuits",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"unibic",
    "cat":"biscuits",
    "price":"50",
    "quantity":"0",
    },
    {
    "name":"dukes",
    "cat":"biscuits",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"cremica",
    "cat":"biscuits",
    "price":"20",
    "quantity":"0",
    },
    {
    "name":"patanjali",
    "cat":"biscuits",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"anmol",
    "cat":"biscuits",
    "price":"60",
    "quantity":"0",
    },
    {
    "name":"mcvities",
    "cat":"biscuits",
    "price":"70",
    "quantity":"0",
    },
   ]
    var dairy=[
   
    {
    "name":"butter",
    "cat":"dairy",
    "price":"80",
    "quantity":"0",
    },
    {
    "name":"butter",
    "cat":"dairy",
    "price":"80",
    "quantity":"0",
    },
    {
    "name":"cheese",
    "cat":"dairy",
    "price":"70",
    "quantity":"0",
    },
    {
    "name":"milk",
    "cat":"dairy",
    "price":"50",
    "quantity":"0",
    },
    {
    "name":"yoghurt",
    "cat":"dairy",
    "price":"90",
    "quantity":"0",
    },
    {
    "name":"sourcream",
    "cat":"dairy",
    "price":"60",
    "quantity":"0",
    },
    {
    "name":"icecream",
    "cat":"dairy",
    "price":"30",
    "quantity":"0",
    },
    {
    "name":"whey",
    "cat":"dairy",
    "price":"100",
    "quantity":"0",
    },
    {
    "name":"dairycreamer",
    "cat":"dairy",
    "price":"40",
    "quantity":"0",
    },
    {
    "name":"buttermilk",
    "cat":"dairy",
    "price":"20",
    "quantity":"0",
    },
   ]
   
    function Search()
    {
    var data=document.getElementById('search1').value;
    var reg=new RegExp(data,"g");
    var i;
    var html="";
    var html="<table><tr id='head'><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th></tr>";
   //Searching for fruits
    for(let i=0;i<fruits.length;i++)
    {
    if((fruits[i].name.match(reg))!=null)
    {
    console.log(fruits[i].name);
    html+="<tr><td>"+fruits[i].name+"</td> <td>"+fruits[i].cat+"</td><td> "+fruits[i].price+"</td><td> "+"</td><td><input type='number' name='number' id=quantity"+fruits[i].cat+i+" placeholder='0'></td></tr>";
    }
    
    }
     //Searching for vegetables
    for(let i=0;i<vegetables.length;i++)
    {
    if((vegetables[i].name.match(reg))!=null)//checks for matching pattern which is in fruits
    {
    console.log(vegetables[i].name);
    html+="<tr><td>"+vegetables[i].name+"</td> <td>"+vegetables[i].cat+"</td><td> "+vegetables[i].price+"</td> <td> "+"</td><td><input type='number' name='number' id=quantity"+vegetables[i].cat+i+" placeholder='0'></td></tr>";
    }
    }
     //Searching for biscuits
    for(let i=0;i<biscuits.length;i++)
    {
    if((biscuits[i].name.match(reg))!=null)
    {
    console.log(biscuits[i].name);
    html+="<tr><td>"+biscuits[i].name+"</td> <td>"+biscuits[i].cat+"</td><td> "+biscuits[i].price+"</td> <td> "+"</td><td><input type='number' name='number' id=quantity"+biscuits[i].cat+i+" placeholder='0'></td></tr>";
    }
    }
     //Searching for dairy
    for(let i=0;i<dairy.length;i++)
    {
    if((dairy[i].name.match(reg))!=null)
    {
    console.log(dairy[i].name);
    html+="<tr><td>"+dairy[i].name+"</td> <td>"+dairy[i].cat+"</td><td> "+dairy[i].price+"</td><td> "+"</td><td><input type='number' name='number' id=quantity"+dairy[i].cat+i+" placeholder='0'></td></tr>";
    }
   
    }
    html+="</table>"
    document.getElementById("display").innerHTML = html;
    }
    TotalBill=0;
    
    table1="";
    detail="";
function add()
{ 
    
    table1="<table><tr><th>Name</th><th>Quantity</th></tr>";
    detail="<table id='cust1'><tr><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>";
    var qty=document.getElementById("search1").value.toLowerCase();
    var reg=new RegExp(qty,"g");
    for(var i=0;i<fruits.length;i++)
    {
     if(fruits[i].name.toLowerCase().match(reg)==null){}
     else{
    fruits[i].quantity=document.getElementById("quantity"+fruits[i].cat+i).value;
    console.log(fruits[i].quantity);
         }
    if(fruits[i].quantity>0)
     {
    table1+="<tr><td>"+fruits[i].name+"</td><td>"+fruits[i].quantity+"</td></tr>"
    console.log(fruits[i].quantity);
    TotalBill+=fruits[i].quantity*fruits[i].price;
    detail+="<tr><td>"+fruits[i].name+"</td><td>"+fruits[i].cat+"</td><td>"+fruits[i].price+"</td><td>"+fruits[i].quantity+"</td><td>"+fruits[i].quantity*fruits[i].price+"</td></tr>";
     }
    }
    for(var i=0;i<vegetables.length;i++)
    {
    if(vegetables[i].name.toLowerCase().match(reg)==null){}
     else{
    vegetables[i].quantity=document.getElementById("quantity"+vegetables[i].cat+i).value;
    console.log(vegetables[i].quantity);
       }
    if(vegetables[i].quantity>0)
     {
    table1+="<tr><td>"+vegetables[i].name+"</td><td>"+vegetables[i].quantity+"</td></tr>"
    TotalBill+=vegetables[i].quantity*vegetables[i].price; 
    detail+="<tr><td>"+vegetables[i].name+"</td><td>"+vegetables[i].cat+"</td><td>"+vegetables[i].price+"</td><td>"+vegetables[i].quantity+"</td><td>"+vegetables[i].quantity*vegetables[i].price+"</td></tr>"; 
     }
    }
    for(var i=0;i<biscuits.length;i++)
    {
    if(biscuits[i].name.toLowerCase().match(reg)==null){}
    else
    {
    biscuits[i].quantity=document.getElementById("quantity"+biscuits[i].cat+i).value;
    console.log(biscuits[i].quantity);
    }
    if(biscuits[i].quantity>0)
     {
    table1+="<tr><td>"+biscuits[i].name+"</td><td>"+biscuits[i].quantity+"</td></tr>"
    TotalBill+=biscuits[i].quantity*biscuits[i].price; 
    detail+="<tr><td>"+biscuits[i].name+"</td><td>"+biscuits[i].cat+"</td><td>"+biscuits[i].price+"</td><td>"+biscuits[i].quantity+"</td><td>"+biscuits[i].quantity*biscuits[i].price+"</td></tr>"; 
     }
    }
    for(var i=0;i<dairy.length;i++)
    {
    if(dairy[i].name.toLowerCase().match(reg)==null){}
    else
     {
    dairy[i].quantity=document.getElementById("quantity"+dairy[i].cat+i).value;
    console.log(dairy[i].quantity);
     }
    if(dairy[i].quantity>0)
     {
    table1+="<tr><td>"+dairy[i].name+"</td><td>"+dairy[i].quantity+"</td></tr>"
    TotalBill+=dairy[i].quantity*dairy[i].price;
    detail+="<tr><td>"+dairy[i].name+"</td><td>"+dairy[i].cat+"</td><td>"+dairy[i].price+"</td><td>"+dairy[i].quantity+"</td><td>"+dairy[i].quantity*dairy[i].price+"</td></tr>";
     }
    }
    table1+="</table>";
    document.getElementById("result").innerHTML=table1;
    }
   
    function Reset(){
    var qty=document.getElementById("search1").value.toLowerCase();
    var reg=new RegExp(qty,"g");
    document.getElementById("search1").value="";
    document.getElementById("result").innerHTML="";
    for(var i=0;i<fruits.length;i++)
    {
    fruits[i].quantity=0;
    }
    for(var i=0;i<vegetables.length;i++)
    {
    vegetables[i].quantity=0;
    }
    for(var i=0;i<biscuits.length;i++)
    {
    biscuits[i].quantity=0;
    }
    for(var i=0;i<dairy.length;i++)
    {
    dairy[i].quantity=0;
    }
    }
    function checkout()
    { var total;
    sessionStorage.setItem("price",detail);//sending the added item to key price
    sessionStorage.setItem("result",table1);
    sessionStorage.setItem("total",TotalBill);//sending the total bill
    }
   
   