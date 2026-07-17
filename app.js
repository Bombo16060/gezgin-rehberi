const regions = [
    {
        name: "Marmara",
        icon: "🏛️",
        places: [
            {
                id: 1, name: "Ayasofya", city: "Istanbul", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/ayasofya/800/400",
                description: "Bizans mimarisinin basyapiti, dunyanin en etkileyici tarihi yapilarindan biri. Ayasofya, Istanbul'un sembolu haline gelmis ve yuzyillar boyunca hem kilise hem cami olarak kullanilmistir.",
                accommodation: "Sultanahmet bolgesinde cok sayida butik otel ve pansiyon bulunur. En yakin konaklama secenekleri arasinda Sultanahmet Kureli Hotel, Celal Sultan Hotel ve Yesil Ev gibi tarihi oteller yer alir."
            },
            {
                id: 2, name: "Topkapi Sarayi", city: "Istanbul", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/topkapi/800/400",
                description: "Osmanli padisahlarinin ikametgahi ve yonetim merkezi. Topkapi Sarayi, 400 yil boyunca Osmanli Imparatorlugu'nun kalbi olmustur.",
                accommodation: "Saraya en yakin konaklama Sultanahmet ve Sirkeci bolgesindedir. Ibrahim Pasa Hotel, Seven Hills Hotel ve Hagia Sofia Mansions iyi seceneklerdir."
            },
            {
                id: 3, name: "Sultanahmet Camii", city: "Istanbul", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/sultanahmet/800/400",
                description: "Mavi Camii olarak da bilinen Sultanahmet Camii, 6 minaresi ve muhtesem ic dekorasyonuyla Istanbul'un en ikonik yapilarindan biridir.",
                accommodation: "Sultanahmet Meydani cevresi konaklama icin en ideal bolgedir. Arcadia Blue Hotel, Sultanhan Hotel ve Dervish Hotel yakindaki otellerdendir."
            },
            {
                id: 4, name: "Yerebatan Sarnici", city: "Istanbul", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/yerebatan/800/400",
                description: "Bizans imparatoru I. Justinianus tarafindan yaptirilan bu yeralti sarnici, 336 sutunu ve Medusa baslariyla unlu bir tarih hazinesidir.",
                accommodation: "Sultanahmet'teki otellerin cogu Yerebatan Sarnicina yurume mesafesindedir. Basilica Residence ve Antusa Hotel en yakin konaklama noktalarindandir."
            }
        ]
    },
    {
        name: "Ege",
        icon: "🌊",
        places: [
            {
                id: 5, name: "Efes Antik Kenti", city: "Izmir", category: "Arkeoloji",
                image: "https://picsum.photos/seed/efes/800/400",
                description: "Roma doneminden kalma iyi korunmus antik kent ve kutuphane. Efes, antik dunyanin en onemli ticaret merkezlerinden biriydi.",
                accommodation: "Selcuk ilcesinde butik otel ve pansiyonlar mevcuttur. AyaSultan Hotel, Nilya Hotel ve Bella Hotel populer konaklama secenekleridir."
            },
            {
                id: 6, name: "Pamukkale", city: "Denizli", category: "Dogal Alan",
                image: "https://picsum.photos/seed/pamukkale/800/400",
                description: "Traverten teraslari ve termal sulariyla unlu doga harikasi. Pamukkale'nin beyaz travertenleri ve antik havuzlari her yil milyonlarca turisti agirlamaktadir.",
                accommodation: "Pamukkale koyunde ve Karahayit bolgesinde termal oteller bulunur. Pamukkale Thermall, Richmond Pamukkale Thermal ve Colossae Thermal Hotel en iyi seceneklerdendir."
            },
            {
                id: 7, name: "Alacati", city: "Izmir", category: "Dogal Alan",
                image: "https://picsum.photos/seed/alacati/800/400",
                description: "Tas evleri, dar sokaklari ve ruzgar sorfuyle unlu olan Alacati, Ege'nin en guzel sahil kasabalarindan biridir.",
                accommodation: "Alacati'da tas ev butik oteller cok populer. Alacati Port Hotel, Mayla Alacati Hotel ve Gaia Alacati otantik konaklama deneyimi sunar."
            },
            {
                id: 8, name: "Bodrum Kalesi", city: "Mugla", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/bodrum/800/400",
                description: "St. Jean Senovalyeleri tarafindan insa edilen Bodrum Kalesi, gunumuzde Su Alti Arkeoloji Muzesi'ne ev sahipligi yapmaktadir.",
                accommodation: "Bodrum merkezde ve cevresinde her butceye uygun otel bulunur. Marina Vista Hotel, Bodrum Kaya Otel ve Artemis Otel kaleye yakin konaklama noktalaridir."
            }
        ]
    },
    {
        name: "Ic Anadolu",
        icon: "🏜️",
        places: [
            {
                id: 9, name: "Kapadokya", city: "Nevsehir", category: "Dogal Alan",
                image: "https://picsum.photos/seed/kapadokya/800/400",
                description: "Peri bacalari ve balon turlariyla unlu essiz bir dogal wonderland. Kapadokya, volkanik tuf tabakalarinin erozyonuyla olusmus buyuleyici bir manzaraya sahiptir.",
                accommodation: "Kapadokya'da kaya oteller ve magara oteller unlu. Museum Hotel, Argos in Cappadocia, Sultan Cave Suites ve Kelebek Cave Hotel en luks seceneklerdendir."
            },
            {
                id: 10, name: "Anitkabir", city: "Ankara", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/anitkabir/800/400",
                description: "Mustafa Kemal Ataturk'un anit mezari. Anitkabir, Ankara'da yukselen bir tepenin uzerinde, gorkemli bir yapidir.",
                accommodation: "Ankara merkezde Anitkabir'e yakın cok sayida otel vardir. Ankara HiltonSA, Divan Ankara ve The Green Park Ankara en bilinenlerdir."
            },
            {
                id: 11, name: "Tuz Golu", city: "Ankara", category: "Dogal Alan",
                image: "https://picsum.photos/seed/tuzgolu/800/400",
                description: "Turkiye'nin ikinci buyuk golu olan Tuz Golu, ozellikle yaz aylarinda bembeyaz bir goruntu alarak ziyaretcilerine essiz bir manzara sunar.",
                accommodation: "Tuz Golu cevresinde sinirli konaklama vardir. Sereflikochisar'da Tuz Hotel ve Ankara sehir merkezindeki oteller en yakin konaklama secenekleridir."
            }
        ]
    },
    {
        name: "Akdeniz",
        icon: "🌴",
        places: [
            {
                id: 12, name: "Olimpos", city: "Antalya", category: "Arkeoloji",
                image: "https://picsum.photos/seed/olimpos/800/400",
                description: "Likya doneminden kalma antik kent ve caretta caretta kaplumbagalarinin yumurtladigi sahiliyle unlu bir tatil beldesidir.",
                accommodation: "Olimpos'ta agac evler unlu bir konaklama deneyimi sunar. Olimpos Lodge, Kadir'in Agac Evleri ve Sait's Place butik ve dogal konaklama imkani saglar."
            },
            {
                id: 13, name: "Aspendos", city: "Antalya", category: "Arkeoloji",
                image: "https://picsum.photos/seed/aspendos/800/400",
                description: "Antik donemden kalma en iyi korunmus tiyatrolardan biri olan Aspendos, 15.000 kisi kapasiteli muhtesem bir yapidir.",
                accommodation: "Aspendos'a en yakin konaklama Serik ve Side bolgesindedir. Kaya Aspendos Hotel, Crystal Admiral Resort ve Side otelleri iyi seceneklerdir."
            },
            {
                id: 14, name: "Duden Selalesi", city: "Antalya", category: "Dogal Alan",
                image: "https://picsum.photos/seed/duden/800/400",
                description: "Antalya sehrinin icinden gecen Duden Cayi'nin denize dokuldugu noktada olusan muhtesem bir selaledir.",
                accommodation: "Antalya sehir merkezinde Duden Selalesi'ne yakin oteller bulunur. Ramada Plaza Antalya, DoubleTree by Hilton Antalya ve IC Hotels Airport iyi seceneklerdir."
            }
        ]
    },
    {
        name: "Karadeniz",
        icon: "🌲",
        places: [
            {
                id: 15, name: "Uzungol", city: "Trabzon", category: "Dogal Alan",
                image: "https://picsum.photos/seed/uzungol/800/400",
                description: "Yesilin her tonunu barindiran doga harikasi Uzungol, yemyeşil daglarla cevrili huzur veren bir gol kenari tatil beldesidir.",
                accommodation: "Uzungol cevresinde gol manzarali oteller ve butik daireler bulunur. Uzungol Park Hotel, Karadeniz Resort Otel ve Ada Otel en populer konaklama noktalaridir."
            },
            {
                id: 16, name: "Sumela Manastiri", city: "Trabzon", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/sumela/800/400",
                description: "Kayalarin oyulmasiyla insa edilen bu tarih manastir, Karadeniz'in en onemli turistik noktalarindan biridir.",
                accommodation: "Sumela Manastiri'na en yakin konaklama Macka ilcesinde bulunur. Sumela Park Hotel, Macka Senler Otel ve Trabzon sehir merkezindeki oteller tercih edilebilir."
            },
            {
                id: 17, name: "Ayder Yaylasi", city: "Rize", category: "Dogal Alan",
                image: "https://picsum.photos/seed/ayder/800/400",
                description: "Kaplicalari, yayla evleri ve muhtesem dogasiyla unlu olan Ayder Yaylasi, Karadeniz'in incilerinden biridir.",
                accommodation: "Ayder Yaylasi'nda dogal ahsap oteller ve kaplica otelleri bulunur. Ayder Otel, Yesil Vadi Otel ve Kardelen Otel termal konaklama imkani sunar."
            }
        ]
    },
    {
        name: "Dogu Anadolu",
        icon: "⛰️",
        places: [
            {
                id: 18, name: "Van Golu", city: "Van", category: "Dogal Alan",
                image: "https://picsum.photos/seed/vangolu/800/400",
                description: "Turkiye'nin en buyuk golu olan Van Golu, mavi sulari ve Akdamar Adasi'ndaki tarihi kilisesiyle unlu bir dogal guzelliktir.",
                accommodation: "Van sehir merkezinde ve Akdamar Adasi cevresinde oteller bulunur. Buyuk Van Hotel, Van Kent Hotel ve Akdamar Otel konaklama icin uygun seceneklerdir."
            },
            {
                id: 19, name: "Nemrut Dagi", city: "Adiyaman", category: "Arkeoloji",
                image: "https://picsum.photos/seed/nemrut/800/400",
                description: "Kommagene Kralligi'na ait dev heykellerin bulundugu Nemrut Dagi, gun dogumu ve batimi manzarasiyla unlu bir antik alandir.",
                accommodation: "Nemrut Dagi cevresinde Kahta ilcesinde oteller bulunur. Nemrut Hotel, Euphrat Hotel ve Kahta Hotel konaklama icin uygun noktalardir."
            },
            {
                id: 20, name: "Ishak Pasa Sarayi", city: "Agri", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/ishakpasa/800/400",
                description: "Osmanli ve Iran mimarisinin harmanlandigi Ishak Pasa Sarayi, Dogu Anadolu'nun en gorkemli yapilarindan biridir.",
                accommodation: "Sarayin bulundugu Dogubeyazit ilcesinde Tahran Otel, Dogubeyazit Otel ve Isfahan Otel gibi konaklama secenekleri mevcuttur."
            }
        ]
    },
    {
        name: "Guneydogu Anadolu",
        icon: "🏺",
        places: [
            {
                id: 21, name: "Balikligol", city: "Sanliurfa", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/balikligol/800/400",
                description: "Hz. Ibrahim'in atese atildigi yer olarak bilinen Balikligol, icindeki kutsal baliklari ve cevresindeki tarihi yapilariyla unludur.",
                accommodation: "Sanliurfa merkezde Balikligol'e yurume mesafesinde oteller bulunur. Edessa Hotel, Harran Hotel ve Hilton Garden Inn Urfa uygun seceneklerdir."
            },
            {
                id: 22, name: "Hasankeyf", city: "Batman", category: "Arkeoloji",
                image: "https://picsum.photos/seed/hasankeyf/800/400",
                description: "Dicle Nehri kiyisinda binlerce yillik tarihe sahip Hasankeyf, magara evleri ve tarihi koprusuyle essiz bir acik hava muzesidir.",
                accommodation: "Hasankeyf'te butik oteller ve Batman merkezde konaklama secenekleri bulunur. Hasankeyf Otel ve Batman Otel tercih edilebilir."
            },
            {
                id: 23, name: "Mardin", city: "Mardin", category: "Tarihi Yapi",
                image: "https://picsum.photos/seed/mardin/800/400",
                description: "Tas evleri, dar sokaklari ve Mezopotamya ovasina bakan essiz manzarasiyla Mardin, acik hava muzesi gibidir.",
                accommodation: "Mardin'de tarihi tas ev butik oteller populer. Mardin House Otel, Cercis Otel, Kasr-1 Mardin Otel ve Seyr-i Mardin otantik bir konaklama deneyimi sunar."
            }
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
        html += `
            <div class="region-card" onclick="navigate('region', ${index})" style="animation-delay:${index * 0.05}s">
                <div class="region-icon">${r.icon}</div>
                <h3>${r.name} Bolgesi</h3>
                <div class="count">${r.places.length} yer</div>
            </div>`;
    });

    html += '</div>';
    content.innerHTML = html;
}

function renderRegion(index) {
    const region = regions[index];
    if (!region) { navigate('home'); return; }

    let html = `
        <a class="back-link" href="#" onclick="navigate('home')">&larr; Bolgelere don</a>
        <h2 style="font-size:24px;margin-bottom:4px">${region.icon} ${region.name} Bolgesi</h2>
        <p style="color:#718096;margin-bottom:24px">${region.places.length} gezilecek yer</p>`;

    region.places.forEach(p => {
        html += `
            <div class="card card-horiz" onclick="navigate('detail', ${p.id})">
                <img class="card-img" src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="card-body">
                    <h3>${p.name}</h3>
                    <div class="meta">
                        <span>${p.category}</span>
                        ${p.city}
                    </div>
                    <p>${p.description.substring(0, 90)}...</p>
                </div>
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
        <img class="detail-image" src="${p.image}" alt="${p.name}" loading="lazy">
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
        </div>
        <div class="accommodation">
            <h3>🏨 Konaklama Imkanlari</h3>
            <p>${p.accommodation}</p>
        </div>`;
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));
