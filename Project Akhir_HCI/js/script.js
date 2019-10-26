// nav
$('#MenuLink').click(function(){
	$('#menumuncul').slideToggle();
});

//slider
var idx = 1;
setInterval(function(){
    $("#slides").animate({"margin-left":"-=100%"}, function(){
        idx++;
        if(idx===4){
            $("#slides").css({"margin-left":"0px"})
            idx=1;
        }
    });
}, 5000);


$('.slide').hover(function(){
	$('.slide-content').slideToggle();
});

// validation


// Email
function emailValidation(){
    var email = document.getElementById('email').value;
    var countAt = 0;
    var countDot = 0;

    if(email.trim()=="") alert("Email must not be empty!");
    if(!email.includes("@")) alert("Email must contain '@'! ");
    if(!email.includes(".")) alert("Email must contain '.'! ");

    for(var i = 0 ; i < email.length; i++){
        if(email.charAt(i) == '@') countAt++;
        if(email.charAt(i) == '.') countDot++;
    }

    if(countAt > 1) alert("Email can only contains 1 '@'! ");
    if(countDot > 1) alert("Email can only contains 1 '.'! ");

    if( email.charAt(email.indexOf("@")-1) == '.' || email.charAt(email.indexOf("@")+1) == '.' || email.charAt(email.indexOf(".")-1) == '@' || email.charAt(email.indexOf(".")+1) == '@' ) alert("'@' and '.' must not beside each other!");
    if( email.indexOf("@") == 0 || email.indexOf("@") == email.length-1) alert("Email must not starts with or ends with '@'!");
    if( email.indexOf(".") == 0 || email.indexOf(".") == email.length-1) alert("Email must not starts with or ends with '.'!");
}

// Password
function passwordValidation(){
    var password = document.getElementById('password').value;
    var banList = new Array ("/","!", "@", "#","$","%","%","^","&","_",".",",");
    var banListLength = banList.length;

    if(password.trim()=="") alert("Password must not be empty!");
    if( password.length < 8 ) alert('Password length must be at least 8 characters');
    
    for(var i = 0 ; i < banListLength;i++){
            if(password.match(banList[i])) {
                alert("Password must not contains special characters");
                break;
            }
    }

}

// Confirm Password
function confirmPassword(){
    var confirmPass = document.getElementById('confirmPass').value;
    var password = document.getElementById('password').value;

    if(confirmPass.trim()=="") alert("Confirm Password must not be empty!");
    if( !confirmPass.match(password) ) alert('Password must be the same');
}

// Address Validation
function addressValidation(){
    var address = document.getElementById('address').value;

    if(address.trim()=="") alert("Address must not be empty!");
    if( !address.endsWith("Street") ) alert("Address must be ends with Street !");
}

// Date Validation
function dateValidation(){
    var date = new Date(document.getElementById('dates').value);
    var currDate = new Date();
    var year = date.getFullYear();
    var currYear = currDate.getFullYear();
    
    if(currYear - year < 17 ) alert("You must at least be 17 years old to sign up!");

}

// Gender Validation
function genderValidation(){
    var genderButton = document.formz.gender;

    for(var i = 0; i < genderButton.length;i++){
        if(genderButton[i].checked) break;
    }

    if(i == genderButton.length){
        return alert("You must choose your gender either Male or Female !");
    }
}

function validation(){
    emailValidation();
    passwordValidation();
    confirmPassword();
    addressValidation();
    dateValidation();
    genderValidation();    
}

