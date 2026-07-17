const regions = [
    {
        name: "Marmara", icon: "🏛️",
        places: [
            { id: 1, name: "Ayasofya", city: "Istanbul", category: "Tarihi Yapi", image: "https://picsum.photos/seed/ayasofya/800/400", description: "Bizans mimarisinin basyapiti, dunyanin en etkileyici tarihi yapilarindan biri. Ayasofya, Istanbul'un sembolu haline gelmis ve yuzyillar boyunca hem kilise hem cami olarak kullanilmistir.", accommodation: "Sultanahmet bolgesinde cok sayida butik otel ve pansiyon bulunur. En yakin konaklama secenekleri arasinda Sultanahmet Kureli Hotel, Celal Sultan Hotel ve Yesil Ev gibi tarihi oteller yer alir." },
            { id: 2, name: "Topkapi Sarayi", city: "Istanbul", category: "Tarihi Yapi", image: "https://picsum.photos/seed/topkapi/800/400", description: "Osmanli padisahlarinin ikametgahi ve yonetim merkezi. Topkapi Sarayi, 400 yil boyunca Osmanli Imparatorlugu'nun kalbi olmustur.", accommodation: "Saraya en yakin konaklama Sultanahmet ve Sirkeci bolgesindedir. Ibrahim Pasa Hotel, Seven Hills Hotel ve Hagia Sofia Mansions iyi seceneklerdir." },
            { id: 3, name: "Sultanahmet Camii", city: "Istanbul", category: "Tarihi Yapi", image: "https://picsum.photos/seed/sultanahmet/800/400", description: "Mavi Camii olarak da bilinen Sultanahmet Camii, 6 minaresi ve muhtesem ic dekorasyonuyla Istanbul'un en ikonik yapilarindan biridir.", accommodation: "Sultanahmet Meydani cevresi konaklama icin en ideal bolgedir. Arcadia Blue Hotel, Sultanhan Hotel ve Dervish Hotel yakindaki otellerdendir." },
            { id: 4, name: "Yerebatan Sarnici", city: "Istanbul", category: "Tarihi Yapi", image: "https://picsum.photos/seed/yerebatan/800/400", description: "Bizans imparatoru I. Justinianus tarafindan yaptirilan bu yeralti sarnici, 336 sutunu ve Medusa baslariyla unlu bir tarih hazinesidir.", accommodation: "Sultanahmet'teki otellerin cogu Yerebatan Sarnicina yurume mesafesindedir. Basilica Residence ve Antusa Hotel en yakin konaklama noktalarindandir." }
        ]
    },
    {
        name: "Ege", icon: "🌊",
        places: [
            { id: 5, name: "Efes Antik Kenti", city: "Izmir", category: "Arkeoloji", image: "https://picsum.photos/seed/efes/800/400", description: "Roma doneminden kalma iyi korunmus antik kent ve kutuphane. Efes, antik dunyanin en onemli ticaret merkezlerinden biriydi.", accommodation: "Selcuk ilcesinde butik otel ve pansiyonlar mevcuttur. AyaSultan Hotel, Nilya Hotel ve Bella Hotel populer konaklama secenekleridir." },
            { id: 6, name: "Pamukkale", city: "Denizli", category: "Dogal Alan", image: "https://picsum.photos/seed/pamukkale/800/400", description: "Traverten teraslari ve termal sulariyla unlu doga harikasi. Pamukkale'nin beyaz travertenleri ve antik havuzlari her yil milyonlarca turisti agirlamaktadir.", accommodation: "Pamukkale koyunde ve Karahayit bolgesinde termal oteller bulunur. Pamukkale Thermall, Richmond Pamukkale Thermal ve Colossae Thermal Hotel en iyi seceneklerdendir." },
            { id: 7, name: "Alacati", city: "Izmir", category: "Dogal Alan", image: "https://picsum.photos/seed/alacati/800/400", description: "Tas evleri, dar sokaklari ve ruzgar sorfuyle unlu olan Alacati, Ege'nin en guzel sahil kasabalarindan biridir.", accommodation: "Alacati'da tas ev butik oteller cok populer. Alacati Port Hotel, Mayla Alacati Hotel ve Gaia Alacati otantik konaklama deneyimi sunar." },
            { id: 8, name: "Bodrum Kalesi", city: "Mugla", category: "Tarihi Yapi", image: "https://picsum.photos/seed/bodrumkale/800/400", description: "St. Jean Senovalyeleri tarafindan insa edilen Bodrum Kalesi, gunumuzde Su Alti Arkeoloji Muzesi'ne ev sahipligi yapmaktadir.", accommodation: "Bodrum merkezde ve cevresinde her butceye uygun otel bulunur. Marina Vista Hotel, Bodrum Kaya Otel ve Artemis Otel kaleye yakin konaklama noktalaridir." }
        ]
    },
    {
        name: "Ic Anadolu", icon: "🏜️",
        places: [
            { id: 9, name: "Kapadokya", city: "Nevsehir", category: "Dogal Alan", image: "https://picsum.photos/seed/kapadokya/800/400", description: "Peri bacalari ve balon turlariyla unlu essiz bir dogal wonderland. Kapadokya, volkanik tuf tabakalarinin erozyonuyla olusmus buyuleyici bir manzaraya sahiptir.", accommodation: "Kapadokya'da kaya oteller ve magara oteller unlu. Museum Hotel, Argos in Cappadocia, Sultan Cave Suites ve Kelebek Cave Hotel en luks seceneklerdendir." },
            { id: 10, name: "Anitkabir", city: "Ankara", category: "Tarihi Yapi", image: "https://picsum.photos/seed/anitkabir/800/400", description: "Mustafa Kemal Ataturk'un anit mezari. Anitkabir, Ankara'da yukselen bir tepenin uzerinde, gorkemli bir yapidir.", accommodation: "Ankara merkezde Anitkabir'e yakın cok sayida otel vardir. Ankara HiltonSA, Divan Ankara ve The Green Park Ankara en bilinenlerdir." },
            { id: 11, name: "Tuz Golu", city: "Ankara", category: "Dogal Alan", image: "https://picsum.photos/seed/tuzgolu/800/400", description: "Turkiye'nin ikinci buyuk golu olan Tuz Golu, ozellikle yaz aylarinda bembeyaz bir goruntu alarak ziyaretcilerine essiz bir manzara sunar.", accommodation: "Tuz Golu cevresinde sinirli konaklama vardir. Sereflikochisar'da Tuz Hotel ve Ankara sehir merkezindeki oteller en yakin konaklama secenekleridir." }
        ]
    },
    {
        name: "Akdeniz", icon: "🌴",
        places: [
            { id: 12, name: "Olimpos", city: "Antalya", category: "Arkeoloji", image: "https://picsum.photos/seed/olimpos/800/400", description: "Likya doneminden kalma antik kent ve caretta caretta kaplumbagalarinin yumurtladigi sahiliyle unlu bir tatil beldesidir.", accommodation: "Olimpos'ta agac evler unlu bir konaklama deneyimi sunar. Olimpos Lodge, Kadir'in Agac Evleri ve Sait's Place butik ve dogal konaklama imkani saglar." },
            { id: 13, name: "Aspendos", city: "Antalya", category: "Arkeoloji", image: "https://picsum.photos/seed/aspendos/800/400", description: "Antik donemden kalma en iyi korunmus tiyatrolardan biri olan Aspendos, 15.000 kisi kapasiteli muhtesem bir yapidir.", accommodation: "Aspendos'a en yakin konaklama Serik ve Side bolgesindedir. Kaya Aspendos Hotel, Crystal Admiral Resort ve Side otelleri iyi seceneklerdir." },
            { id: 14, name: "Duden Selalesi", city: "Antalya", category: "Dogal Alan", image: "https://picsum.photos/seed/duden/800/400", description: "Antalya sehrinin icinden gecen Duden Cayi'nin denize dokuldugu noktada olusan muhtesem bir selaledir.", accommodation: "Antalya sehir merkezinde Duden Selalesi'ne yakin oteller bulunur. Ramada Plaza Antalya, DoubleTree by Hilton Antalya ve IC Hotels Airport iyi seceneklerdir." }
        ]
    },
    {
        name: "Karadeniz", icon: "🌲",
        places: [
            { id: 15, name: "Uzungol", city: "Trabzon", category: "Dogal Alan", image: "https://picsum.photos/seed/uzungol/800/400", description: "Yesilin her tonunu barindiran doga harikasi Uzungol, yemyeşil daglarla cevrili huzur veren bir gol kenari tatil beldesidir.", accommodation: "Uzungol cevresinde gol manzarali oteller ve butik daireler bulunur. Uzungol Park Hotel, Karadeniz Resort Otel ve Ada Otel en populer konaklama noktalaridir." },
            { id: 16, name: "Sumela Manastiri", city: "Trabzon", category: "Tarihi Yapi", image: "https://picsum.photos/seed/sumela/800/400", description: "Kayalarin oyulmasiyla insa edilen bu tarih manastir, Karadeniz'in en onemli turistik noktalarindan biridir.", accommodation: "Sumela Manastiri'na en yakin konaklama Macka ilcesinde bulunur. Sumela Park Hotel, Macka Senler Otel ve Trabzon sehir merkezindeki oteller tercih edilebilir." },
            { id: 17, name: "Ayder Yaylasi", city: "Rize", category: "Dogal Alan", image: "https://picsum.photos/seed/ayder/800/400", description: "Kaplicalari, yayla evleri ve muhtesem dogasiyla unlu olan Ayder Yaylasi, Karadeniz'in incilerinden biridir.", accommodation: "Ayder Yaylasi'nda dogal ahsap oteller ve kaplica otelleri bulunur. Ayder Otel, Yesil Vadi Otel ve Kardelen Otel termal konaklama imkani sunar." }
        ]
    },
    {
        name: "Dogu Anadolu", icon: "⛰️",
        places: [
            { id: 18, name: "Van Golu", city: "Van", category: "Dogal Alan", image: "https://picsum.photos/seed/vangolu/800/400", description: "Turkiye'nin en buyuk golu olan Van Golu, mavi sulari ve Akdamar Adasi'ndaki tarihi kilisesiyle unlu bir dogal guzelliktir.", accommodation: "Van sehir merkezinde ve Akdamar Adasi cevresinde oteller bulunur. Buyuk Van Hotel, Van Kent Hotel ve Akdamar Otel konaklama icin uygun seceneklerdir." },
            { id: 19, name: "Nemrut Dagi", city: "Adiyaman", category: "Arkeoloji", image: "https://picsum.photos/seed/nemrut/800/400", description: "Kommagene Kralligi'na ait dev heykellerin bulundugu Nemrut Dagi, gun dogumu ve batimi manzarasiyla unlu bir antik alandir.", accommodation: "Nemrut Dagi cevresinde Kahta ilcesinde oteller bulunur. Nemrut Hotel, Euphrat Hotel ve Kahta Hotel konaklama icin uygun noktalardir." },
            { id: 20, name: "Ishak Pasa Sarayi", city: "Agri", category: "Tarihi Yapi", image: "https://picsum.photos/seed/ishakpasa/800/400", description: "Osmanli ve Iran mimarisinin harmanlandigi Ishak Pasa Sarayi, Dogu Anadolu'nun en gorkemli yapilarindan biridir.", accommodation: "Sarayin bulundugu Dogubeyazit ilcesinde Tahran Otel, Dogubeyazit Otel ve Isfahan Otel gibi konaklama secenekleri mevcuttur." }
        ]
    },
    {
        name: "Guneydogu Anadolu", icon: "🏺",
        places: [
            { id: 21, name: "Balikligol", city: "Sanliurfa", category: "Tarihi Yapi", image: "https://picsum.photos/seed/balikligol/800/400", description: "Hz. Ibrahim'in atese atildigi yer olarak bilinen Balikligol, icindeki kutsal baliklari ve cevresindeki tarihi yapilariyla unludur.", accommodation: "Sanliurfa merkezde Balikligol'e yurume mesafesinde oteller bulunur. Edessa Hotel, Harran Hotel ve Hilton Garden Inn Urfa uygun seceneklerdir." },
            { id: 22, name: "Hasankeyf", city: "Batman", category: "Arkeoloji", image: "https://picsum.photos/seed/hasankeyf/800/400", description: "Dicle Nehri kiyisinda binlerce yillik tarihe sahip Hasankeyf, magara evleri ve tarihi koprusuyle essiz bir acik hava muzesidir.", accommodation: "Hasankeyf'te butik oteller ve Batman merkezde konaklama secenekleri bulunur. Hasankeyf Otel ve Batman Otel tercih edilebilir." },
            { id: 23, name: "Mardin", city: "Mardin", category: "Tarihi Yapi", image: "https://picsum.photos/seed/mardin/800/400", description: "Tas evleri, dar sokaklari ve Mezopotamya ovasina bakan essiz manzarasiyla Mardin, acik hava muzesi gibidir.", accommodation: "Mardin'de tarihi tas ev butik oteller populer. Mardin House Otel, Cercis Otel, Kasr-1 Mardin Otel ve Seyr-i Mardin otantik bir konaklama deneyimi sunar." }
        ]
    }
];

const holidays = [
    { id: 101, name: "Oludeniz", city: "Fethiye / Mugla", region: "Ege", image: "https://picsum.photos/seed/oludeniz/800/400", description: "Turkuaz rengi denizi ve belcekiz plajiyla dunyanin en guzel sahillerinden biri.", accommodation: "Oludeniz'de her butceye uygun otel ve pansiyon bulunur." },
    { id: 102, name: "Kemer", city: "Antalya", region: "Akdeniz", image: "https://picsum.photos/seed/kemer/800/400", description: "Toros daglariyla cevrili muhtesem koylari ve plajlariyla unlu bir tatil beldesi.", accommodation: "Kemer'de her seviyede otel mevcuttur." },
    { id: 103, name: "Marmaris", city: "Mugla", region: "Ege", image: "https://picsum.photos/seed/marmaris/800/400", description: "Camlari, marinası ve hareketli gece hayatiyla unlu olan Marmaris.", accommodation: "Marmaris'te her butceye uygun otel vardir." },
    { id: 104, name: "Cesme", city: "Izmir", region: "Ege", image: "https://picsum.photos/seed/cesme/800/400", description: "Turkuaz sahilleri, termal sulari ve ruzgar sorfuyle unlu olan Cesme.", accommodation: "Cesme'de butik oteller ve tatil koyleri bulunur." },
    { id: 105, name: "Side", city: "Antalya", region: "Akdeniz", image: "https://picsum.photos/seed/side/800/400", description: "Antik kent kalintilariyla ic ice olan sahil seridi.", accommodation: "Side'de cok sayida her seviyede otel bulunur." },
    { id: 106, name: "Kusadasi", city: "Izmir / Aydin", region: "Ege", image: "https://picsum.photos/seed/kusadasi/800/400", description: "Turistik canliligi, plajlari ve Efes Antik Kenti'ne yakınligiyla unlu.", accommodation: "Kusadasi'nda lüks oteller ve butik pansiyonlar mevcuttur." },
    { id: 107, name: "Bodrum", city: "Mugla", region: "Ege", image: "https://picsum.photos/seed/bodrum/800/400", description: "Beyaz badanali evleri, lüks marinalari ve turkuaz sahilleriyle gozde tatil noktasi.", accommodation: "Bodrum'da dunyaca unlu oteller bulunur." },
    { id: 108, name: "Alanya", city: "Antalya", region: "Akdeniz", image: "https://picsum.photos/seed/alanya/800/400", description: "Kalesi, Kleopatra plaji ve dogal guzellikleriyle popüler tatil merkezi.", accommodation: "Alanya'da her butceye uygun binlerce otel bulunur." },
    { id: 109, name: "Fethiye", city: "Mugla", region: "Ege", image: "https://picsum.photos/seed/fethiye/800/400", description: "Koylari, ada turlari ve dogal guzellikleriyle ideal tatil noktasi.", accommodation: "Fethiye'de her seviyede konaklama secenegi vardir." },
    { id: 110, name: "Kas", city: "Antalya", region: "Akdeniz", image: "https://picsum.photos/seed/kas/800/400", description: "Sakin atmosferi, dalış noktalari ve butik otelleriyle huzurlu tatil.", accommodation: "Kas'ta butik oteler ve pansiyonlar bulunur." }
];

function getAllPlaces() { return regions.flatMap(r => r.places); }

function getRegionByPlaceId(id) {
    for (const r of regions) for (const p of r.places) if (p.id === id) return r;
    return null;
}

function navigate(view, param) {
    const content = document.getElementById('content');
    content.innerHTML = '<div class="loading">Yukleniyor...</div>';
    if (view === 'home') renderHome();
    else if (view === 'region') renderRegion(param);
    else if (view === 'detail') renderDetail(param);
    else if (view === 'program') renderProgram();
    else if (view === 'support') renderSupport();
}

function renderHome() {
    const content = document.getElementById('content');
    let html = `<div style="text-align:center;margin-bottom:32px"><h2 style="font-size:26px;margin-bottom:8px">Turkiye'nin 7 Bolgesi</h2><p style="color:#718096">Bir bolge secin, gezilecek yerleri kesfedin</p></div><div class="region-grid">`;
    regions.forEach((r, i) => {
        html += `<div class="region-card" onclick="navigate('region',${i})" style="animation-delay:${i*0.05}s"><div class="region-icon">${r.icon}</div><h3>${r.name} Bolgesi</h3><div class="count">${r.places.length} yer</div></div>`;
    });
    html += '</div>';
    content.innerHTML = html;
}

function renderRegion(index) {
    const region = regions[index];
    if (!region) { navigate('home'); return; }
    let html = `<a class="back-link" href="#" onclick="navigate('home')">&larr; Bolgelere don</a><h2 style="font-size:24px;margin-bottom:4px">${region.icon} ${region.name} Bolgesi</h2><p style="color:#718096;margin-bottom:24px">${region.places.length} gezilecek yer</p>`;
    region.places.forEach(p => {
        html += `<div class="card card-horiz" onclick="navigate('detail',${p.id})"><img class="card-img" src="${p.image}" alt="${p.name}" loading="lazy"><div class="card-body"><h3>${p.name}</h3><div class="meta"><span>${p.category}</span> ${p.city}</div><p>${p.description.substring(0,90)}...</p></div></div>`;
    });
    document.getElementById('content').innerHTML = html;
}

function renderDetail(id) {
    const allPlaces = getAllPlaces();
    const p = allPlaces.find(pl => pl.id === id);
    if (!p) { document.getElementById('content').innerHTML = '<h2>Sayfa bulunamadi</h2><a class="back-link" href="#" onclick="navigate(\'home\')">&larr; Ana sayfaya don</a>'; return; }
    const region = getRegionByPlaceId(id);
    const ri = regions.indexOf(region);
    document.getElementById('content').innerHTML = `<a class="back-link" href="#" onclick="navigate('region',${ri})">&larr; ${region.name} Bolgesine don</a><img class="detail-image" src="${p.image}" alt="${p.name}" loading="lazy"><div class="detail-header"><h2>${p.name}</h2><div class="tags"><span>${region.name} Bolgesi</span><span>${p.city}</span><span>${p.category}</span></div></div><div class="detail-body"><p>${p.description}</p></div><div class="accommodation"><h3>&#127977; Konaklama Imkanlari</h3><p>${p.accommodation}</p></div>`;
}

function renderProgram() {
    const content = document.getElementById('content');
    let html = `<a class="back-link" href="#" onclick="navigate('home')">&larr; Ana sayfaya don</a><h2 style="font-size:24px;margin-bottom:4px">&#127796; Tatil Programi - Sahil Yerleri</h2><p style="color:#718096;margin-bottom:24px">Deniz, kum ve gunes tatili icin en guzel sahil beldeleri</p><div class="program-list">`;
    holidays.forEach(p => {
        html += `<div class="day-place" onclick="showHolidayDetail(${p.id})"><img class="day-img" src="${p.image}" alt="${p.name}" loading="lazy"><div class="day-info"><strong>${p.name}</strong><span>${p.city}</span></div></div>`;
    });
    html += '</div>';
    content.innerHTML = html;
}

function showHolidayDetail(id) {
    const p = holidays.find(pl => pl.id === id);
    if (!p) return;
    document.getElementById('content').innerHTML = `<a class="back-link" href="#" onclick="navigate('program')">&larr; Tatil programina don</a><img class="detail-image" src="${p.image}" alt="${p.name}" loading="lazy"><div class="detail-header"><h2>${p.name}</h2><div class="tags"><span>${p.region} Bolgesi</span><span>${p.city}</span></div></div><div class="detail-body"><p>${p.description}</p></div><div class="accommodation"><h3>&#127977; Konaklama Imkanlari</h3><p>${p.accommodation}</p></div>`;
}

const botResponses = [
    { keywords: ["merhaba", "selam", "hey", "iyi gunler"], reply: "Merhaba! Gezgin Rehberi AI asistanina hosgeldin. Sana nasil yardimci olabilirim? Tatil planlamana yardim edeyim." },
    { keywords: ["deniz", "sahil", "plaj", "kum", "tatil", "sahil"], reply: "Sahil tatili icin harika secenekler: Bodrum, Marmaris, Oludeniz, Kemer, Side, Alanya, Cesme, Kusadasi, Kas. Hangisiyle ilgileniyorsun?" },
    { keywords: ["tarih", "tarihi", "arkeoloji", "antik", "muze"], reply: "Tarihi yerler icin Istanbul (Ayasofya, Topkapi), Efes Antik Kenti, Kapadokya, Nemrut Dagi, Mardin, Hasankeyf harika secenekler. Detay istersen bolgelere goz atabilirsin." },
    { keywords: ["kapadokya", "balon", "peri bacasi", "goreme"], reply: "Kapadokya muhtesem bir doga harikasi! Balon turlarina katilabilir, peri bacalarini gezebilir, magara otellerinde kalabilirsin. 2-3 gun ideal." },
    { keywords: ["istanbul", "stanbul"], reply: "Istanbul'da gorulecek cok yer var: Ayasofya, Sultanahmet Camii, Topkapi Sarayi, Yerebatan Sarnici, Galata Kulesi, Kapali Carsi. En az 3-4 gun ayirmalisin." },
    { keywords: ["ege", "efe", "izmir", "kordon"], reply: "Ege Bolgesi'nde Efes Antik Kenti, Pamukkale, Alacati, Bodrum, Cesme, Kusadasi gorulecek yerler arasinda. Ege mutfagi da dillere destandir!" },
    { keywords: ["akdeniz", "antalya"], reply: "Akdeniz'de Antalya, Kemer, Side, Alanya, Kas, Olimpos, Aspendos gorulebilir. Deniz, kum ve tarih bir arada." },
    { keywords: ["karadeniz", "trabzon", "riz", "uzungol", "yayla"], reply: "Karadeniz'de Uzungol, Sumela Manastiri, Ayder Yaylasi ve muhtesem doga sizi bekliyor. Karadeniz mutfagini kesfetmeyi unutma." },
    { keywords: ["dogu", "van", "nemrut", "kars", "ani"], reply: "Dogu Anadolu'da Van Golu, Nemrut Dagi, Ishak Pasa Sarayi, Ani Harabeleri gorulecek yerlerdendir." },
    { keywords: ["guneydogu", "mardin", "urfa", "diyarbakir", "gaziantep", "baklava"], reply: "Guneydogu'da Mardin tas evleri, Balikligol, Hasankeyf, Gaziantep baklavasi ve mutfagiyla unlu." },
    { keywords: ["konaklama", "otel", "kal", "nerede kal", "pansiyon"], reply: "Her bolgede konaklama secenekleri var. Butik oteller, termal oteller, magara oteller, her butceye uygun. Hangi bolgeyle ilgileniyorsun?" },
    { keywords: ["nasilsin", "naber", "iyi misin"], reply: "Ben iyiyim, sana yardim etmek icin buradayim! Tatil planin var mi?" },
    { keywords: ["tesekkur", "saol", "eyvallah", "sagol"], reply: "Rica ederim! Baska bir konuda yardimci olabilir miyim?" },
    { keywords: ["ne onerirsin", "oner", "tavsiye", "ner", "gez", "gor"], reply: "Turkiye'nin her bolgesi ayri guzel. Ilk kez gideceksen Istanbul, Kapadokya ve Ege sahillerini oneririm. Ne tur bir tatil istiyorsun?" },
    { keywords: ["ucuz", "ekonomik", "butce", "hesap"], reply: "Ekonomik tatil icin Karadeniz yaylalari, ic Anadolu sehirleri veya Ege'nin kucuk kasabalari guzel secenekler. Kamp ve pansiyon konaklamasi da butce dostudur." },
    { keywords: ["lüks", "luks", "otel", "5 yildiz", "hersey dahil"], reply: "Luks tatil icin Bodrum, Antalya Kemer, Marmaris'teki 5 yildizli ve hersey dahil oteller harika secenekler." },
    { keywords: ["yemek", "yemek", "restoran", "ne yenir", "meşhur"], reply: "Her bolgenin kendine has lezzetleri var! Ege'de otlu peynir, Karadeniz'de hamsi, Guneydogu'da kebap ve baklava, Ic Anadolu'da mantı." },
    { keywords: ["ulasim", "git", "ucak", "otobus", "araba", "yol"], reply: "Turkiye'de sehirlerarasi ulasim kolay. Hava yollari, otobus, araba kiralama secenekleri mevcut. Buyuk sehirlere ucakla, kucuk yerlere otobusle gidebilirsin." },
    { keywords: ["hava", "durumu", "iklim", "mevsim"], reply: "Turkiye'de tatil icin en ideal zaman bolgeye gore degisir. Ege ve Akdeniz icin mayis-ekim, Karadeniz icin mayis-eylul, Kapadokya icin nisan-kasim aylari onerilir." }
];

function getBotReply(msg) {
    const lower = msg.toLowerCase().trim();
    let best = null, bestLen = 0;
    for (const item of botResponses) {
        for (const kw of item.keywords) {
            if (lower.includes(kw) && kw.length > bestLen) {
                best = item;
                bestLen = kw.length;
            }
        }
    }
    if (best) return best.reply;
    const rastgele = ["Anlamadim, biraz daha acik yazar misin? Deniz tatili, tarih, konaklama veya belirli bir sehir hakkinda soru sorabilirsin.", "Tam anlayamadim. Ornegin 'Deniz tatili onerir misin?' veya 'Istanbul'da ne yapilir?' seklinde sorabilirsin.", "Ne tur bir tatil dusunuyorsun? Deniz, tarih, doga, yemek veya kultur? Biraz daha ipucu verirsen sana en iyi oneriyi yapayim."];
    return rastgele[Math.floor(Math.random() * rastgele.length)];
}

function renderSupport() {
    document.getElementById('content').innerHTML = `
        <h2 style="font-size:24px;margin-bottom:4px">&#129302; Destek - AI Tatil Asistani</h2>
        <p style="color:#718096;margin-bottom:20px">Tatil planlamana yardimci olayim. Bana soru sor!</p>
        <div class="chat-container" id="chatContainer">
            <div class="chat-msg bot">Merhaba! Ben Gezgin Rehberi AI asistaniyim. Tatil planlamana yardimci olabilirim. Deniz tatili, tarihi yerler, konaklama veya belirli bir bolge hakkinda soru sorabilirsin.</div>
        </div>
        <div class="chat-input-wrap">
            <input class="chat-input" id="chatInput" placeholder="Mesajini yaz..." onkeydown="if(event.key==='Enter') sendMessage()">
            <button class="chat-send" onclick="sendMessage()">Gonder</button>
        </div>`;
    setTimeout(() => { const el = document.getElementById('chatInput'); if (el) el.focus(); }, 100);
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    const container = document.getElementById('chatContainer');
    container.innerHTML += `<div class="chat-msg user">${msg}</div>`;
    input.value = '';
    container.scrollTop = container.scrollHeight;
    setTimeout(() => {
        const reply = getBotReply(msg);
        container.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
        container.scrollTop = container.scrollHeight;
    }, 300 + Math.random() * 500);
}

document.addEventListener('DOMContentLoaded', () => navigate('home'));
