const bouton = document.getElementById('bouton-coeur');

// --- TES IDENTIFIANTS ONESIGNAL ---
const APP_ID = "5f789a3b-121d-4961-8cea-7ac7f5d59cda"; 
const REST_API_KEY = "os_v2_app_l54juoysdvewddhkpld7lvm43j2iyccnm5ju2xerpvqt324dr2dwlk7tbfj4oo4yjotcfu64xkugofrw6riucvlahglxwv4lfagwm3i";
// ----------------------------------

bouton.addEventListener('click', async () => {
    // Petit effet visuel au clic
    bouton.style.transform = "scale(0.9)";
    setTimeout(() => bouton.style.transform = "scale(1)", 100);

    // Envoi de la notification via l'API OneSignal
    try {
        const response = await fetch("https://onesignal.com/api/v1/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Basic " + REST_API_KEY
            },
            body: JSON.stringify({
                app_id: APP_ID,
                included_segments: ["AllUsers"], // Envoie à tous ceux qui ont l'app
                contents: { "fr": "Je pense à toi... ❤️" },
                headings: { "fr": "Pense à toi" }
            })
        });

        if (response.ok) {
            console.log("Notification envoyée avec succès !");
        } else {
            const errorData = await response.json();
            console.error("Erreur OneSignal :", errorData);
            alert("Erreur OneSignal : " + (errorData.errors ? errorData.errors[0] : "Inconnue"));
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
        alert("Erreur de connexion internet.");
    }
});

