import app from "../src/app"; // Corrige le chemin si nécessaire


const port = process.env.PORT || 5500;

app.listen(port, () => {
console.log(`🚀 Serveur démarré sur : http://localhost:${port}`);
});
    