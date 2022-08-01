function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
        if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var age = document.forms['myForm']["fage"].value;
    if (age < 18 || age > 40){
        seterror("age", "*Age should be in betweeen 18-40 years!");
        returnval = true;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8) {
        seterror("pass","*Your password must be at least 8 characters"); 
    }
    if (password.length > 16){
        seterror("pass","*Your password must be smaller than 16 characters");
    }
    if (password.search(/[a-z]/) < 0) {
        seterror("pass","*Your password must contain 1 small alphabet");
    }
    if (password.search(/[A-Z]/) < 0) {
        seterror("pass","*Your password must contain 1 large alphabet");
    }
    if (password.search(/[!@#$%^&*]/) < 0){
        seterror("pass","*Your password must contain 1 special character");
    }
    if (password.search(/[0-9]/) < 0) {
        seterror("pass","*Your password must contain a number");
        returnval = true;
    }


    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

function fun(){
    var a = document.getElementById('state').value;
    if(a==='Rajasthan'){
        var array = ['Jaipur','Udaipur','Kota','Jodhpur','Bikaner'];
    }
    else if(a==='Uttar Pradesh'){
        var array = ['Lucknow','Kanpur','Prayagraj'];
    }else{
        var array=[''];
    }
    var string = '';
    for(i =0; i<=array.length;i++){
          string = string+"<option>"+array[i]+'</option>';  
    }
    string="<select>"+string+"</select>";
    document.getElementById('city').innerHTML=string;
}