const regions = [
    {
        name: "Marmara",
        icon: "🏛️",
        places: [
            { id: 1, name: "Ayasofya", city: "Istanbul", category: "Tarihi Yapi", description: "Bizans mimarisinin basyapiti, dunyanin en etkileyici tarihi yapilarindan biri. Ayasofya, Istanbul'un sembolu haline gelmis ve yuzyillar boyunca hem kilise hem cami olarak kullanilmistir." },
            { id: 2, name: "Topkapi Sarayi", city: "Istanbul", category: "Tarihi Yapi", description: "Osmanli padisahlarinin ikametgahi ve yonetim merkezi. Topkapi Sarayi, 400 yil boyunca Osmanli Imparatorlugu'nun kalbi olmustur." },
            { id: 3, name: "Sultanahmet Camii", city: "Istanbul", category: "Tarihi Yapi", description: "Mavi Camii olarak da bilinen Sultanahmet Camii, 6 minaresi ve muhtesem ic dekorasyonuyla Istanbul'un en ikonik yapilarindan biridir." },
            { id: 4, name: "Yerebatan Sarnici", city: "Istanbul", category: "Tarihi Yapi", description: "Bizans imparatoru I. Justinianus tarafindan yaptirilan bu yeralti sarnici, 336 sutunu ve Medusa baslariyla unlu bir tarih hazinesidir." }
        ]
    },
    {
        name: "Ege",
        icon: "🌊",
        places: [
            { id: 5, name: "Efes Antik Kenti", city: "Izmir", category: "Arkeoloji", description: "Roma doneminden kalma iyi korunmus antik kent ve kutuphane. Efes, antik dunyanin en onemli ticaret merkezlerinden biriydi." },
            { id: 6, name: "Pamukkale", city: "Denizli", category: "Dogal Alan", description: "Traverten teraslari ve termal sulariyla unlu doga harikasi. Pamukkale'nin beyaz travertenleri ve antik havuzlari her yil milyonlarca turisti agirlamaktadir." },
            { id: 7, name: "Alacati", city: "Izmir", category: "Dogal Alan", description: "Tas evleri, dar sokaklari ve ruzgar sorfuyle unlu olan Alacati, Ege'nin en guzel sahil kasabalarindan biridir." },
            { id: 8, name: "Bodrum Kalesi", city: "Mugla", category: "Tarihi Yapi", description: "St. Jean Senovalyeleri tarafindan insa edilen Bodrum Kalesi, gunumuzde Su Alti Arkeoloji Muzesi'ne ev sahipligi yapmaktadir." }
        ]
    },
    {
        name: "Ic Anadolu",
        icon: "🏜️",
        places: [
            { id: 9, name: "Kapadokya", city: "Nevsehir", category: "Dogal Alan", description: "Peri bacalari ve balon turlariyla unlu essiz bir dogal wonderland. Kapadokya, volkanik tuf tabakalarinin erozyonuyla olusmus buyuleyici bir manzaraya sahiptir." },
            { id: 10, name: "Anitkabir", city: "Ankara", category: "Tarihi Yapi", description: "Mustafa Kemal Ataturk'un anit mezari. Anitkabir, Ankara'da yukselen bir tepenin uzerinde, gorkemli bir yapidir." },
            { id: 11, name: "Tuz Golu", city: "Ankara", category: "Dogal Alan", description: "Turkiye'nin ikinci buyuk golu olan Tuz Golu, ozellikle yaz aylarinda bembeyaz bir goruntu alarak ziyaretcilerine essiz bir manzara sunar." }
        ]
    },
    {
        name: "Akdeniz",
        icon: "🌴",
        places: [
            { id: 12, name: "Olimpos", city: "Antalya", category: "Arkeoloji", description: "Likya doneminden kalma antik kent ve caretta caretta kaplumbagalarinin yumurtladigi sahiliyle unlu bir tatil beldesidir." },
            { id: 13, name: "Aspendos", city: "Antalya", category: "Arkeoloji", description: "Antik donemden kalma en iyi korunmus tiyatrolardan biri olan Aspendos, 15.000 kisi kapasiteli muhtesem bir yapidir." },
            { id: 14, name: "Duden Selalesi", city: "Antalya", category: "Dogal Alan", description: "Antalya sehrinin icinden gecen Duden Cayi'nin denize dokuldugu noktada olusan muhtesem bir selaledir." }
        ]
    },
    {
        name: "Karadeniz",
        icon: "🌲",
        places: [
            { id: 15, name: "Uzungol", city: "Trabzon", category: "Dogal Alan", description: "Yesilin her tonunu barindiran doga harikasi Uzungol, yemyeşil daglarla cevrili huzur veren bir gol kenari tatil beldesidir." },
            { id: 16, name: "Sumela Manastiri", city: "Trabzon", category: "Tarihi Yapi", description: "Kayalarin oyulmasiyla insa edilen bu tarih manastir, Karadeniz'in en onemli turistik noktalarindan biridir." },
            { id: 17, name: "Ayder Yaylasi", city: "Rize", category: "Dogal Alan", description: "Kaplicalari, yayla evleri ve muhtesem dogasiyla unlu olan Ayder Yaylasi, Karadeniz'in incilerinden biridir." }
        ]
    },
    {
        name: "Dogu Anadolu",
        icon: "⛰️",
        places: [
            { id: 18, name: "Van Golu", city: "Van", category: "Dogal Alan", description: "Turkiye'nin en buyuk golu olan Van Golu, mavi sulari ve Akdamar Adasi'ndaki tarihi kilisesiyle unlu bir dogal guzelliktir." },
            { id: 19, name: "Nemrut Dagi", city: "Adiyaman", category: "Arkeoloji", description: "Kommagene Kralligi'na ait dev heykellerin bulundugu Nemrut Dagi, gun dogumu ve batimi manzarasiyla unlu bir antik alandir." },
            { id: 20, name: "Ishak Pasa Sarayi", city: "Agri", category: "Tarihi Yapi", description: "Osmanli ve Iran mimarisinin harmanlandigi Ishak Pasa Sarayi, Dogu Anadolu'nun en gorkemli yapilarindan biridir." }
        ]
    },
    {
        name: "Guneydogu Anadolu",
        icon: "🏺",
        places: [
            { id: 21, name: "Balikligol", city: "Sanliurfa", category: "Tarihi Yapi", description: "Hz. Ibrahim'in atese atildigi yer olarak bilinen Balikligol, icindeki kutsal baliklari ve cevresindeki tarihi yapilariyla unludur." },
            { id: 22, name: "Hasankeyf", city: "Batman", category: "Arkeoloji", description: "Dicle Nehri kiyisinda binlerce yillik tarihe sahip Hasankeyf, magara evleri ve tarihi koprusuyle essiz bir acik hava muzesidir." },
            { id: 23, name: "Mardin", city: "Mardin", category: "Tarihi Yapi", description: "Tas evleri, dar sokaklari ve Mezopotamya ovasina bakan essiz manzarasiyla Mardin, acik hava muzesi gibidir." }
        ]
    }
];

function getAllPlaces() {
    return regions.flatMap(r => r.places);
}

function getRegionByPlaceId(id) {
    for (const r of regions) {
        for (const p of r.places) {
            if (p.id === id) return r;
        }
    }
    return null;
}

function navigate(view, param) {
    const content = document.getElementById('content');
    content.innerHTML = '<div class="loading">Yukleniyor...</div>';

    if (view === 'home') renderHome();
    else if (view === 'region') renderRegion(param);
    else if (view === 'detail') renderDetail(param);
}

function renderHome() {
    const content = document.getElementById('content');
    let html = `
        <div style="text-align:center;margin-bottom:32px">
            <h2 style="font-size:26px;margin-bottom:8px">Turkiye'nin 7 Bolgesi</h2>
            <p style="color:#718096">Bir bolge secin, gezilecek yerleri kesfedin</p>
        </div>
        <div class="region-grid">`;

    regions.forEach((r, index) => {
        const count = r.places.length;
        html += `
            <div class="region-card" onclick="navigate('region', ${index})" style="animation-delay:${index * 0.05}s">
                <div class="region-icon">${r.icon}</div>
                <h3>${r.name} Bolgesi</h3>
                <div class="count">${count} yer</div>
            </div>`;
    });

    html += '</div>';
    content.innerHTML = html;
}

function renderRegion(index) {
    const region = regions[index];
    if (!region) { navigate('home'); return; }

    const allPlaces = region.places;
    let html = `
        <a class="back-link" href="#" onclick="navigate('home')">&larr; Bolgelere don</a>
        <h2 style="font-size:24px;margin-bottom:4px">${region.icon} ${region.name} Bolgesi</h2>
        <p style="color:#718096;margin-bottom:24px">${allPlaces.length} gezilecek yer</p>`;

    allPlaces.forEach(p => {
        html += `
            <div class="card" onclick="navigate('detail', ${p.id})">
                <h3>${p.name}</h3>
                <div class="meta">
                    <span>${p.category}</span>
                    ${p.city}
                </div>
                <p>${p.description.substring(0, 90)}...</p>
            </div>`;
    });

    document.getElementById('content').innerHTML = html;
}

function renderDetail(id) {
    const allPlaces = getAllPlaces();
    const p = allPlaces.find(pl => pl.id === id);
    if (!p) {
        document.getElementById('content').innerHTML = '<h2>Sayfa bulunamadi</h2><a class="back-link" href="#" onclick="navigate(\'home\')">&larr; Ana sayfaya don</a>';
        return;
    }

    const region = getRegionByPlaceId(id);
    const regionIndex = regions.indexOf(region);

    document.getElementById('content').innerHTML = `
        <a class="back-link" href="#" onclick="navigate('region', ${regionIndex})">&larr; ${region.name} Bolgesine don</a>
        <div class="detail-header">
            <h2>${p.name}</h2>
            <div class="tags">
                <span>${region.name} Bolgesi</span>
                <span>${p.city}</span>
                <span>${p.category}</span>
            </div>
        </div>
        <div class="detail-body">
            <p>${p.description}</p>
        </div>`;
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));
