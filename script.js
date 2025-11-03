document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Placeholder Dinamis ---
    
    // 1. Data Berita (Latest News)
    const newsData = [
        { title: "Leão Shines in Training, Ready for Next Clash", summary: "The Portuguese winger displays brilliant form ahead of the crucial Serie A fixture this weekend." },
        { title: "Renewal Talks Progressing for Club Captain", summary: "Sources confirm the leadership is close to agreeing on a new long-term contract with the skipper." },
        { title: "Pioli's Tactical Setup: How AC Milan will Approach the Derby", summary: "An in-depth look at the expected starting XI and formation against their city rivals." },
        { title: "Primavera Triumphs: Future Rossoneri Stars Emerge", summary: "The youth team secures a dominant victory, highlighting the strength of the academy pipeline." }
    ];

    const newsGrid = document.querySelector('.news-grid');

    // Clear placeholder items and insert real data
    if (newsGrid) {
        newsGrid.innerHTML = ''; 
        newsData.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('news-item');
            article.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.summary}</p>
            `;
            newsGrid.appendChild(article);
        });
    }

    // 2. Data Skuad (The Squad)
    const squadData = [
        "#16 - Mike Maignan (Goalkeeper)",
        "#5 - Koni De Winter (Centre Back)",
        "#28 - Malick Thiaw (Defender)",
        "#14 - Luca Modric (Centre Midfielder)",
        "#10 - Rafael Leão (Forward)",
        "#11 - Christian Pulisic (Right Winger)"
    ];

    const squadList = document.getElementById('squad-list');

    if (squadList) {
        squadList.innerHTML = ''; 
        squadData.forEach(player => {
            const listItem = document.createElement('li');
            listItem.classList.add('player-item');
            listItem.textContent = player;
            squadList.appendChild(listItem);
        });
    }
    
    // 3. Data Jadwal Pertandingan (Fixtures)
    const fixtureData = [
        "Oct 29: Atalanta vs AC Milan (Serie A)",
        "Nov 03: AC Milan vs AS Roma (Serie A)",
        "Nov 05: AC Milan vs Udinese (Serie A, San Siro)",
        "Nov 09: Parma Calcio 1913 vs AC Milan (Serie A)"
    ];
    
    const fixtureList = document.getElementById('fixture-list');
    
    if (fixtureList) {
        fixtureList.innerHTML = '';
        fixtureData.forEach(fixture => {
            const listItem = document.createElement('li');
            listItem.classList.add('fixture-item');
            listItem.textContent = fixture;
            fixtureList.appendChild(listItem);
        });
    }

    // --- Efek Navigasi (Optional: Smooth Scrolling) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the anchor is part of the main navigation before preventing default scroll
            if (this.closest('.main-nav') || this.classList.contains('cta-button')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});