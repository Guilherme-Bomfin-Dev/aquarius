
// Variáveis de controle
let isPlaying = false; // Estado inicial da música (pausada)
const musicButtonOriginal = document.getElementById('music-button-original'); // Botão original
const musicButtonFixed = document.getElementById('music-button-fixed'); // Novo botão fixo
const backgroundMusic = document.getElementById('background-music'); // Música

// Função para alternar entre play/pausa e remover o primeiro botão
function toggleMusic() {
    if (isPlaying) {
        // Pausar a música
        backgroundMusic.pause();
        isPlaying = false;
    } else {
        // Tocar a música
        backgroundMusic.play();
        isPlaying = true;
    }

    // Excluir o primeiro botão
    musicButtonOriginal.style.display = 'none';
    
    // Mostrar o novo botão fixo
    musicButtonFixed.style.display = 'block';

    
    

}

