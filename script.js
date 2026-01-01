const bouton = document.getElementById('bouton-coeur');

// IDENTIFIANTS
const APP_ID = "5f789a3b-121d-4961-8cea-7ac7f5d59cda"; 
const REST_API_KEY = "yt5c4b7uiu57nd4w5q34wikfd";

bouton.addEventListener('click', async () => {
    // Vibration haptique
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
                included_segments: ["AllUsers"],
                contents: { "fr": "Je pense à toi... ❤️" },
                headings: { "fr": "Pense à toi" }
            })
        });

        if (response.ok) {
            console.log("Envoyé !");
        } else {
            alert("Erreur OneSignal : vérifie tes clés.");
        }
    } catch (error) {
        alert("Erreur de connexion.");
    }
});
