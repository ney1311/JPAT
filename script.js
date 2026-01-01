const bouton = document.getElementById('bouton-coeur');

// TES IDENTIFIANTS (Copie-les bien depuis OneSignal)
const APP_ID = "5f789a3b-121d-4961-8cea-7ac7f5d59cda"; 
const REST_API_KEY = 
    "os_v2_app_154juoysdvewddhkpld7lvm
43kyt5c4b7uiu57nd4w5q34wikfd233gn
2c7bk4ktfi2gphr4pabebpi6nm2hja5mj
ox2fbyzzoxhphi";

bouton.addEventListener('click', async () => {
    // Vibration
    if (navigator.vibrate) navigator.vibrate(50);

    // Envoi de la notification
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
            alert("Pensée envoyée !");
        } else {
            const error = await response.json();
            alert("Erreur OneSignal : " + JSON.stringify(error));
        }
    } catch (e) {
        alert("Erreur réseau : " + e.message);
    }
});
