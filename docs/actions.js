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
            var currentDate = new Date();

            // Formatting the date in the "9 de abril de 2025" format
            var dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('es-ES', dateOptions);

            // Formatting the time in "HH:mm:ss" format (24-hour format)
            var timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            var formattedTime = currentDate.toLocaleTimeString('es-ES', timeOptions);

            // Displaying the formatted date and time
            document.getElementById('date').innerHTML = formattedDate;
            document.getElementById('time').innerHTML = formattedTime;
        }

        // Update the date and time every second (1000 milliseconds)
        setInterval(updateDateTime, 1000);