const places = [
    { id: 1, name: "Ayasofya", city: "Istanbul", category: "Tarihi Yapi", description: "Bizans mimarisinin basyapiti, dunyanin en etkileyici tarihi yapilarindan biri. Ayasofya, Istanbul'un sembolu haline gelmis ve yuzyillar boyunca hem kilise hem cami olarak kullanilmistir." },
    { id: 2, name: "Kapadokya", city: "Nevsehir", category: "Dogal Alan", description: "Peri bacalari ve balon turlariyla unlu essiz bir dogal wonderland. Kapadokya, volkanik tuf tabakalarinin erozyonuyla olusmus buyuleyici bir manzaraya sahiptir." },
    { id: 3, name: "Efes Antik Kenti", city: "Izmir", category: "Arkeoloji", description: "Roma doneminden kalma iyi korunmus antik kent ve kutuphane. Efes, antik dunyanin en onemli ticaret merkezlerinden biriydi." },
    { id: 4, name: "Pamukkale", city: "Denizli", category: "Dogal Alan", description: "Traverten teraslari ve termal sulariyla unlu doga harikasi. Pamukkale'nin beyaz travertenleri ve antik havuzlari her yil milyonlarca turisti agirlamaktadir." },
    { id: 5, name: "Topkapi Sarayi", city: "Istanbul", category: "Tarihi Yapi", description: "Osmanli padisahlarinin ikametgahi ve yonetim merkezi. Topkapi Sarayi, 400 yil boyunca Osmanli Imparatorlugu'nun kalbi olmustur." }
];

function getCities() {
    const citySet = new Set(places.map(p => p.city));
    return Array.from(citySet).sort();
}

function getFilteredPlaces(city) {
    if (!city) return places;
    return places.filter(p => p.city === city);
}

function navigate(view, param) {
    const content = document.getElementById('content');
    content.innerHTML = '<div class="loading">Yukleniyor...</div>';

    if (view === 'home') renderHome();
    else if (view === 'detail') renderDetail(param);
    else if (view === 'cities') renderCities();
    else if (view === 'city') renderCityPlaces(param);
}

function renderHome() {
    const content = document.getElementById('content');
    const cities = getCities();

    let options = '<option value="">Tum Sehirler</option>';
    cities.forEach(c => { options += `<option value="${c}">${c}</option>`; });

    let html = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
            <h2 style="font-size:22px">Gezilecek Yerler</h2>
            <div class="filter-bar">
                <select id="cityFilter" onchange="filterByCity()">
                    ${options}
                </select>
            </div>
        </div>
        <div id="placesList">`;

    places.forEach(p => {
        html += `
            <div class="card" onclick="navigate('detail', ${p.id})">
                <h3>${p.name}</h3>
                <div class="meta">
                    <span>${p.category}</span>
                    ${p.city}
                </div>
                <p>${p.description.substring(0, 80)}...</p>
            </div>`;
    });

    html += '</div>';
    content.innerHTML = html;
}

function filterByCity() {
    const city = document.getElementById('cityFilter').value;
    const list = document.getElementById('placesList');
    const filtered = getFilteredPlaces(city);

    let html = '';
    if (filtered.length === 0) {
        html = '<p style="text-align:center;color:#718096;padding:40px">Bu sehirde henuz bir yer eklenmemis.</p>';
    } else {
        filtered.forEach(p => {
            html += `
                <div class="card" onclick="navigate('detail', ${p.id})">
                    <h3>${p.name}</h3>
                    <div class="meta">
                        <span>${p.category}</span>
                        ${p.city}
                    </div>
                    <p>${p.description.substring(0, 80)}...</p>
                </div>`;
        });
    }
    list.innerHTML = html;
}

function renderDetail(id) {
    const p = places.find(pl => pl.id === id);
    if (!p) {
        document.getElementById('content').innerHTML = '<h2>404 - Sayfa bulunamadi</h2><a class="back-link" href="#" onclick="navigate(\'home\')">&larr; Ana sayfaya don</a>';
        return;
    }

    const content = document.getElementById('content');
    content.innerHTML = `
        <a class="back-link" href="#" onclick="navigate('home')">&larr; Ana sayfaya don</a>
        <div class="detail-header">
            <h2>${p.name}</h2>
            <div class="tags">
                <span>${p.city}</span>
                <span>${p.category}</span>
            </div>
        </div>
        <div class="detail-body">
            <p>${p.description}</p>
        </div>`;
}

function renderCities() {
    const cities = getCities();

    let html = '<h2 style="font-size:22px;margin-bottom:8px">Sehirler</h2>';
    html += '<p style="color:#718096;margin-bottom:20px">Bir sehir secin, gezilecek yerleri goruntuleyin.</p>';
    html += '<div class="city-list">';

    cities.forEach(c => {
        const count = places.filter(p => p.city === c).length;
        html += `
            <div class="city-card" onclick="navigate('city', '${c}')">
                <h3>${c}</h3>
                <div class="count">${count} yer</div>
            </div>`;
    });

    html += '</div>';

    document.getElementById('content').innerHTML = html;
}

function renderCityPlaces(city) {
    const filtered = getFilteredPlaces(city);

    let html = `
        <a class="back-link" href="#" onclick="navigate('cities')">&larr; Sehirlere don</a>
        <h2 style="font-size:22px;margin-bottom:20px">${city} - Gezilecek Yerler</h2>`;

    if (filtered.length === 0) {
        html += '<p style="text-align:center;color:#718096;padding:40px">Bu sehirde henuz bir yer eklenmemis.</p>';
    } else {
        filtered.forEach(p => {
            html += `
                <div class="card" onclick="navigate('detail', ${p.id})">
                    <h3>${p.name}</h3>
                    <div class="meta">
                        <span>${p.category}</span>
                    </div>
                    <p>${p.description.substring(0, 80)}...</p>
                </div>`;
        });
    }

    document.getElementById('content').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));
