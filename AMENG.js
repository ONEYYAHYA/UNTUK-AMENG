document.addEventListener('DOMContentLoaded', function() {
    const btnMaaf = document.getElementById('btnMaaf');
    const btnAlasan = document.getElementById('btnAlasan');
    const btnJanji = document.getElementById('btnJanji');
    const btnPuisi = document.getElementById('btnPuisi');
    const messageContainer = document.getElementById('messageContainer');
    const hiddenContent = document.getElementById('hiddenContent');
    const alasanContent = document.getElementById('alasanContent');
    const janjiContent = document.getElementById('janjiContent');
    const puisiContent = document.getElementById('puisiContent');
    
    // Buat efek bunga jatuh
    function createFlowers() {
        const flower = document.createElement('div');
        flower.classList.add('flowers');
        
        // Random position
        flower.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        const size = Math.random() * 20 + 10;
        flower.style.width = size + 'px';
        flower.style.height = size + 'px';
        
        // Random animation duration
        flower.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        document.body.appendChild(flower);
        
        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
    
    // Jalankan efek bunga setiap 300ms
    setInterval(createFlowers, 300);
    
    // Button event listeners
    btnMaaf.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        messageContainer.innerHTML = '<p>Udah besar jangan nangisan, Yakali Walbay TEKAJE nangisan.<br><br>Amenggg Stop Nangisannnnn <span class="heart">🤟</span></p>';
        
        // Efek konfeti
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createFlowers();
            }, i * 100);
        }
        
        // Ganti gambar
        document.getElementById('ourPhoto').src = ('IMG_5565.jpg');
    });
    
    btnAlasan.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        messageContainer.innerHTML = alasanContent.innerHTML;
    });
    
    btnJanji.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        messageContainer.innerHTML = janjiContent.innerHTML;
    });
    
    btnPuisi.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        messageContainer.innerHTML = puisiContent.innerHTML;
    });
    
    // Efek ketik teks
    const text = "Amengg, Semangat ya buat 1 minggu ke depan";
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            document.querySelector('p').textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});