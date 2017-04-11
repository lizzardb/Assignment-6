function GoDark() {
    document.getElementById("beta").style.visibility = "hidden";
    document.getElementById("delta").style.visibility = "hidden";
    document.getElementById("gamma").style.visibility = "hidden";
}
function OptionChange()
{
    if (document.getElementById("options").value == "Add Customer(s)")
    {
        document.getElementById("beta").style.visibility = "visible";
        document.getElementById("delta").style.visibility = "hidden";
        document.getElementById("gamma").style.visibility = "hidden";
    }
    else if (document.getElementById("options").value == "Update Shipping Addresses")
    {
        document.getElementById("beta").style.visibility = "hidden";
        document.getElementById("delta").style.visibility = "visible";
        document.getElementById("gamma").style.visibility = "hidden";
    }
    else if (document.getElementById("options").value == "Delete Customer(s)")
    {
        document.getElementById("beta").style.visibility = "hidden";
        document.getElementById("delta").style.visibility = "hidden";
        document.getElementById("gamma").style.visibility = "visible";
    }
    else
    {
        document.getElementById("beta").style.visibility = "hidden";
        document.getElementById("delta").style.visibility = "hidden";
        document.getElementById("gamma").style.visibility = "hidden";
    }
}

function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResultA(result);
        }
    }
    
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);

}

function UpdateAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernumber = document.getElementById("orderno").value;
    var customername = document.getElementById("shipname").value;
    var customeraddress = document.getElementById("shipaddress").value;
    var customercity = document.getElementById("shipcity").value;
    var customerzip = document.getElementById("shipzip").value;
    
    var update = '{"OrderID":"' + ordernumber + '","ShipName":"' + customername + '","ShipAddress":"' + customeraddress +'","ShipCity":"' + customercity + '","ShipPostcode":"' + customerzip +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResultB(result);
        }
    }
    
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(update);

}

function OperationResultA(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("resultA").innerHTML = "The operation was successful!"
    }
    
    else
    {
      document.getElementById("resultA").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function OperationResultB(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("resultB").innerHTML = "The operation was successful!"
    }
    
    else
    {
      document.getElementById("resultB").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function OperationResultC(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("resultC").innerHTML = "The operation was successful!"
    }
    
    else
    {
      document.getElementById("resultC").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

