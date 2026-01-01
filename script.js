const bouton = document.getElementById('bouton-coeur');

bouton.addEventListener('click', () => {
    // Vibration
    if (navigator.vibrate) navigator.vibrate(50);

    // Animation visuelle
    bouton.style.transform = "scale(0.9)";
    setTimeout(() => bouton.style.transform = "scale(1)", 100);

    // Envoi simplifié (sans passer par l'API REST qui bloque)
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(function(OneSignal) {
        // Cette fonction envoie un message à l'utilisateur actuel ou au segment
        // Note : Pour un test entre vous deux, on utilise l'envoi vers un segment
        OneSignal.Notifications.displayNotification({
            title: "Pense à toi",
            body: "Quelqu'un pense à toi... ❤️",
            icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
        });
    });
    
    console.log("Tentative d'envoi...");
});
