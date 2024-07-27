function formValidation()
{
	var uid=document.registration.username;
	var age=document.registration.age;
	var pin=document.registration.pincode;
	var pswd=document.registration.pswd;
	var phno=document.registration.phno;

	if(userid_validation(uid,8,10))
	{
	if(checkage(age))
	{
	if(checkpin(pin))
	{
	if(passid_validation(pswd,10))
	{
	if(checkphno(phno))
	{

	}
	}
	}
	}
	}
	return false;

}











function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}

function checkage(age)
{
	if(age.value<0 || age.value>99 || !isNaN(age))
	{
		alert("enter valid age");
		age.focus();
		return false;
	}
	return true;	
}

function checkpin(pin)
{ 
var numbers = /^[0-9]+$/;
if(pin.value.match(numbers) && pin.value.length==6)
{
return true;
}
else
{
alert('	pincode code must have numeric characters only');
pin.focus();
return false;
}
}
function passid_validation(pswd,mx)
{
var passid_len = pswd.value.length;
if (passid_len == 0 || passid_len != mx)
{
alert("Password should not be empty / length be between "+mx+" ");
pswd.focus();
return false;
}
return true;//alert("Password should not be empty / length be between "+passid_len+" ");
}

function checkphno(phno){
	var no = /^[8][0-9]{8}$/;
	if(phno.value.match(no) && phno.value.length==10)
	{
		return true;
	}
	else
	{
		alert("enter valid ph number");
		pswd.focus();
		return false;
	}
}

