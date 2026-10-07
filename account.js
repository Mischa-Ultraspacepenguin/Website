document.addEventListener("DOMContentLoaded", function () {

    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");

    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");


    // =========================
    // WISSELEN TUSSEN LOGIN EN REGISTREREN
    // =========================

    showRegister.addEventListener("click", function (event) {

        event.preventDefault();

        loginSection.style.display = "none";
        registerSection.style.display = "block";

    });


    showLogin.addEventListener("click", function (event) {

        event.preventDefault();

        registerSection.style.display = "none";
        loginSection.style.display = "block";

    });


    // =========================
    // ACCOUNT AANMAKEN
    // =========================

    const registerForm =
        document.getElementById("registerForm");


    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let username =
            document.getElementById("registerUsername").value
            .trim()
            .toLowerCase();

        const password =
            document.getElementById("registerPassword").value;

        const passwordAgain =
            document.getElementById("registerPasswordAgain").value;

        const message =
            document.getElementById("registerMessage");


        // Controleer wachtwoorden

        if (password !== passwordAgain) {

            message.textContent =
                "De wachtwoorden zijn niet hetzelfde.";

            message.style.color = "red";

            return;
        }


        // Controleer gebruikersnaam

        if (username.length < 3) {

            message.textContent =
                "Je gebruikersnaam moet minstens 3 tekens hebben.";

            message.style.color = "red";

            return;
        }


        // Accounts ophalen

        let accounts = {};

        try {

            const saved =
                localStorage.getItem("EetSlimAccounts");

            if (saved) {

                accounts = JSON.parse(saved);

            }

        } catch (error) {

            accounts = {};

        }


        // Bestaat account al?

        if (accounts[username]) {

            message.textContent =
                "Dit account bestaat al.";

            message.style.color = "red";

            return;
        }


        // Nieuw account

        accounts[username] = {
            password: password
        };


        // Account opslaan

        localStorage.setItem(
            "EetSlimAccounts",
            JSON.stringify(accounts)
        );


        // Bericht

        message.textContent =
            "Account succesvol aangemaakt!";

        message.style.color = "green";


        // Velden leegmaken

        document.getElementById("registerUsername").value = "";
        document.getElementById("registerPassword").value = "";
        document.getElementById("registerPasswordAgain").value = "";


        // Terug naar login

        setTimeout(function () {

            registerSection.style.display = "none";
            loginSection.style.display = "block";

            message.textContent = "";

        }, 1000);

    });


    // =========================
    // INLOGGEN
    // =========================

    const loginForm =
        document.getElementById("loginForm");


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        let username =
            document.getElementById("loginUsername").value
            .trim()
            .toLowerCase();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");


        // Accounts ophalen

        let accounts = {};

        try {

            const saved =
                localStorage.getItem("EetSlimAccounts");

            if (saved) {

                accounts = JSON.parse(saved);

            }

        } catch (error) {

            message.textContent =
                "Er is een probleem met de opgeslagen accounts.";

            message.style.color = "red";

            return;

        }


        // Account bestaat niet

        if (!accounts[username]) {

            message.textContent =
                "Dit account bestaat niet.";

            message.style.color = "red";

            return;
        }


        // Wachtwoord controleren

        if (accounts[username].password !== password) {

            message.textContent =
                "Het wachtwoord is verkeerd.";

            message.style.color = "red";

            return;
        }


        // Ingelogde gebruiker opslaan

        localStorage.setItem(
            "EetSlimLoggedIn",
            username
        );


        // Succesmelding

        message.textContent =
            "Succesvol ingelogd!";

        message.style.color = "green";


        // Naar homepage

        setTimeout(function () {

            window.location.href =
                "aigenerated.html";

        }, 500);

    });

});