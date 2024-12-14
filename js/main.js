
function validate(){
  var  x=document.getElementById('input').value;
   var  y=document.getElementById('vv');
    if(x=="")
    {
        y.innerHTML="Enter value "
        return false;
    }
    else if( isNaN(x))
    {
        y.innerHTML="Enter number not text";
        return false;
    }
    else if(x==0)
    {
        y.innerHTML="Not enter zero ??";
        return false;
    }
    else if(x<0)
    {
        y.innerHTML="Enter positive value ??";
        return false;
    }
    else
    {
        y.innerHTML=x *50;
        return false;
    }

} 