const bouton = document.getElementById('bouton-coeur');

// Remplacez par un nom unique que seuls vous deux connaissez
const TOPIC_SECRET = "131128"; 

bouton.addEventListener('click', () => {
    fetch(`https://ntfy.sh/${TOPIC_SECRET}`, {
        method: 'POST',
        body: 'Je pense à toi ! ❤️',
        headers: {
            'Title': 'Nouveau message'
        }
    })
    .then(response => {
        alert("Pensée envoyée !");
    })
    .catch(error => {
        alert("Erreur d'envoi...");
        console.error(error);
    });
});
