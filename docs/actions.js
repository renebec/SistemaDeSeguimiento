function PopWinClose()
{
    window.close();
}

function PopWinHome()
{
    window.location.replace("index.html","width=100%", "_self");
}


function PopWin_2TAGP()
{
    window.location.replace("PopWin_2TAGP.html","width=100%", "_self");
}

function PopWin_6TAGP()
{
    window.location.replace("PopWin_6TAGP.html","width=100%", "_self");
}


function PopWin_6TSMEC()
{
    window.location.replace("PopWin_6TSMEC.html","width=100%", "_self");
}


function PopWin_6TAEA()
{
    window.location.replace("PopWin_6TAEA.html","width=100%", "_self");
}


function updateDateTime() {
            // Get the current date and time in Central Mexico
            let options = {
                timeZone: "America/Mexico_City",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            };

            let currentDateTime = new Date().toLocaleString("es-MX", options);

            // Format the date and time as "9 de abril de 2025, 09:40:00"
            document.getElementById('date-time').innerHTML = currentDateTime;
        }

        // Update the time every second
        setInterval(updateDateTime, 1000);

        // Initial call to set the time immediately
        updateDateTime();