const regions = [
    {
        name: "Marmara", icon: "&#128205;",
        places: [
            { id: 1, name: "Ayasofya", city: "Istanbul", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Hagia_Sophia_Mars_2013.jpg", description: "Bizans Imparatoru I. Justinianus tarafindan MS 537 yilinda insa edilen Ayasofya, dunyanin en eski ve en buyuk katedrallerinden biridir. 1000 yil boyunca dunyanin en genis kapali mekani olma unvanini korumustur. 1453'te Fatih Sultan Mehmet tarafindan camiye cevrilmis, 1935'te muze, 2020'de tekrar cami olarak acilmistir. Icesindeki devasa kubbe (31 metre capinda), altin mozaikler ve Bizans freskleri hayranlik uyandirir. Istanbul'a gelen herkesin mutlaka gormesi gereken bir basyapittir.", accommodation: "Sultanahmet bolgesinde cok sayida butik otel ve pansiyon bulunur. En yakin konaklama secenekleri arasinda Sultanahmet Kureli Hotel, Celal Sultan Hotel ve Yesil Ev gibi tarihi oteller yer alir." },
            { id: 2, name: "Topkapi Sarayi", city: "Istanbul", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Topkapi_Palace_Seen_From_Harem.JPG", description: "Fatih Sultan Mehmet tarafindan 1478 yilinda insa edilen Topkapi Sarayi, 400 yil boyunca Osmanli Imparatorlugu'nun yonetim merkezi ve padisahlarin resmi ikametgahi olmustur. 700.000 metrekarelik bir alana yayilan saray, mutfaklar, hazine dairesi, kutsal emanetler, harem ve cesitli kosklerden olusur. Saraydaki me�hur Kasikci Elmasi ve Topkapi Hanceri gibi essiz eserler sergilenir. Harem bolumu Osmanli padisah ailesinin ozel yasamina dair buyuleyici detaylar sunar.", accommodation: "Saraya en yakin konaklama Sultanahmet ve Sirkeci bolgesindedir. Ibrahim Pasa Hotel, Seven Hills Hotel ve Hagia Sofia Mansions iyi seceneklerdir." },
            { id: 3, name: "Sultanahmet Camii", city: "Istanbul", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sultan_Ahmed_Mosque_in_Istanbul.jpg", description: "Mimar Sedefkar Mehmet Aga tarafindan 1609-1616 yillari arasinda Sultan I. Ahmed adina insa edilen Sultanahmet Camii, 6 minaresiyle Istanbul'un sembol yapilarindandir. Icesindeki 20.000'den fazla el yapimi Iznik cini ve mavi, yesil, beyaz agirlikli desenleri nedeniyle Bati'da 'Mavi Camii' olarak anilir. Ana kubbe 43 metre yuksekliginde ve 23.5 metre capindadir. Avlusu, sebil ve medresesiyle klasik Osmanli mimarisinin en guzel orneklerinden biridir. Ayrica ibadete acik olan ender tarihi camilerdendir.", accommodation: "Sultanahmet Meydani cevresi konaklama icin en ideal bolgedir. Arcadia Blue Hotel, Sultanhan Hotel ve Dervish Hotel yakindaki otellerdendir." },
            { id: 4, name: "Yerebatan Sarnici", city: "Istanbul", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/1/13/The_Basilica_Cistern_Yerebatan_Sarnici%2C_Istanbul%2C_Turkey_%289603495227%29.jpg", description: "Bizans Imparatoru I. Justinianus tarafindan 542 yilinda yaptirilan Yerebatan Sarnici, Istanbul'un en buyuk kapali sarnicidir. 336 sutun (9-10 metre yuksekliginde) tarafindan tasinan tavan, 80.000 metrekup su depolama kapasitesine sahiptir. Sarnicin en dikkat cekici ozelligi, iki sutunun altinda bulunan tersten duran Medusa baslaridir. Medusa baslarindan birinin yan, digerinin ters durmasi, Roma doneminden kalma bir gizemdir. Nemli ve lo$ isikli atmosferi, yankilanan su sesiyle ziyaretcilere buyuleyici bir deneyim sunar.", accommodation: "Sultanahmet'teki otellerin cogu Yerebatan Sarnicina yurume mesafesindedir. Basilica Residence ve Antusa Hotel en yakin konaklama noktalarindandir." }
        ]
    },
    {
        name: "Ege", icon: "&#127748;",
        places: [
            { id: 5, name: "Efes Antik Kenti", city: "Izmir", category: "Arkeoloji", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ephesus_%28Efes%29_Antik_Kenti.jpg", description: "Antik dunyanin en onemli metropollerinden biri olan Efes, Roma Imparatorlugu doneminde 250.000 kisilik nufusuyla Anadolu'nun en buyuk kentiydi. Artemis Tapinagi (dunyanin 7 harikasindan biri), Celcus Kutuphanesi (etik katli 12.000 parca eser), 25.000 kisilik tiyatro ve Hadrian Tapinagi gibi anitlariyla unlu. Erken Hristiyanlik doneminde Meryem Ana'nin son yillarini gecirdigi yer olarak da bilinir. 2015'ten beri UNESCO Dunya Mirasi Listesi'ndedir.", accommodation: "Selcuk ilcesinde butik otel ve pansiyonlar mevcuttur. AyaSultan Hotel, Nilya Hotel ve Bella Hotel populer konaklama secenekleridir." },
            { id: 6, name: "Pamukkale", city: "Denizli", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Pamukkale_30.jpg", description: "Dogal bir harika olan Pamukkale, sicakliklari 35-36°C arasinda degisen termal kaynak sularinin binlerce yil boyunca biraktigi kalsiyum karbonat birikintileriyle olusmus beyaz traverten teraslarindan olusur. Yuksekligi 100 metre, uzunlugu 2.5 kilometredir. Antik donemde Hieropolis kenti de burada kurulmustur. Antik havuzda (Kleopatra Havuzu) suyun icinde 2000 yillik sutun parcalari arasinda yuzmek mumkundur. Travertenlerde giysileriniz cikartarak yaln ayak yuruyebilir, essiz fotograflar cekebilirsiniz. UNESCO Dunya Mirasi ve Dogal Sit alanidir.", accommodation: "Pamukkale koyunde ve Karahayit bolgesinde termal oteller bulunur. Pamukkale Thermall, Richmond Pamukkale Thermal ve Colossae Thermal Hotel en iyi seceneklerdendir." },
            { id: 7, name: "Alacati", city: "Izmir", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cesme_-_Alacati_Marina_-_panoramio.jpg", description: "Ege'nin en gozde tatil kasabalarindan biri olan Alacati, dar arnavut kaldirimli sokaklari, rengarenk begonvil cicekleriyle suslu tas evleri ve butik otelleriyle unlu. Ruzgar sorfu icin dunyanin en iyi 10 noktasindan biri olarak kabul edilir. Ozellikle Temmuz ayinda duzenlenen Alacati Ot Festivali, bozcaada saraplari ve yoresel Ege mutfagiyla da gastronomi tutkunlari icin bir cazibe merkezidir. Hafta sonu kurtarmasi bile yapilabilir. Ilica Plaji ve Pazaryeri de gorulmeye degerdir.", accommodation: "Alacati'da tas ev butik oteller cok populer. Alacati Port Hotel, Mayla Alacati Hotel ve Gaia Alacati otantik konaklama deneyimi sunar." },
            { id: 8, name: "Bodrum Kalesi", city: "Mugla", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/TurkeyBodrumCastle.jpg", description: "St. Jean Senovalyeleri (Hospitalier Sovalyeleri) tarafindan 1402-1522 yillari arasinda insa edilen Bodrum Kalesi, doneminin en saglam askeri yapilarindan biridir. 5 ayrı kuleden olusan kale, gunumuzde Dunyanin en buyuk Su Alti Arkeoloji Muzesi'ne ev sahipligi yapmaktadir. Muzede, batik gemilerden cikarilan eserler, cam objeler, sikkeler ve buyuleyici 'Cam Batigi' sergilenir. Kaleden Bodrum limaninin ve marinannin muhtesem panoramik manzarasi izlenebilir. Antik donemde Dunyanin 7 Harikasindan biri olan Mausoleum'un taslari kale duvarlarinda kullanilmistir.", accommodation: "Bodrum merkezde ve cevresinde her butceye uygun otel bulunur. Marina Vista Hotel, Bodrum Kaya Otel ve Artemis Otel kaleye yakin konaklama noktalaridir." }
        ]
    },
    {
        name: "Ic Anadolu", icon: "&#127956;",
        places: [
            { id: 9, name: "Kapadokya", city: "Nevsehir", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Fairy_Chimneys%2C_Nev%C5%9Fehir_Province%2C_Turkey.JPG", description: "Milyonlarca yil once Erciyes, Hasandagi ve Golludag'in patlamasiyla olusan volkanik kul tabakasinin ruzgar ve yagmurla asindirilmasi sonucu olusan peri bacalariyla unlu Kapadokya, adeta bir acik hava muzesidir. Yeralti sehirleri (Derinkuyu, Kaymakli 8 katli), kayalara oyulmus kiliseler (Goreme Acik Hava Muzesi'ndeki 11. yuzyil freskli kiliseler) ve tarihi Uchisar Kalesi'nin zirvesinden tum vadi izlenebilir. Gun dogumunda balon turlariyla peribacalarinin uzerinde ucma deneyimi dunyada essizdir. Avanos'ta seramik atolyeleri ve Urgup'te sarap tadimi da populer aktivitelerdir.", accommodation: "Kapadokya'da kaya oteller ve magara oteller unlu. Museum Hotel, Argos in Cappadocia, Sultan Cave Suites ve Kelebek Cave Hotel en luks seceneklerdendir." },
            { id: 10, name: "Anitkabir", city: "Ankara", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Anitkabir_Mausoleum_Ataturk.JPG", description: "Turkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Ataturk'un anit mezari olan Anitkabir, Ankara'nin Rasattepe semtinde 750.000 metrekarelik bir alan uzerine kurulmustur. Mimarlari Emin Onat ve Orhan Arda'nin dizayn ettigi yapi, 1944-1953 yillari arasinda insa edilmistir. Aslanli Yol (262 metre, 24 aslan heykeli), Toren Meydani ve Mozole'den olusan komplekste Ataturk'un kullandigi esyalarin sergilendigi bir muze de bulunur. Anitkabir'de Kurtulus Savasi'ni anlatan panoramik kabartmalar, kuleler ve 40 tonluk mermer lahdin bulundugu seremonik salon ziyaretcileri etkiler.", accommodation: "Ankara merkezde Anitkabir'e yakin cok sayida otel vardir. Ankara HiltonSA, Divan Ankara ve The Green Park Ankara en bilinenlerdir." },
            { id: 11, name: "Tuz Golu", city: "Ankara", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Tuz_G%C3%B6l%C3%BC1.JPG", description: "Turkiye'nin ikinci buyuk golu olan Tuz Golu, Ankara, Konya ve Aksaray sinirlari icinde yer alir. Yaz aylarinda tamamen kuruyarak bembeyaz bir tuz c�lu goruntusu alir ve ucak pisti gibi duzlesir. Burada yu elmas gunes isiginda inanilmaz fotograflar cekebilirsiniz. Turkiye'nin tuz ihtiyacinin %70'ini karsilar. Goreme ve Ihlara Vadisi'ne yakin olmasi sayesinde Kapadokya turuyla birlestirilebilir. Ozellikle gun batiminda pembe ve turuncu tonlarina burunen tuz yuzeyi izlenmeye degerdir.", accommodation: "Tuz Golu cevresinde sinirli konaklama vardir. Sereflikochisar'da Tuz Hotel ve Ankara sehir merkezindeki oteller en yakin konaklama secenekleridir." }
        ]
    },
    {
        name: "Akdeniz", icon: "&#127796;",
        places: [
            { id: 12, name: "Olimpos", city: "Antalya", category: "Arkeoloji", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Olympos_Antik_Kenti.jpg", description: "Likya Birligi'nin en onemli 6 sehrinden biri olan Olimpos, MO 2. yuzyilda kurulmustur. Antik kent, iki yani agacliklar ve akarsuyla kapli bir vadi boyunca uzanarak denize ulasir. Caretta caretta deniz kaplumbagalarinin yumurtlama alani olan sahili, bircok turistin ilgi oda�idir. Antik tiyatro, hamam, tapinak kalintilari ve Roma lahitleri gorulebilir. Olimpos'un hemen yanindaki Yanartas (Chimaera), binlerce yildir dogal gazin kayalardan alev olarak cikmasiyla unlu bir doga olayidir. Gece ates basinda kamp ve dogal ortamda konaklama da populer.", accommodation: "Olimpos'ta agac evler unlu bir konaklama deneyimi sunar. Olimpos Lodge, Kadir'in Agac Evleri ve Sait's Place butik ve dogal konaklama imkani saglar." },
            { id: 13, name: "Aspendos", city: "Antalya", category: "Arkeoloji", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Theatre_Aspendos.jpg", description: "Roma Imparatoru Marcus Aurelius doneminde (MS 2. yuzyil) insa edilen Aspendos Tiyatrosu, antik dunyanin en iyi korunmus tiyatrosudur. Mimar Zenon tarafindan tasarlanan yapi, 15.000 kisi kapasitelidir ve akustigi oyle muhtesemdir ki en ust siradan bile sahne f�silttisi duyulabilir. Tiyatro, gunumuzde hâlâ konser ve festivallerde kullanilmaktadir. Aspendos'ta ayrica bir akropol, su kemerleri, stadyum ve bazilika kalintilari da bulunur. Her yil duzenlenen Aspendos Uluslararasi Opera ve Bale Festivali, bu essiz mekanda sanatseverleri bulusturur.", accommodation: "Aspendos'a en yakin konaklama Serik ve Side bolgesindedir. Kaya Aspendos Hotel, Crystal Admiral Resort ve Side otelleri iyi seceneklerdir." },
            { id: 14, name: "Duden Selalesi", city: "Antalya", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Lower_Duden_Falls.jpg", description: "Antalya'nin simgelerinden biri olan Duden Selalesi, iki ayri noktada izlenebilir: Yukari Duden ve Asagi Duden. Yukari Duden, sehir merkezine 10 km uzaklikta bir park icinde yer alir ve akarsuyun basamak seklinde dokulmesiyle olusur. Asagi Duden ise sehrin icinden gecen Duden Cayi'nin 40 metre yukseklikten Akdeniz'e dokulmesiyle olusur ve ozellikle gunesli havalarda cikan gokkusagiyla nefes kesici bir goruntu sunar. Cevresindeki kafe ve restoranlarda serinlemek, selale sesi esliginde cay icmek oldukca keyiflidir.", accommodation: "Antalya sehir merkezinde Duden Selalesi'ne yakin oteller bulunur. Ramada Plaza Antalya, DoubleTree by Hilton Antalya ve IC Hotels Airport iyi seceneklerdir." }
        ]
    },
    {
        name: "Karadeniz", icon: "&#127811;",
        places: [
            { id: 15, name: "Uzungol", city: "Trabzon", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Uzung%C3%B6l_lake_and_town.jpg", description: "Trabzon'un Caykara ilcesinde, deniz seviyesinden 1.100 metre yukseklikte yer alan Uzungol, dogal bir heyelan sonucu olusmus bir gol ve cevresindeki yesilliklerle kapli daglarin muhtesem uyumunu sunar. 1990 yilinda tabiat parki ilan edilmistir. Gol cevresinde yuruyus, at binme, yoresel Karadeniz yemekleri (h�msi, muhlama, kara lahana) ve doga fotografciligi en populer aktivitelerdir. Dumanli dag goruntuleri ve gol uzerinde s�z�len kuslar huzur veren bir atmosfer yaratir. Ozellikle sonbahar ve ilkbahar aylarinda renk c�mbusu yasanir.", accommodation: "Uzungol cevresinde gol manzarali oteller ve butik daireler bulunur. Uzungol Park Hotel, Karadeniz Resort Otel ve Ada Otel en populer konaklama noktalaridir." },
            { id: 16, name: "Sumela Manastiri", city: "Trabzon", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Sumela_From_Across_Valley.JPG", description: "Karadeniz'in en etkileyici tarihi yapilarindan biri olan Sumela Manastiri (Meryem Ana Manastiri), Trabzon'un Macka ilcesinde, Zigana Dagi'nin 300 metre dik kayaligin uzerine insa edilmistir. MO 386 yilinda iki rahip tarafindan kuruldu�una inanilir. 18 katli yapi, ana kaya kilisesi, oda, mutfak, kutuphane, kutsal su kaynagi ve muhtesem fresklerle kaplidir. Manastirin duvarlarindaki Hristiyanlik temali freskler (12. ve 19. yuzyil) buyuk sanat degeri tasir. Manastira ulasmak icin yemye�il bir orman icinde yaklasik 30 dakika yurumek gerekir, bu da deneyimi daha da ozel kilar.", accommodation: "Sumela Manastiri'na en yakin konaklama Macka ilcesinde bulunur. Sumela Park Hotel, Macka Senler Otel ve Trabzon sehir merkezindeki oteller tercih edilebilir." },
            { id: 17, name: "Ayder Yaylasi", city: "Rize", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ayder_Yaylasi_%40_Rize-Turkey.JPG", description: "Rize'nin Camlihemsin ilcesinde, denizden 1.350 metre yukseklikte yer alan Ayder Yaylasi, Karadeniz'in en populer yaylasi ve termal turizm merkezidir. Yaylanin kaplicasi romatizma, cilt ve solunum yolu hastaliklarina iyi geldigi icin subat ayinda yogun talep gorur. Ahsap yayla evleri, dumanli dag manzarasi, dogal akarsu sesi ve yemyesil doga insana huzur verir. Yoresel Karadeniz mutfagi (h�msi tava, muhlama, kara lahana) ve doga yuruyusleri icin idealdir. Yaz aylarinda serinlemek, kis aylarinda kar turizmi yapmak mumkundur.", accommodation: "Ayder Yaylasi'nda dogal ahsap oteller ve kaplica otelleri bulunur. Ayder Otel, Yesil Vadi Otel ve Kardelen Otel termal konaklama imkani sunar." }
        ]
    },
    {
        name: "Dogu Anadolu", icon: "&#9968;&#65039;",
        places: [
            { id: 18, name: "Van Golu", city: "Van", category: "Dogal Alan", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lake_Van_and_Akdamar_Island.jpg", description: "Turkiye'nin en buyuk golu olan Van Golu (3.713 km�), ayni zamanda dunyanin en buyuk sodali golu (tuzlu su) unvanina sahiptir. Van Golu'nun en dikkat cekici noktasi, Akdamar Adasi'ndaki 10. yuzyilda insa edilen Akdamar Kilisesi'dir (Surp Hac Kilisesi). Ermeni Krali I. Gagik doneminde mimar Manuel tarafindan yapilan kilise, dis cephesindeki Incil'den sahneleri betimleyen kabartmalarla unlu. Van'da ayrica Van Kedisi, Van kahvaltisi (mehur Van otlu peynir, kavut, cacik) ve tarih� Urartu kalintilari (Toprakkale, Hosap Kalesi) gorulebilir. G�lde tekne turu yapmak da keyiflidir.", accommodation: "Van sehir merkezinde ve Akdamar Adasi cevresinde oteller bulunur. Buyuk Van Hotel, Van Kent Hotel ve Akdamar Otel konaklama icin uygun seceneklerdir." },
            { id: 19, name: "Nemrut Dagi", city: "Adiyaman", category: "Arkeoloji", image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/ADIYAMAN_NEMRUT_DA%C4%9EI.jpg", description: "Kommagene Kralligi Krali I. Antiochos tarafindan MO 62 yilinda yaptirilan Nemrut Dagi, 2.150 metre yuksekligindeki bir tepenin uzerinde bulunan dev heykeller ve tumulus (mezar yigini) ile unludur. Dogu ve Bati teraslarinda 8-10 metre boyundaki tanri ve kral heykelleri (Zeus, Apollon, Herk�l, Fortuna ve Antiochos'un kendisi) siralanmistir. Gun dogumu ve gun batimi izlemek icin en populer noktadir - oyle ki ziyaretciler sabah 04:00'te t�rmanmaya baslar. 1987'den beri UNESCO Dunya Mirasi Listesi'ndedir. Heykellerin baslari yere sacilmis haldedir, bu da alani daha da gizemli kilar.", accommodation: "Nemrut Dagi cevresinde Kahta ilcesinde oteller bulunur. Nemrut Hotel, Euphrat Hotel ve Kahta Hotel konaklama icin uygun noktalardir." },
            { id: 20, name: "Ishak Pasa Sarayi", city: "Agri", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ishak_Pasha_Palace.jpg", description: "Dogubeyazit ilcesinde, 1.600 metre yukseklikte bir tepenin uzerine kurulu Ishak Pasa Sarayi, Osmanli, Selcuklu, Barok ve Islem mimarisinin essiz bir karisimini sergiler. Yapimina 1685 yilinda Colak Abdi Pasa tarafindan baslanmis, 1784 yilinda Ishak Pasa II doneminde tamamlanmistir. 116 odali ve 7 katli olan saray, harem, selamlik, cami, kutuphane, mutfak, zindan ve hamam gibi bolumlerden olusur. Sarayin icindeki ve disindaki tas islemeler, ozellikle portaller ve pencere cevresindeki kabartmalar hayranlik uyandirir. Dogu'nun Topkapi'si olarak anilir. Agri Dagi'nin muhtesem manzarasi esliginde sarayi gezmek essizdir.", accommodation: "Sarayin bulundugu Dogubeyazit ilcesinde Tahran Otel, Dogubeyazit Otel ve Isfahan Otel gibi konaklama secenekleri mevcuttur." }
        ]
    },
    {
        name: "Guneydogu Anadolu", icon: "&#127760;",
        places: [
            { id: 21, name: "Balikligol", city: "Sanliurfa", category: "Tarihi Yapi", image: "https://images.pexels.com/photos/17708588/pexels-photo-17708588.jpeg", description: "Sanliurfa sehrinin merkezinde bulunan Balikligol, Islam inancina gore Hz. Ibrahim'in Nemrut tarafindan atese atildigi ve atesin suya, odunlarin da baliga donustugu yerdir. Gol, icindeki kutsal kabul edilen sazan baliklariyla unludur - bu baliklar yenilmez ve saygiyla yaklasilir. Balikligol Kulliyesi, Hz. Ibrahim'in dogdugu ma�ara, Rizvaniye Camii, Halil-ur Rahman Camii ve Ayn-i Zeliha Golu'nden olusan genis bir komplekstir. Golun cevresindeki tarihi yapilar ve huzur veren atmosfer, ziyaretcileri derinden etkiler. Sanliurfa mutfagi (ci� kofte, lahmacun, baklava) da gorulmeye deger.", accommodation: "Sanliurfa merkezde Balikligol'e yurume mesafesinde oteller bulunur. Edessa Hotel, Harran Hotel ve Hilton Garden Inn Urfa uygun seceneklerdir." },
            { id: 22, name: "Hasankeyf", city: "Batman", category: "Arkeoloji", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Hasankeyf.JPG", description: "Dicle Nehri kiyisinda kurulu Hasankeyf, 12.000 yillik kesintisiz yerlesim tarihine sahip olup dunyanin en eski yerlesim yerlerinden biridir. Ilisu Baraji'nin sular� altinda kalmis olsa da, tarihi koprusu, Artuklu Sarayi, Buyuk Kilise, Kizlar Camii ve kayalara oyulmus magara evleri hâlâ gorulebilir. Hasankeyf acik hava muzesi niteliginde olup, kaya mezarlari ve tunel sistemleriyle de dikkat ceker. Dicle Nehri uzerinde tekne turlarina katilabilir, nehir kenarinda cay bahcelerinde dinlenebilirsiniz. Tarihi tas isciligi ve sutun baslari buyuk sanat degeri tasir.", accommodation: "Hasankeyf'te butik oteller ve Batman merkezde konaklama secenekleri bulunur. Hasankeyf Otel ve Batman Otel tercih edilebilir." },
            { id: 23, name: "Mardin", city: "Mardin", category: "Tarihi Yapi", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/View_from_Mardin_to_the_Mesopotamian_plains.jpg", description: "Mezopotamya ovasina tepeden bakan Mardin, eski tas evleri, dar sokaklari ve essiz mimarisiyle acik hava muzesi gibidir. Sehirdeki en onemli yapilar: Deyrulzafaran Manastiri (5. yuzyil, Suryani Ortodoks Kilisesi'nin merkezi), Mardin Kalesi, Ulu Camii, Kasimiye Medresesi (astronomi ve matematik egitimi verilen tarih� okul) ve Zinciriye Medresesi'dir. Mardin'in dar sokaklarinda yururken her kosede Mezopotamya ovasinin nefes kesici manzarasi, tarih� carsi ve g�m�s atolyeleri karsiniza cikar. Mardin mutfagi (sem�se, kili�e, kaburga dolmasi) ve telkari g�m�s isciligi de unludur.", accommodation: "Mardin'de tarihi tas ev butik oteller populer. Mardin House Otel, Cercis Otel, Kasr-1 Mardin Otel ve Seyr-i Mardin otantik bir konaklama deneyimi sunar." }
        ]
    }
];

const holidays = [
    { id: 101, name: "Oludeniz", city: "Fethiye / Mugla", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Oludeniz_%E2%80%93_Blue_lagoon.jpg", description: "Dunyanin en cok fotografi cekilen plajlarindan biri olan Oludeniz, turkuaz rengi denizi ve Belcekiz Plaji ile unlu. Oludeniz'de yama� parasutu (paragliding) dunyanin en iyi noktalarindan biri olarak kabul edilir. Babadag'dan (1.960 metre) atlayarak muhtesem manzara esliginde süz�lebilirsiniz. Oludeniz Tabiat Parki koruma altindadir ve kiyilari boyunca sedir agaclariyla kaplidir.", accommodation: "Oludeniz'de her butceye uygun otel ve pansiyon bulunur. En populer yerler Oludeniz merkezdeki butik oteller ve Hisaronu bolgesindeki tatil k�yleridir." },
    { id: 102, name: "Kemer", city: "Antalya", region: "Akdeniz", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Kemer_beach%2C_Antalya.jpg", description: "Toros Daglarinin eteklerine kurulu Kemer, bir tarafta Akdeniz, diger tarafta cam ormanlariyla cevrilidir. Olympos Teleferigi ile Tahtali Dagi'na (2.365 metre) cikarak kus bakisi manzara izlenebilir. Phaselis Antik Kenti ve Yanartas (Chimaera) Kemer sinirlari icindedir. Kemer'in plajlari, koyleri, su sporlari ve canli gece hayati tatilciler icin ideal.", accommodation: "Kemer'de her seviyede otel mevcuttur. Luks hersey dahil tatil k�ylerinden butik otellere kadar genis secenek vardir." },
    { id: 103, name: "Marmaris", city: "Mugla", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Marmaris%2C_Turkey._Photo_2021.jpg", description: "Cam ormanlariyla kapli yemye�il tepelerin eteginde uzanan Marmaris, hareketli marinas�, l�ks yat limani ve canli gece hayatiyla unlu. Marmaris Kalesi ve cevresindeki tarih� carsi k�lt�rel bir mola sunar. Dalyan Kanali'nda caretta caretta kaplumbagalari ve mud banyosu, Datca ve Bozburun yarimadalarina gunubirlik tekneler populer aktivitelerdir.", accommodation: "Marmaris'te her butceye uygun otel vardir. Icmeler koyu, Armutalan ve Siteler bolgeleri en populer konaklama noktalari." },
    { id: 104, name: "Cesme", city: "Izmir", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/%C3%87e%C5%9Fme_Strand.jpg", description: "Cesme, turkuaz sahilleri ve termal sulariyla Ege'nin incisidir. Ala�ati ruzgar sorfu, Ilica Plaji ise termal kumlariyla unlu. Cesme Kalesi'nde Arkeoloji Muzesi, Erythrai Antik Kenti, Sifne ve Sakiz adalarina feribot seferleri mevcuttur. Cesme'nin dar sokaklarinda gezerken sakizli dondurma ve kumru yemeyi unutmayin.", accommodation: "Cesme'de butik oteller ve tatil k�yleri bulunur. Ilica, Ala�ati ve merkez en populer konaklama bolgeleridir." },
    { id: 105, name: "Side", city: "Antalya", region: "Akdeniz", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Roman_Amphitheatre%2C_Side%2C_Turkey.jpg", description: "Antik kent kalintilariyla ic ice olan Side, deniz, kum ve tarihi bir arada sunar. 15.000 kisilik Side Tiyatrosu, Apollon Tapinagi (gun batimi manzarasi unlu), Side Muzesi ve antik liman gorulecek yerlerdendir. Side'nin dar sokaklarinda bir yanda tarih, diger yanda turkuaz deniz size eslik eder.", accommodation: "Side'de cok sayida her seviyede otel bulunur. Kumkoy, Colyakli ve Sorgun bolgeleri en populer konaklama noktalari." },
    { id: 106, name: "Kusadasi", city: "Izmir / Aydin", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Kusadasi.jpg", description: "Efes Antik Kenti'ne sadece 20 km uzakliktaki Kusadasi, buyuk yolcu gemilerinin yanastigi limani ve hareketli carsisina denir. Kadinlar Denizi Plaji, Guvercin Adasi (kale restoran), Dilek Yarimadasi Milli Parki (yaban domuzlari, doga yuruyusleri) ve S�ke'deki Miletos Antik Kenti gorulebilir.", accommodation: "Kusadasi'nda luks oteller ve butik pansiyonlar mevcuttur. Halk Plaji, Kadinlar Denizi ve merkez en populer bolgelerdir." },
    { id: 107, name: "Bodrum", city: "Mugla", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bodrum%2C_Mu%C4%9Fla_Province%2C_Turkey_-_panoramio_%2844%29.jpg", description: "Beyaz badanali evleri, luks marinalari ve turkuaz sahilleriyle Bodrum, Turkiye'nin en prestijli tatil noktalarindandir. Bodrum Kalesi ve Su Alti Muzesi, Antik Tiyatro, Myndos Kapisi, Gumusluk, Turkevleri, Yalikavak, Torba ve Bitez gibi her biri ayri guzellikte koylari vardir. Gece hayati, dunyaca unlu kul�p ve barlariyla unludur.", accommodation: "Bodrum'da dunyaca unlu oteller bulunur. Luks tatil k�ylerinden butik otellere kadar her zevke ve butceye uygun konaklama mevcuttur." },
    { id: 108, name: "Alanya", city: "Antalya", region: "Akdeniz", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Alanya_Panorama_edit.jpg", description: "Alanya Kalesi (Selcuklu donemi, 13. yuzyil) sehre tepeden bakan en ikonik yapidir. Kleopatra Plaji, Damlatas Magarasi (astim hastalarina iyi gelen mikro iklim), Dim Cayi kenarinda y�resel restoranlar ve Sapadere Kanyonu doga severler icin ideal. Alanya'nin uzun sahil serisi, su sporlari ve dal� aktiviteleri ile de unludur.", accommodation: "Alanya'da her butceye uygun binlerce otel bulunur. En populer bolgeler Kleopatra Plaji, Keykubat Plaji ve Mahmutlar'dir." },
    { id: 109, name: "Fethiye", city: "Mugla", region: "Ege", image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Fethiye_harbour_%281092663484%29.jpg", description: "Fethiye, muhtesem koylari, ada turlari ve dogal guzellikleriyle ideal bir tatil noktasidir. Antik Likya Kenti Telmessos'un kalintilari sehir merkezinde gorulebilir. �ludeniz, Kelebekler Vadisi, Saklikent Kanyonu ve Kabuk Koyu en populer noktalardir. Likya Yolu yuruy�s rotasi Fethiye'den baslar ve 540 km boyunca Antalya'ya kadar uzanir.", accommodation: "Fethiye'de her seviyede konaklama secenegi vardir. Hisaronu, Calis Plaji ve Ovacik en populer konaklama bolgeleridir." },
    { id: 110, name: "Kas", city: "Antalya", region: "Akdeniz", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Ka%C5%9F%2C_Patara_Antik_Kenti_Park%C4%B1.jpg", description: "Sakin atmosferi, butik otelleri ve dal� noktalariyla Kas, huzurlu bir tatil arayanlar icin idealdir. Antik Likya tiyatrosu, Hellenistik donemden kalma kaya mezarlari, Patara Plaji (12 km uzunlugunda) ve Kaputas Plaji (merdivenle inilen minik koy) gorulecek yerlerdir. Dal�, snorkel ve tekne turlari populer oldugu kadar, Kas'ta Akdeniz mutfagi da deneyimlenebilir.", accommodation: "Kas'ta butik oteller ve pansiyonlar bulunur. Merkezdeki tas ev oteller ve liman cevresindeki pansiyonlar en populer konaklama noktalaridir." }
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
    { keywords: ["ne onerirsin", "oner", "tavsiye", "nere", "gez", "gor"], reply: "Turkiye'nin her bolgesi ayri guzel. Ilk kez gideceksen Istanbul, Kapadokya ve Ege sahillerini oneririm. Ne tur bir tatil istiyorsun?" },
    { keywords: ["ucuz", "ekonomik", "butce", "hesap"], reply: "Ekonomik tatil icin Karadeniz yaylalari, ic Anadolu sehirleri veya Ege'nin kucuk kasabalari guzel secenekler. Kamp ve pansiyon konaklamasi da butce dostudur." },
    { keywords: ["luks", "luks", "otel", "5 yildiz", "hersey dahil"], reply: "Luks tatil icin Bodrum, Antalya Kemer, Marmaris'teki 5 yildizli ve hersey dahil oteller harika secenekler." },
    { keywords: ["yemek", "yemek", "restoran", "ne yenir", "meshur"], reply: "Her bolgenin kendine has lezzetleri var! Ege'de otlu peynir, Karadeniz'de hamsi, Guneydogu'da kebap ve baklava, Ic Anadolu'da manti." },
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
