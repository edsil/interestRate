function compute()
{
    // Get the value inputted into the principal box
    principal = parseFloat(document.getElementById("principal").value);
    // Get the value inputted into the interest rate slider
    rate = parseFloat(document.getElementById("interest").value);
    // Get the value inputted into the years dropdown
    years = parseInt(document.getElementById("years").value);

    // Validates the value of principal not 0 nor negative
    if (principal<=0)
    {
        // if the value is 0 or negative, gives an alert and doesn't proceed
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Calculates the interest
    interest = principal * years * rate / 100;

    // Adds the current year to the number of years invested
    currentYear = new Date(Date.now());
    futureYear = currentYear.getFullYear() + years;

    // Forms string with the results
    outResult = "<br>If you deposit "+principal+", <br>";
    outResult = outResult + "at an interest rate of "+rate+"%. <br>";
    outResult = outResult +  "You will receive an amount of "+interest+", <br>";
    outResult = outResult +  "in the year "+futureYear;

    //Outputs the result into the "result" element
    document.getElementById("result").innerHTML = outResult;

    // Moves focus back to the principal input box
    document.getElementById("principal").focus();
}

function updateLabel()
{
  // Gets the value selected from the interest slider
  range = document.getElementById("interest").value;
  // and outputs it to the "outInterest" span after it
  document.getElementById("outInterest").innerHTML = range + "%";
}
