const bouton = document.getElementById('bouton-coeur');

// TES IDENTIFIANTS RECOLLÉS ET VÉRIFIÉS
const APP_ID = "5f789a3b-121d-4961-8cea-7ac7f5d59f7b"; 
const REST_API_KEY = "os_v2_app_154juoysdvewddhkpld7lvm43kyt5c4b7uiu57nd4w5q34wikfd233gn2c7bk4ktfi2gphr4pabebpi6nm2hja5mjox2fbyzzoxhphi";

bouton.addEventListener('click', async () => {
    // Petite vibration pour confirmer l'appui
    if (navigator.vibrate) navigator.vibrate(50);

    try {
        const response = await fetch("https://onesignal.com/api/v1/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Basic " + REST_API_KEY
            },
            body: JSON.stringify({
                app_id: APP_ID,
                included_segments: ["Subscribed Users"],
                contents: { "fr": "Je pense à toi... ❤️" },
                headings: { "fr": "Pense à toi" }
            })
        });

        if (response.ok) {
            alert("Pensée envoyée !");
        } else {
            const errorData = await response.json();
            alert("Erreur OneSignal : " + (errorData.errors ? errorData.errors[0] : "Inconnue"));
        }
    } catch (e) {
        alert("Erreur de connexion : " + e.message);
    }
});
