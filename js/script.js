const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');

let tanahSebelumnya;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        munculkanTikus();
    }, 500);
}