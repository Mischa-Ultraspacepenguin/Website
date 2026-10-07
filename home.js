document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ACCOUNT
    // =========================

    const welcomeMessage = document.getElementById("welcomeMessage");
    const accountLink = document.getElementById("accountLink");
    const logoutButton = document.getElementById("logoutButton");

    const loggedInUser = localStorage.getItem("EetSlimLoggedIn");


    if (loggedInUser) {

        if (welcomeMessage) {
            welcomeMessage.textContent = "Welkom, " + loggedInUser + "!";
        }

        if (accountLink) {
            accountLink.style.display = "none";
        }

        if (logoutButton) {
            logoutButton.style.display = "inline-block";
        }

    } else {

        if (welcomeMessage) {
            welcomeMessage.textContent = "";
        }

        if (logoutButton) {
            logoutButton.style.display = "none";
        }

    }


    // =========================
    // UITLOG POPUP
    // =========================

    const logoutPopup = document.getElementById("logoutPopup");
    const cancelLogout = document.getElementById("cancelLogout");
    const confirmLogout = document.getElementById("confirmLogout");


    // Controleer of de popup-elementen bestaan

    if (!logoutButton || !logoutPopup) {
        console.log("Logout knop of popup niet gevonden.");
        return;
    }


    // Open popup

    logoutButton.addEventListener("click", function () {

        logoutPopup.style.display = "flex";

    });


    // Annuleren

    if (cancelLogout) {

        cancelLogout.addEventListener("click", function () {

            logoutPopup.style.display = "none";

        });

    }


    // Definitief uitloggen

    if (confirmLogout) {

        confirmLogout.addEventListener("click", function () {

            localStorage.removeItem("EetSlimLoggedIn");

            window.location.href = "account.html";

        });

    }

});