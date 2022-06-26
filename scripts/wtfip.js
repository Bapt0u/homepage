fetch("https://wtfismyip.com/json")
    .then(response => response.json())
    .then(responseData => {

        document.getElementById("myip").innerHTML = responseData.YourFuckingIPAddress;
        document.getElementById("mylocation").innerHTML = responseData.YourFuckingLocation;

        if (responseData.YourFuckingIPAddress != responseData.YourFuckingHostname) {
            document.getElementById("hostnameleak").innerHTML = "L34K3D"; //+ responseData.YourFuckingHostname;
        } else {
            document.getElementById("hostnameleak").innerHTML = "Nope";
        }

        if (responseData.YourFuckingTorExit != false) {
            document.getElementById('mytorexit').innerHTML = "Tor exit: " + responseData.YourFuckingTorExit;
        }

    });
