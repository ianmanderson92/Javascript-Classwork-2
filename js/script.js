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


    //Check to see if DoB is valid
    var DoB = document.querySelector( "#txtDoB" );
    var divDoBError = document.querySelector( "#divDoBError" );
    var formIsValid = true;

    if (DoB.value == "") {
        divDoBError.classList.remove( "invisible" );
        divDoBError.innerHTML = "The Date of birth can not be empty."
        DoB.classList.add ( "hasError" );
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            divDoBError.classList.remove( "invisible" );
            divDoBError.innerHTML = "The Date of birth must be before today's date."
            DoB.classList.add ( "hasError" );
            formIsValid = false;
        }
        else {
            divDoBError.classList.add( "invisible" );
            divDoBError.innerHTML = ""
            DoB.classList.remove ( "hasError" );
        }
    }

    //Check to see if country was added in part 3 if yes is selected
    var ddCountry = document.querySelector( "#ddCountry" );
    if ( ddCountry.value == "Yes" ) {
        var txtCountry = document.querySelector( "#txtCountry" );
        if ( txtCountry.value == "" ) {
            document.querySelector( "#divCountryError" ).classList.remove( "invisible" );
            txtCountry.classList.add( "hasError" );
            formIsValid = false;
        }
        else {
            document.querySelector( "#divCountryError" ).classList.add( "invisible" );
            txtCountry.classList.remove( "hasError" );
        }
    }

    //Check to make sure there are no illegal charachters in any input field
    var elements = document.getElementsByTagName( " input" );
    var invalidCharacters = ['#', '!', '~', '&', '<', '>', '`', '"']

    for ( let i = 0; i < elements.length; i++ ) {
        for ( let j = 0; j < invalidCharacters.length; j++ ) {
            if ( elements[i].value.indexOf(invalidCharacters[j]) != -1 ) {
                elements[i].classList.add( "hasError" );
                formIsValid = false;
            }
        }
    }
    
    return formIsValid;
}