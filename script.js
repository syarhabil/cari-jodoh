// Elemen input dan tombol
const namaCowokInput = document.getElementById('namaCowok');
const namaCewekInput = document.getElementById('namaCewek');
const genderMale = document.getElementById('genderMale');
const genderFemale = document.getElementById('genderFemale');
const startButton = document.getElementById('startButton');
const resultContainer = document.getElementById('resultContainer');
const slotCowok = document.getElementById('slotCowok');
const slotCewek = document.getElementById('slotCewek');
const resultModal = document.getElementById('resultModal');
const finalResult = document.getElementById('finalResult');
const saran = document.getElementById('saran');
const closeModal = document.getElementById('closeModal');
const namaHabil = ["habil", "abil", "syarhabil", "bibiw", "syarhabil abdussalam", "abiw"];
const namaDea = ["dea", "anum", "dea hanum", "dhanum", "danum", "hanum", "dea harzianum"];

// Daftar nama cowok dan cewek untuk putaran jodoh (200 nama)
const namaCowokList = [
    "Adi", "Adit", "Aqil", "Adrian", "Agung", "Sayyid", "Mulyadi", "Ilham", "Fikri", "Andra", "Ade", "Febri", "Aji", "Alif", "Alvin", "Andi", "Andika", "Angga",
"Ardi", "Arif", "Ari", "Arman", "Arsyad", "Arya", "Azka", "Bagas", "Bambang", "Banu",
"Bara", "Bayu", "Bimo", "Bobby", "Bram", "Cahya", "Candra", "Damar", "Dani", "Danu",
"Darma", "David", "Dede", "Deni", "Derry", "Dhani", "Dian", "Dicky", "Dimas", "Dio",
"Donny", "Dwi", "Edi", "Eka", "Elang", "Elvi", "Emil", "Endra", "Erlangga", "Esa",
"Fadil", "Fahmi", "Faisal", "Farhan", "Fauzi", "Febri", "Ferdy", "Fikri", "Firdaus", "Firman",
"Fitra", "Galang", "Gani", "Gilang", "Gino", "Hadi", "Hafiz", "Halim", "Hamid", "Hanif",
"Hardi", "Harun", "Hasan", "Hendri", "Heru", "Hilman", "Husein", "Ibad", "Ibrahim", "Ilham",
"Ilyas", "Indra", "Iqbal", "Irfan", "Ismail", "Ivan", "Iwan", "Jafar", "Jaka", "Jamal",
"Januar", "Jaya", "Jefri", "Johan", "Kamal", "Kania", "Karyo", "Keenan", "Kevin", "Kharis",
"Kiki", "Lazuardi", "Leo", "Lutfi", "Made", "Maulana", "Nanda", "Naufal", "Nazar", "Neo",
"Niko", "Nova", "Ogi", "Oka", "Omar", "Oni", "Opan", "Panji", "Pasha", "Prabu",
"Pram", "Putra", "Rafi", "Raga", "Raka", "Rama", "Ramdan", "Rangga", "Rega", "Rendi",
"Reza", "Rian", "Ricky", "Ridho", "Rifky", "Rio", "Rizal", "Rizki", "Rizky", "Robi",
"Rudi", "Ryan", "Satria", "Seno", "Sigit", "Sindra", "Sonny", "Sukma", "Syahrul", "Taufik",
"Tio", "Tito", "Tommy", "Tri", "Udhi", "Umar", "Usman", "Valentino", "Vicky", "Wahyu",
"Wawan", "Wibowo", "Widi", "Wika", "Wildan", "Yayan", "Yoga", "Yogi", "Yudha", "Yudi",
"Yusuf", "Zaid", "Zain", "Zaki", "Zidan", "Zikri", "Adam", "Afdal", "Agus", "Aiman",
"Aldy", "Alwan", "Amar", "Ammar", "Anto", "Aryo", "Asep", "Aziz", "Bahrul", "Benny",
"Bintang", "Boni", "Burhan", "Chandra", "Daniel", "Davin", "Dedi", "Defri", "Didik", "Dirga",
"Donny", "Doyok", "Eldo", "Eko", "Elvin", "Eman", "Farid", "Ferdi", "Fikri", "Fino",
"Fitrah", "Fitra", "Galuh", "Garri", "Gilang", "Habib", "Hafizh", "Hafis", "Herman", "Hery",
"Hidayat", "Irfan", "Ivan", "Ibnu", "Irsyad", "Jaka", "Johan", "Jonatan", "Karyo", "Kurnia",
"Latif", "Lukman", "Marwan", "Mukhlis", "Nanda", "Omar", "Pandu", "Rizal", "Sigit", "Taufik",
"Tito", "Utama", "Verdi", "Wildan", "Yuda", "Zainal", "Agus", "Aji", "Andi", "Arya",
"Bayu", "Bima", "Candra", "Dani", "Faisal", "Gilang", "Hendra", "Ilham", "Jaka", "Kevin",
"Lukman", "Miftah", "Naufal", "Pandu", "Putra", "Reza", "Rizky", "Setyo", "Tommy", "Wawan",
"Yuda", "Zain", "Acep", "Arman", "Bahar", "Chandra", "Dirga", "Fahmi", "Gunawan", "Hafid",
"Ilman", "Jaka", "Luthfi", "Maman", "Reza", "Syah", "Wahyu", "Yoga", "Bagus", "Edi",
"Endang", "Hadi", "Irsyad", "Lukman", "Rizal", "Syahrul", "Andi", "Bani", "Candra", "Daffa",
"Fadhil", "Hamzah", "Irfan", "Jaka", "Lukman", "Pandu", "Rizki", "Tomi", "Zaky", "Boby",
"Faiz", "Galang", "Hanafi", "Jamal", "Latif", "Rama", "Taufan", "Zulfi", "Bagas", "Dani",
"Fahri", "Hafiz", "Irfan", "Julius", "Lukman", "Rizky", "Taufik", "Aji", "Beni", "Dika",
"Farid", "Gunawan", "Ilham", "Rizal", "Tommy", "Usman", "Aris", "Fajar", "Indra", "Kenan",
"Surya", "Aziz", "Erlangga", "Hakim", "Anggito", "Rinaldi", "Tirta", "Rijal", "Jefry", "Putra",
"Arga", "Beny", "Ahmad", "Dhika", "Genta", "Raka", "Ubay", "Fajar", "Hendro", "Irfan",
"Tama", "Rudi", "Kevin", "Fikri", "Faiz", "Gilang", "Putra", "Hafid", "Kamil", "Aditya",
"Agra", "Zidan", "Faisal", "Irvan", "Rio", "Ihsan", "Maulana", "Mahendra", "Andre", "Setiawan",
"Tomi", "Raditya", "Indra", "Rizky", "Galang", "Satria", "Andra", "Habibi", "Kevin", "Rizwan",
"Fahmi", "Willy", "Gibran", "Rian", "Roni", "Bagas", "Rendi", "Seto", "Dio", "Fajar",
"Tyo", "Rino", "Hafiz", "Bram", "Vino", "Rifqi", "Fikri", "Raffi", "Arfan", "Zaki",
"Imam", "Alvin", "Satria", "Rangga", "Arjuna", "Yafi", "Iqbal", "Fadil", "Alfian", "Ridwan"
];

const namaCewekList = [
    "Ayu", "Anita", "Aulia", "Caca", "Indah", "Qia", "Fara", "Indah", "Ratu", "Najla", "Salma", "Azizah", "Nisa", "Fitri", "Anisa", "Aldila", "Aisyah", "Almira", "Arini", "Alifa", "Bella",
"Yumna", "Bunga", "Bianca", "Belinda", "Bintang", "Citra", "Clara", "Cindy", "Cinta", "Cika",
"Chintya", "Dewi", "Dina", "Dinda", "Diah", "Diana", "Dwi", "Desi", "Della", "Dania",
"Elisa", "Erika", "Eka", "Elsa", "Evi", "Eva", "Ela", "Erni", "Endah", "Fani",
"Fitri", "Febi", "Farah", "Fira", "Fanny", "Firda", "Fitria", "Febriana", "Fatimah", "Gita",
"Gisel", "Gina", "Grace", "Galuh", "Gisella", "Hana", "Hesti", "Hilda", "Helena", "Hani",
"Halimah", "Hera", "Hasna", "Hanifah", "Indah", "Ika", "Intan", "Iis", "Ira", "Ines",
"Irma", "Isma", "Icha", "Ivana", "Ivy", "Jessica", "Jihan", "Juliana", "Jasmin", "Juni",
"Jelita", "Juwita", "Kania", "Karin", "Kirana", "Kartika", "Kayla", "Keysha", "Karina", "Kirana",
"Lia", "Lina", "Lilis", "Lidya", "Laila", "Lulu", "Lala", "Latifa", "Luna", "Larisa",
"Maya", "Mega", "Mila", "Mira", "Mutiara", "Melinda", "Monica", "Michelle", "Melati", "Maya",
"Nadya", "Nina", "Nina", "Nadia", "Nisa", "Nurul", "Novi", "Novita", "Naila", "Naomi",
"Nadira", "Natasya", "Nadifa", "Nindy", "Nina", "Oli", "Olivia", "Ocha", "Ovi", "Prita",
"Putri", "Puspita", "Pratiwi", "Prilly", "Paramitha", "Poppy", "Patricia", "Qila", "Qory", "Queena",
"Rani", "Rina", "Rika", "Risa", "Rani", "Ratna", "Raisa", "Ririn", "Rika", "Rahma",
"Rani", "Resa", "Rosa", "Rosma", "Rima", "Rina", "Raisa", "Safira", "Sari", "Siska",
"Sari", "Siti", "Sinta", "Silvia", "Salma", "Syifa", "Sarah", "Sinta", "Salsabila", "Selvi",
"Sylvia", "Sabrina", "Suci", "Sania", "Sherly", "Sri", "Suci", "Soraya", "Shinta", "Shafa",
"Tari", "Tika", "Tiara", "Tina", "Talia", "Tasya", "Tantri", "Tri", "Tania", "Tina",
"Ulfah", "Umi", "Ulfa", "Uswatun", "Utami", "Vania", "Vera", "Vita", "Vivi", "Venna",
"Vina", "Viona", "Wina", "Wulan", "Wahyu", "Widya", "Weni", "Windy", "Wahida", "Winda",
"Yani", "Yulia", "Yuliana", "Yessi", "Yola", "Yulia", "Yanti", "Yuni", "Yuli", "Yohana",
"Yunita", "Zahra", "Zaskia", "Zahira", "Zenia", "Zamira", "Zelvia", "Adelia", "Adiva", "Amelia",
"Anjani", "Ami", "Alda", "Alika", "Annisa", "Anindya", "Arum", "Ariana", "Aurel", "Bela",
"Bella", "Betty", "Bimbi", "Cahya", "Cicilia", "Cinta", "Citra", "Dahlia", "Dayu", "Devi",
"Devina", "Diandra", "Dina", "Donna", "Dewi", "Diah", "Elsy", "Elvira", "Esti", "Endang",
"Farida", "Feby", "Felia", "Fitriani", "Fransiska", "Fiona", "Gina", "Gadis", "Grace", "Gresia",
"Hasna", "Hani", "Helmi", "Hani", "Haniyah", "Herlin", "Hilya", "Indri", "Ika", "Inka",
"Isyana", "Indira", "Inten", "Imelda", "Jane", "Jamilah", "Jasmine", "Jelita", "Jovita", "Kartini",
"Kristin", "Kurnia", "Laila", "Leni", "Liana", "Liora", "Lintang", "Livia", "Lutfi", "Madina",
"Maharani", "Meisya", "Meila", "Melina", "Meta", "Mirna", "Nabila", "Novi", "Olivia", "Oni",
"Puput", "Purnama", "Putri", "Rahayu", "Rahmi", "Rani", "Reva", "Renata", "Riska", "Rizka",
"Risty", "Rohana", "Salma", "Salsabila", "Santi", "Sari", "Selena", "Siska", "Sri", "Suci",
"Sukma", "Syifa", "Silvi", "Shabrina", "Tamara", "Tari", "Tasya", "Tina", "Tya", "Tika",
"Ulya", "Utari", "Umi", "Veni", "Vika", "Vivi", "Wenny", "Widya", "Wulan", "Yani",
"Yessi", "Yohana", "Yulia", "Zaneta", "Zara", "Zayana", "Zura", "Adelina", "Aileen", "Aira",
"Amanda", "Andini", "Anggi", "Anjani", "Aninda", "Ariani", "Audrey", "Ayesha", "Aziza", "Bella",
"Bernadette", "Cindy", "Carissa", "Chelsea", "Dara", "Dea", "Delia", "Dewi", "Dika", "Dini",
"Dina", "Diya", "Eliza", "Elva", "Fahira", "Farida", "Felicia", "Febrina", "Frida", "Gracia",
"Gina", "Helena", "Indira", "Inez", "Intan", "Isabella", "Jihan", "Kartika", "Keisha", "Kenanga",
"Kimberly", "Lidya", "Lili", "Linda", "Livia", "Maya", "Mei", "Meliana", "Monica", "Mutia",
"Najwa", "Nadya", "Nessa", "Nia", "Niken", "Nurul", "Prilly", "Putri", "Rachel", "Reina",
"Riana", "Risna", "Sarah", "Sari", "Santi", "Sherina", "Sintya", "Sri", "Tiwi", "Tasya",
"Valentina", "Vira", "Vania", "Winda", "Yasmin", "Yola", "Yulia", "Ziva", "Zeni", "Zaskia",
"Zahira", "Zenia", "Almira", "Amel", "Anis", "Asri", "Bella", "Carla", "Dania", "Dita",
"Fadila", "Fina", "Isma", "Jasmin", "Lani", "Mega", "Nadya", "Niken", "Putri", "Riska"
];

const saranAbsurd = [
    "Coba ajak dia makan nasi goreng pedas, biar kalau kepedesan saling berbagi minum!",
"Kayaknya seru kalau kalian main catur sambil makan es krim, siapa tahu kalah manis!",
"Pas banget buat nge-date sambil main game lawas di arcade!",
"Ajak dia main bulu tangkis, kalah menang yang penting seru!",
"Kalian bisa jalan-jalan sore sambil cari cilok di depan sekolah!",
"Coba deh ajak dia karaoke lagu tahun 90-an, nostalgia bareng kan asyik!",
"Bisa nih kalian duduk di taman sambil ngobrolin kenangan masa kecil!",
"Makan sate ayam bareng di pinggir jalan, bikin obrolan jadi lebih renyah!",
"Kalian cocok banget buat berburu jajanan di festival makanan!",
"Ajak dia ke pasar malam, naik komedi putar dan ketawa bareng!",
"Main tebak-tebakan konyol bareng pasti bikin suasana jadi asik!",
"Coba ajak dia lomba makan kerupuk, dijamin ngakak terus!",
"Seru banget kalau kalian masak bareng, siapa tahu ada resep rahasia yang tercipta!",
"Naik sepeda tandem di taman, biar nggak cuma hati aja yang seirama!",
"Kayaknya seru kalau kalian ngopi bareng sambil nonton stand-up comedy!",
"Kalian cocok banget buat jalan-jalan sambil nyari sunset di pantai!",
"Coba ajak dia buat main layangan di lapangan, nostalgia masa kecil nih!",
"Kalian bisa coba challenge main video game jadul, kalah menang pasti ketawa!",
"Ajak dia ke museum aneh-aneh, pasti obrolan jadi lebih seru!",
"Pas banget buat nonton konser musik indie bareng, biar kenal selera musik masing-masing!",
"Main skateboard di taman bareng, siapa tahu malah makin jago berdua!",
"Coba ajak dia main monopoli, biar bisa diskusi sambil rebutan properti!",
"Kalian bisa banget camping di halaman rumah sambil cerita horor!",
"Makan bakso bareng di depan gang, makin seru kalau rebutan cilok!",
"Ajak dia ke festival film pendek, siapa tahu kalian terinspirasi buat bikin film bareng!",
"Seru banget kalau kalian challenge buat masak resep dari YouTube, biar ada drama dapur!",
"Kalian cocok banget buat jalan-jalan naik angkot, biar ada cerita unik yang tercipta!",
"Pas banget buat keliling toko buku dan diskusi buku favorit masing-masing!",
"Main uno bareng, kalah minum jus kecut, pasti kocak abis!",
"Seru kalau kalian hiking bareng, yang penting bawa snack biar nggak kelaparan!",
"Kalian cocok banget buat main tenis meja di teras rumah, siapa tahu malah jadi atlet dadakan!",
"Coba ajak dia main truth or dare, biar ada yang ketawa malu-malu!",
"Pas banget buat foto-foto aesthetic di jalanan, siapa tahu jadi content creator!",
"Kalian bisa seru-seruan bareng di pasar malam, naik bianglala sambil ketawa!",
"Coba ajak dia buat main perahu dayung di danau, biar romantis tapi tetap seru!",
"Seru kalau kalian main kuis trivia, biar tahu siapa yang lebih pintar (atau lucu)!",
"Pas banget buat nonton film horor, biar bisa pegangan tangan sambil teriak!",
"Kalian bisa coba tantangan main jenga bareng, siapa yang robohin jenga harus traktir makan!",
"Kayaknya seru kalau kalian challenge masak bareng pakai bahan yang ada di kulkas!",
"Ajak dia buat main puzzle raksasa, biar kerjasama makin kuat!",
"Coba ajak dia ke taman bermain anak-anak, siapa tahu kalian nostalgia main jungkat-jungkit!",
"Pas banget buat bikin tantangan TikTok dance bareng, biar viral berdua!",
"Kalian cocok banget buat berpetualang cari bakso enak di pinggiran kota!",
"Ajak dia lomba lari di pantai, yang kalah harus bawa bekal untuk nge-date berikutnya!",
"Coba ajak dia main kartu remi, sambil taruhan makan es krim siapa yang menang!",
"Pas banget buat main di taman hiburan, main wahana seru sambil ketawa lepas!",
"Kalian cocok banget buat bikin vlog masak bareng, siapa tahu jadi chef dadakan!",
"Seru kalau kalian jalan-jalan naik kereta api sambil lihat pemandangan!",
"Ajak dia karaoke lagu-lagu klasik, siapa tahu kalian duet jadi juara!",
"Coba ajak dia buat main bowling, biar ada yang sorakin kalau strike!",
"Kalian bisa ajak dia buat nonton konser jalanan di pinggir kota, vibes-nya pasti asyik!",
"Seru kalau kalian jalan-jalan sore naik becak, sambil ngobrol santai!",
"Coba ajak dia nge-date sambil main paintball, siapa tahu jadi partner in crime!",
"Pas banget buat piknik di taman sambil makan bekal buatan sendiri!",
"Kalian cocok banget buat nonton film outdoor di alun-alun kota, vibes-nya beda!",
"Coba ajak dia buat main golf mini, yang kalah harus traktir es kelapa muda!",
"Seru kalau kalian bikin tantangan buat hunting foto sunset paling keren!",
"Ajak dia naik kapal ferry sambil lihat sunset, biar ada momen romantis tapi tetap seru!",
"Kalian bisa banget jalan-jalan malam sambil nyari street food unik!",
"Pas banget buat main basket bareng, siapa tahu jadi partner di lapangan (dan hati)!",
"Coba ajak dia buat nonton pertunjukan teater di taman kota!",
"Seru kalau kalian bikin tantangan main gim kata-kata sambil makan martabak manis!",
"Pas banget buat coba ice skating bareng, biar saling bantu kalau ada yang jatuh!",
"Coba ajak dia buat main flying fox, pasti adrenalinnya naik bareng-bareng!",
"Seru kalau kalian pergi ke kebun binatang, sambil tebak-tebakan nama hewan!",
"Kalian cocok banget buat bikin challenge foto unik di tempat-tempat anti-mainstream!",
"Ajak dia buat main sepatu roda, siapa tahu ada yang jatuh cinta (dan jatuh beneran)!",
"Pas banget buat jalan-jalan ke taman bunga sambil foto-foto aesthetic!",
"Coba ajak dia ke tempat pemandian air panas, biar relaksasi sambil ngobrol santai!",
"Seru kalau kalian bikin tantangan main futsal bareng, biar ada yang joget kemenangan!",
"Kalian bisa coba main water park bareng, biar ada yang basah-basahan seru!",
"Ajak dia buat nyoba makanan terpedas di kota, biar saling support kalau kepedesan!",
"Pas banget buat jalan-jalan malam sambil nyari kopi di kafe kekinian!",
"Coba ajak dia buat main trampolin, siapa tahu jadi olahragawan dadakan!",
"Seru kalau kalian nonton pertandingan sepak bola bareng, biar ada yang saling sorakin!",
"Kalian bisa coba main kuda lumping di acara budaya lokal, vibes-nya pasti beda!",
"Ajak dia buat bersepeda tandem di pinggir danau, sambil ngobrol santai!",
"Coba ajak dia buat makan di warung kaki lima, obrolan jadi lebih hangat!",
"Seru kalau kalian challenge main truth or dare sambil ngopi, biar ada yang gugup tapi asyik!",
"Kalian cocok banget buat bikin vlog perjalanan singkat di kota, jadi kenangan seru berdua!",
"Ajak dia jalan-jalan sambil hunting street art di sudut-sudut kota!",
"Pas banget buat keliling kota naik skuter, biar seru sambil nikmatin angin sore!",
"Coba ajak dia buat main badminton, biar seru sambil joget kemenangan!",
"Kalian bisa bikin tantangan nyoba makanan aneh-aneh di festival makanan!",
"Seru kalau kalian main petak umpet di taman kota, vibes-nya jadi kayak anak kecil lagi!",
"Pas banget buat main game board di kafe sambil ngobrol santai!",
"Coba ajak dia buat camping di halaman rumah, siapa tahu ada cerita seru di bawah bintang!",
"Seru kalau kalian main game tebak lagu, biar saling tahu selera musik masing-masing!",
"Kalian cocok banget buat bikin challenge foto di tempat paling random!",
"Ajak dia buat masak bareng dengan bahan-bahan murah, biar ada drama dapur yang lucu!",
"Coba ajak dia ke taman hiburan sambil main roller coaster, pasti seru bareng-bareng!",
"Seru kalau kalian jalan-jalan naik perahu bebek di taman, vibes-nya romantis tapi tetap asik!",
"Kalian cocok banget buat bikin tantangan TikTok dance bareng, biar viral berdua!",
];

function resetForm() {
    namaCowokInput.value = ""; // Reset input cowok
    namaCewekInput.value = ""; // Reset input cewek
    resultContainer.style.display = "none"; // Sembunyikan hasil
    slotCowok.textContent = ""; // Kosongkan slot cowok
    slotCewek.textContent = ""; // Kosongkan slot cewek
    resultModal.style.display = "none"; // Sembunyikan modal hasil
    startButton.disabled = true; // Disable tombol mulai
}

// Fungsi untuk memilih cowok atau cewek
genderMale.addEventListener('click', function() {
    resetForm(); // Reset semua ketika memilih gender

    namaCowokInput.disabled = false; // Aktifkan input cowok
    namaCewekInput.disabled = true;  // Disable input cewek
    startButton.disabled = false;    // Aktifkan tombol mulai
});

genderFemale.addEventListener('click', function() {
    resetForm(); // Reset semua ketika memilih gender

    namaCowokInput.disabled = true;  // Disable input cowok
    namaCewekInput.disabled = false; // Aktifkan input cewek
    startButton.disabled = false;    // Aktifkan tombol mulai
});

// Fungsi untuk memulai slot jodoh
// Fungsi untuk memulai slot jodoh
startButton.addEventListener("click", function() {
    let namaPengguna = genderMale.checked ? namaCowokInput.value.toLowerCase() : namaCewekInput.value.toLowerCase();
    let namaPenggunaAsli = genderMale.checked ? namaCowokInput.value : namaCewekInput.value; // Simpan nama asli

    if (namaPengguna === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    resultContainer.style.display = "block";

    let pasanganInterval;

    // Mulai memutar nama pasangan (hanya yang lawan jenis)
    pasanganInterval = setInterval(function() {
        if (genderMale.checked) {
            const randomCewek = namaCewekList[Math.floor(Math.random() * namaCewekList.length)];
            slotCewek.textContent = randomCewek;
            slotCowok.textContent = namaPenggunaAsli; // Nama cowok tetap (dalam bentuk aslinya)
        } else {
            const randomCowok = namaCowokList[Math.floor(Math.random() * namaCowokList.length)];
            slotCowok.textContent = randomCowok;
            slotCewek.textContent = namaPenggunaAsli; // Nama cewek tetap (dalam bentuk aslinya)
        }
    }, 100);

// Hentikan putaran setelah durasi yang ditentukan
setTimeout(function() {
    clearInterval(pasanganInterval);

    let finalCowok, finalCewek;

    // Pengecekan khusus untuk nama yang berhubungan dengan Habil (cowok) dan Dea (cewek)
    if (genderMale.checked && namaHabil.includes(namaPengguna)) {
        finalCowok = namaPenggunaAsli; // Tetap gunakan nama yang diinput
        finalCewek = "Dea";
        slotCowok.textContent = finalCowok;
        slotCewek.textContent = finalCewek;

        // Tampilkan pesan khusus
        resultModal.style.display = "flex";
        finalResult.textContent = `${finalCowok} dan ${finalCewek} adalah pasangan serasi!`;
        saran.textContent = "Wahh kalo ini udah pasti cocok!";
        return;
    } else if (genderFemale.checked && namaDea.includes(namaPengguna)) {
        finalCowok = "Habil";
        finalCewek = namaPenggunaAsli; // Tetap gunakan nama yang diinput
        slotCowok.textContent = finalCowok;
        slotCewek.textContent = finalCewek;

        // Tampilkan pesan khusus
        resultModal.style.display = "flex";
        finalResult.textContent = `${finalCowok} dan ${finalCewek} adalah pasangan serasi!`;
        saran.textContent = "Wahh kalo ini udah pasti cocok!";
        return;
    }

    // Tampilkan hasil akhirnya (pasangan tetap di slot lawan jenis)
    if (genderMale.checked) {
        finalCowok = namaPenggunaAsli; // Nama cowok tetap (dalam bentuk aslinya)
        finalCewek = namaCewekList[Math.floor(Math.random() * namaCewekList.length)];
        slotCowok.textContent = finalCowok;
        slotCewek.textContent = finalCewek;
    } else {
        finalCewek = namaPenggunaAsli; // Nama cewek tetap (dalam bentuk aslinya)
        finalCowok = namaCowokList[Math.floor(Math.random() * namaCowokList.length)];
        slotCowok.textContent = finalCowok;
        slotCewek.textContent = finalCewek;
    }

    // Tampilkan modal hasil jodoh dan saran absurd
    resultModal.style.display = "flex";
    finalResult.textContent = `${finalCowok} dan ${finalCewek} adalah pasangan serasi!`;
    saran.textContent = saranAbsurd[Math.floor(Math.random() * saranAbsurd.length)];

}, 5000); // Durasi putaran 5 detik
});

    
    // Fungsi untuk menutup modal
    closeModal.addEventListener("click", function() {
        resultModal.style.display = "none";
    });
    
    