// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site TechWeb chargé avec succès !");
    
    // Exemple d'interactivité simple pour la navigation active
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
