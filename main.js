function sub()
{
    var na = document.getElementById("name").value;
    var mo = (document.getElementById("mobile").value);
    var exp = /^[a-zA-Z\s]+$/;
    var i=0;
    var val = exp.test(na);
    document.getElementById("display1").innerHTML ="";
    document.getElementById("display2").innerHTML ="";
    document.getElementById("display3").innerHTML ="";
    document.getElementById("mobile").style.border = "2px solid black";
    document.getElementById("name").style.border = "2px solid black";
    if(mo == "" || na == "")
    {
        if(mo == "")
        {
            document.getElementById("mobile").style.border = "2px solid red";
            document.getElementById("display1").innerHTML ="Plaese enter mobile";
        }
        if(na == "")
        {
            document.getElementById("name").style.border = "2px solid red" ;
            document.getElementById("display2").innerHTML ="Plaese enter a name";
        }
        i=1;
    }
    if(!val)
    {
        document.getElementById("name").style.border = "2px solid red" ;
        document.getElementById("display2").innerHTML ="plese enter a valid name";
        i=1;
    }
    if(mo != "" && String(mo).length != 10)
    {
        document.getElementById("mobile").style.border = "2px solid red" ;
        document.getElementById("display2").innerHTML ="plese enter a valid 10 digit mobile number";
        i=1;
    }
    if(!i)
    {
        document.getElementById("display3").innerHTML = `${na} ${mo}`;
    }
    
    
    
    
}