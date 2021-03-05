function updateCountryView() {
    var ddCountry = document.getElementById("ddTraveled");
    var divCountry = document.getElementById("divCountry");

    if ( ddCountry.value == "Yes" ) {
        divCountry.classList.remove( "invisible" )
    }
    else {
        divCountry.classList.add( "invisible" )
    }
}

function validateForm() {

    var DoB = document.querySelector( "#txtDoB" );
    var divDoBError = document.querySelector( "#divDoBError" )

    if (DoB.value == "") {
        divDoBError.classList.remove( "invisible" );
        divDoBError.innerHTML = "The Date of birth can not be empty."
        DoB.classList.add ( "hasError" );
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            divDoBError.classList.remove( "invisible" );
            divDoBError.innerHTML = "The Date of birth must be before today's date."
            DoB.classList.add ( "hasError" );
        }
        else {
            divDoBError.classList.add( "invisible" );
            divDoBError.innerHTML = ""
            DoB.classList.remove ( "hasError" );
        }
    }
    

    return false;
}