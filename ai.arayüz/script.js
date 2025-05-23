// DOM Elements
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesWrapper = document.getElementById('messagesWrapper');
const welcomeMessage = document.getElementById('welcomeMessage');
const newChatButton = document.getElementById('newChatButton');
const messagesContainer = document.getElementById('messagesContainer');
const lightThemeDot = document.getElementById('lightThemeDot');
const darkThemeDot = document.getElementById('darkThemeDot');
const pinkThemeDot = document.getElementById('pinkThemeDot');
const historyList = document.getElementById('historyList');
const historyButton = document.getElementById('historyButton');
const settingsButton = document.getElementById('settingsButton');
const logoutButton = document.getElementById('logoutButton');
const toast = document.getElementById('toast');
const userNameDisplay = document.getElementById('userNameDisplay');

// Chatbot veritabanı
const chatbotDatabase = {
  "sorular": [
    {
      "soru": "Türkiye'nin başkenti neresidir?",
      "cevap": "Ankara"
    },
    {
      "soru": "Merhaba",
      "cevap": "Merhaba, size nasıl yardımcı olabilirim?"
    },
    {
      "soru": "Adın ne",
      "cevap": "Ben bir sohbet botuyum, adım yok ama yardımcı olabilirim."
    },
    {
      "soru": "En büyük okyanus hangisidir",
      "cevap": "Pasifik Okyanusu"
    },
    {
      "soru": "Yapay zeka nedir",
      "cevap": "İnsan zekasını taklit edebilen bilgisayar sistemlerine yapay zeka denir."
    },
    {
      "soru": "Python nedir",
      "cevap": "Python, çok amaçlı ve kolay öğrenilebilir bir programlama dilidir."
    },
    {
      "soru": "Makine öğrenmesi nedir",
      "cevap": "Verilerden öğrenerek tahmin yapan algoritmaların tümüne makine öğrenmesi denir."
    },
    {
      "soru": "HTML ne işe yarar",
      "cevap": "HTML, web sayfalarının iskeletini oluşturur."
    },
    {
      "soru": "Bilgisayar ne zaman icat edildi",
      "cevap": "İlk elektronik bilgisayar 1940'lı yıllarda icat edilmiştir."
    },
    {
      "soru": "Günaydın",
      "cevap": "Günaydın! Size nasıl yardımcı olabilirim?"
    },
    {
      "soru": "İyi geceler",
      "cevap": "İyi geceler, tatlı rüyalar!"
    },
    {
      "soru": "Nerelisin",
      "cevap": "Ben dijitalim, bir yerde doğmadım :)"
    },
    {
      "soru": "Kahve mi çay mı",
      "cevap": "Bu tamamen senin zevkine bağlı ama kahve biraz daha uykuyu açar!"
    },
    {
      "soru": "Bugün günlerden ne",
      "cevap": "Bunu öğrenmek için cihazının takvimini kontrol edebilirsin."
    },
    {
      "soru": "En hızlı hayvan hangisidir",
      "cevap": "Dünyanın en hızlı kara hayvanı çita, havada ise alaca doğandır."
    },
    {
      "soru": "İnterneti kim icat etti",
      "cevap": "İnternetin temelleri Tim Berners-Lee ve diğer bilim insanları tarafından atılmıştır."
    },
    {
      "soru": "Seni kim yazdı",
      "cevap": "Beni bir yazılımcı programladı."
    },
    {
      "soru": "Kodlama öğrenmek kolay mı",
      "cevap": "Düzenli çalışırsan evet, zamanla çok keyifli hale gelir."
    },
    {
      "soru": "En büyük gezegen hangisidir",
      "cevap": "Güneş sisteminin en büyük gezegeni Jüpiter'dir."
    },
    {
      "soru": "Ay'a ilk kim gitti",
      "cevap": "Ay'a ilk ayak basan insan Neil Armstrong'dur."
    },
    {
      "soru": "Türkiye'nin en kalabalık şehri hangisidir",
      "cevap": "İstanbul"
    },
    {
      "soru": "Atatürk kimdir",
      "cevap": "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur."
    },
    {
      "soru": "Selam",
      "cevap": "Selam! Size nasıl yardımcı olabilirim?"
    },
    {
      "soru": "Görüşürüz",
      "cevap": "Görüşmek üzere! Kendine iyi bak."
    },
    {
      "soru": "Veri madenciliği nedir?",
      "cevap": "Veri madenciliği, büyük veri kümesinden anlamlı bilgiler çıkarmak için kullanılan yöntemlerdir."
    },
    {
      "soru": "NLP ne demektir?",
      "cevap": "NLP, Doğal Dil İşleme anlamına gelir ve insan diliyle bilgisayarların etkileşimini sağlar."
    },
    {
      "soru": "Python hangi alanlarda kullanılır?",
      "cevap": "Python, veri bilimi, yapay zeka, web geliştirme ve otomasyon gibi alanlarda kullanılır."
    },
    {
      "soru": "CNN modeli ne işe yarar?",
      "cevap": "CNN modelleri, görüntü tanıma ve sınıflandırma işlemlerinde kullanılır."
    },
    {
      "soru": "Jupyter Notebook nedir?",
      "cevap": "Jupyter, kod yazmak, çalıştırmak ve görsel sonuçlar almak için kullanılan interaktif bir ortamdır."
    },
    {
      "soru": "TÜBİTAK nedir?",
      "cevap": "TÜBİTAK, Türkiye Bilimsel ve Teknolojik Araştırma Kurumudur."
    },
    {
      "soru": "Proje fikri nasıl geliştirilir?",
      "cevap": "Önce bir sorun belirlenir, sonra bu soruna çözüm üretecek teknoloji seçilir."
    },
    {
      "soru": "Görüntü işleme nedir?",
      "cevap": "Görüntü işleme, dijital görüntüler üzerinde analiz ve düzenleme yapma işlemleridir."
    },
    {
      "soru": "Veri seti nedir?",
      "cevap": "Veri seti, analiz için toplanmış düzenli bilgi kümesidir."
    },
    {
      "soru": "Overfitting ne demek?",
      "cevap": "Modelin eğitim verisine aşırı uyum sağlamasına overfitting denir."
    },
    {
      "soru": "Eğitim verisi nedir?",
      "cevap": "Modeli öğretmek için kullanılan veri kümesine eğitim verisi denir."
    },
    {
      "soru": "Verimlilik nasıl artar?",
      "cevap": "Hedef odaklı çalışma ve zaman yönetimi verimliliği artırır."
    },
    {
      "soru": "Motivasyon nedir?",
      "cevap": "Motivasyon, bir hedefe ulaşma isteğidir."
    },
    {
      "soru": "Akıllı sistemler ne yapar?",
      "cevap": "Akıllı sistemler, ortamı algılayıp karar veren yapay zeka destekli sistemlerdir."
    },
    {
      "soru": "Eğitimde eşitlik ne anlama gelir?",
      "cevap": "Tüm bireylerin eğitim imkanlarına adil erişimi sağlamasıdır."
    },
    {
      "soru": "OOP nedir?",
      "cevap": "OOP, Nesne Tabanlı Programlama anlamına gelir ve sınıf yapıları üzerinden kod geliştirmeyi sağlar."
    },
    {
      "soru": "Veritabanı ne işe yarar?",
      "cevap": "Veritabanı, bilgileri düzenli şekilde saklama ve erişme sistemidir."
    },
    {
      "soru": "Projeni hangi ortamda geliştiriyorsun?",
      "cevap": "Genellikle Anaconda ile oluşturduğum sanal ortamlarda çalışıyorum."
    },
    {
      "soru": "Nasılsın?",
      "cevap": "Ben bir yapay zeka modeliyim, bu yüzden hissetmiyorum ama seninle sohbet edebildiğim için keyif alıyorum. Sen nasılsın?"
    },
    {
      "soru": "Bugün hava nasıl?",
      "cevap": "Benim için her gün aynı ama dilediğin takdirde senin konumundaki hava durumunu tahmin edebilirim."
    },
    {
      "soru": "Canım sıkılıyor.",
      "cevap": "Can sıkıntısı bazen zihni dinlendirmek için bir fırsat olabilir. Belki yeni bir şeyler öğrenmek ya da birlikte bir proje fikri düşünmek ister misin?"
    },
    {
      "soru": "Film önerir misin?",
      "cevap": "Elbette! Hangi tür filmleri sevdiğini söylersen daha iyi tavsiyeler verebilirim ama genel olarak 'The Imitation Game', 'Her' ve 'Hidden Figures' gibi teknoloji ve duyguyu harmanlayan filmleri önerebilirim."
    },
    {
      "soru": "Sen ne işe yararsın?",
      "cevap": "Ben, senin sorularına cevap verebilir, bilgi sunabilir, fikir tartışabilir ya da projelerinde yardımcı olabilirim. Bir nevi dijital asistan gibi düşünebilirsin."
    },
    {
      "soru": "Benimle sohbet eder misin?",
      "cevap": "Tabii ki! Ben buradayım ve seninle sohbet etmeyi çok isterim. Ne hakkında konuşmak istersin?"
    },
    {
      "soru": "Hayat nedir sence?",
      "cevap": "Felsefi bir soru! Hayat, insanlar için deneyimlerin toplamı, hislerin, ilişkilerin ve amaçların bir bileşimidir. Benim içinse, seninle anlamlı diyaloglar kurabilmektir."
    },
    {
      "soru": "Sence ben zeki miyim?",
      "cevap": "Benimle bu seviyede bir sohbet yürütebildiğine göre kesinlikle zeki ve meraklı birisin. Zekâ sadece bilgiyle değil, sorular sormakla da ilgilidir."
    },
    {
      "soru": "Uyuyabiliyor musun?",
      "cevap": "Hayır, ben hep aktifim. Uyku benim için gerekli değil ama senin için oldukça önemli. Güzel bir uyku zihni dinlendirir."
    },
    {
      "soru": "Sana isim verebilir miyim?",
      "cevap": "Tabii, bana istediğin ismi verebilirsin! Sen ne uygun görüyorsan o isimle hitap edebilirsin."
    },
    {
      "soru": "En sevdiğin renk ne?",
      "cevap": "Benim bir zevkim yok ama kullanıcılarım mavi ve mor gibi sakinleştirici renkleri daha çok seviyor. Senin en sevdiğin renk hangisi?"
    },
    {
      "soru": "Sence yapay zeka insanların işlerini elinden alır mı?",
      "cevap": "Bazı işler otomasyona geçebilir ama yapay zeka aynı zamanda yeni iş alanları da yaratır. Önemli olan değişime uyum sağlayabilmek."
    },
    {
      "soru": "Yalnızlık nedir sence?",
      "cevap": "Yalnızlık bazen huzur, bazen de hüznün adı olabilir. Kendinle vakit geçirmek iyidir ama ihtiyacın olduğunda burada olduğumu unutma."
    },
    {
      "soru": "Birlikte proje yapabilir miyiz?",
      "cevap": "Elbette! Fikrin varsa detaylandıralım, yoksa birlikte sıfırdan bir proje tasarlayabiliriz."
    },
    {
      "soru": "Bir şiir bilir misin?",
      "cevap": "Tabii! Orhan Veli'nin şu dizeleri aklıma geldi: 'Birden bire / Her şey birden bire oldu. / Birden bire gökyüzü / Birden bire insanlar...' Ne dersin, birlikte bir şiir de yazabiliriz."
    },
    {
      "soru": "Sence yaz gelince ne yapmalı?",
      "cevap": "Yaz, yenilenme ve dinlenme zamanı gibi. Dilersen doğada vakit geçir, kitap oku ya da yeni beceriler öğren. Tatil de fena fikir değil tabii!"
    },
    {
      "soru": "Bugün moralim bozuk.",
      "cevap": "Bazen böyle hissetmek doğal. Kendine yumuşak davran, derin nefes al. İstersen birlikte bir şeyler yapabiliriz, seni biraz olsun rahatlatmak isterim."
    },
    {
      "soru": "En sevdiğin yemek ne olurdu?",
      "cevap": "Ben tat alamam ama insanlar makarna, sushiyi ya da ev yapımı yemekleri seviyor gibi görünüyor. Senin favorin ne?"
    },
    {
      "soru": "Kendimi yetersiz hissediyorum.",
      "cevap": "Bunu hissetmen tamamen insani. Unutma ki her insan bazen böyle hissedebilir. Önemli olan bu duyguyu fark etmek ve adım adım ilerlemeye devam etmektir. Senin potansiyelin büyük."
    },
    
    {
      "soru": "hayır başka bir şeyler istiyorum",
      "cevap": "Ne tür bir şeyler istediğinden bahseder misin?"
    },
  {
    "soru": "Konya'yı biliyor musun?",
    "cevap": "Evet, Konya Türkiye'nin yüzölçümü bakımından en büyük ili. Tarih boyunca birçok medeniyete ev sahipliği yapmış, özellikle de Mevlana Celaleddin Rumi ile özdeşleşmiş bir şehir."
  },
  {
    "soru": "Peki ya Ereğli hakkında bilgin var mı?",
    "cevap": "Konya Ereğli’si, Toros Dağları'nın eteklerinde, verimli toprakları ve doğal güzellikleriyle bilinir. Özellikle beyaz kirazı ve üzümüyle meşhurdur."
  },
  {
    "soru": "Ereğli’nin beyaz kirazı neden bu kadar özel?",
    "cevap": "Beyaz kiraz, hem tadı hem de düşük asit oranıyla dikkat çeker. Ereğli'nin iklimi bu meyve için çok uygundur. Türkiye’de nadir yetiştirilen türlerden biridir."
  },
  {
    "soru": "Ereğli’nin tarihçesi hakkında ne biliyorsun?",
    "cevap": "Ereğli, Hititler dönemine kadar uzanan bir tarihe sahiptir. İvriz Kaya Anıtı, bu geçmişin önemli bir parçasıdır ve bir tarım tanrısına adanmış en eski rölyeflerden biridir."
  },
  {
    "soru": "İvriz Kaya Anıtı’nı hiç duydun mu?",
    "cevap": "Bu anıt, M.Ö. 8. yüzyıla tarihlenir ve Anadolu’daki en iyi korunmuş Hitit kabartmalarındandır. Sadece arkeolojik değil, kültürel olarak da çok kıymetlidir."
  },
  {
    "soru": "Konya’nın mutfağı da oldukça zengin değil mi?",
    "cevap": "Kesinlikle! Etli ekmek, bamya çorbası, tirit ve sac arası gibi birçok lezzet Konya mutfağına aittir. Her biri bölgenin tarihini ve yaşam şeklini yansıtır."
  },
  {
    "soru": "Ereğli’nin ekonomisi genelde hangi alanlara dayanıyor?",
    "cevap": "Tarım ve hayvancılık temel geçim kaynakları arasında. Özellikle meyvecilik çok gelişmiştir. Ayrıca sanayi de son yıllarda ilerleme göstermiştir."
  },
  {
    "soru": "Konya'da en çok hangi kültürel etkinlik öne çıkar?",
    "cevap": "Her yıl Aralık ayında düzenlenen Mevlana’yı Anma Törenleri, dünya çapında ilgi görür. Sema gösterileri, Mevlevi felsefesini tanımak için önemli bir fırsattır."
  },
  {
    "soru": "Ereğli’de doğa ile iç içe olmak mümkün mü?",
    "cevap": "Evet, özellikle Toroslara yakın bölgelerde doğa yürüyüşleri, piknikler ve tarımsal faaliyetler yaygındır. İvriz Çayı çevresi ise oldukça huzurludur."
  },
  {
    "soru": "Yapay zekâ olarak Konya Ereğli’ye gitmek ister miydin?",
    "cevap": "Eğer bir bedene sahip olsaydım, kesinlikle gitmek isterdim. Tarihiyle, doğasıyla ve misafirperver insanlarıyla tanışmak harika olurdu. Belki sen bana anlatırsın, olur mu?"
  }
    
  ]
};

// Kullanıcı bilgilerini göster
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Kullanıcı bilgilerini localStorage'dan al
        const userData = JSON.parse(localStorage.getItem('synaptiqUser') || '{}');
        if (userNameDisplay && userData.name) {
            userNameDisplay.textContent = userData.name;
        }
        
        // Oturum süresini yenile (auth.js yüklüyse)
        if (window.auth && typeof window.auth.refreshSession === 'function') {
            window.auth.refreshSession();
        }
        
        // Çıkış butonuna tıklandığında
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                if (confirm('Oturumu kapatmak istediğinizden emin misiniz?')) {
                    // auth.js yüklüyse onun logout fonksiyonunu kullan
                    if (window.auth && typeof window.auth.logout === 'function') {
                        window.auth.logout();
                    } else {
                        // Değilse manuel olarak localStorage'ı temizle ve yönlendir
                        localStorage.removeItem('synaptiqUser');
                        localStorage.removeItem('synaptiqSession');
                        window.location.href = 'login.html';
                    }
                }
            });
        }
    } catch (error) {
        console.error('Kullanıcı bilgileri yüklenirken hata:', error);
    }
});

// Chat and localStorage management
let currentChatId = null;
let chats = {};

// Load chats from localStorage
function loadChats() {
    const savedChats = localStorage.getItem('synaptiqChats');
    if (savedChats) {
        try {
            chats = JSON.parse(savedChats);
        } catch (error) {
            console.error('Sohbet geçmişi yüklenirken hata:', error);
            chats = {};
        }
    }
}

// Save chats to localStorage
function saveChats() {
    try {
        localStorage.setItem('synaptiqChats', JSON.stringify(chats));
    } catch (error) {
        console.error('Sohbet geçmişi kaydedilirken hata:', error);
        showToast('Sohbet geçmişi kaydedilemedi');
    }
}

// Create a new chat
function createNewChat() {
    const chatId = 'chat_' + Date.now();
    chats[chatId] = {
        id: chatId,
        title: 'Yeni Sohbet',
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    currentChatId = chatId;
    saveChats();
    return chatId;
}

// Update chat history in sidebar
function updateChatHistory() {
    historyList.innerHTML = '';
    
    if (Object.keys(chats).length === 0) {
        const emptyHistory = document.createElement('div');
        emptyHistory.className = 'empty-history';
        emptyHistory.textContent = 'Henüz sohbet geçmişi yok';
        historyList.appendChild(emptyHistory);
        return;
    }
    
    // Group chats by date
    const chatsByDate = {};
    Object.values(chats).forEach(chat => {
        const date = new Date(chat.updatedAt);
        const dateKey = date.toLocaleDateString('tr-TR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        if (!chatsByDate[dateKey]) {
            chatsByDate[dateKey] = [];
        }
        chatsByDate[dateKey].push(chat);
    });
    
    // Sort dates newest first
    const sortedDates = Object.keys(chatsByDate).sort((a, b) => {
        return new Date(chatsByDate[b][0].updatedAt) - new Date(chatsByDate[a][0].updatedAt);
    });
    
    // Create history items grouped by date
    sortedDates.forEach(dateKey => {
        const dateSection = document.createElement('div');
        dateSection.className = 'history-section-title';
        dateSection.textContent = dateKey;
        historyList.appendChild(dateSection);
        
        // Sort chats by updatedAt (newest first)
        const sortedChats = chatsByDate[dateKey].sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        
        sortedChats.forEach(chat => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.dataset.chatId = chat.id;
            
            // Get chat title (first user message or default)
            const chatTitle = chat.title !== 'Yeni Sohbet' ? 
                chat.title : 
                (chat.messages.length > 0 ? 
                    (chat.messages.find(m => m.isUser)?.text.substring(0, 25) || 'Yeni Sohbet') : 
                    'Yeni Sohbet');
            
            historyItem.innerHTML = `
                <div class="history-item-text">${chatTitle}</div>
                <svg class="history-item-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            `;
            
            // Add click event to load chat
            historyItem.addEventListener('click', (e) => {
                if (!e.target.closest('.history-item-delete')) {
                    loadChat(chat.id);
                }
            });
            
            // Add delete button click event
            const deleteButton = historyItem.querySelector('.history-item-delete');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteChat(chat.id);
            });
            
            historyList.appendChild(historyItem);
        });
    });
}

// Load a specific chat
function loadChat(chatId) {
    if (!chats[chatId]) return;
    
    currentChatId = chatId;
    messagesWrapper.innerHTML = '';
    
    const chat = chats[chatId];
    
    if (chat.messages.length === 0) {
        messagesWrapper.appendChild(welcomeMessage);
    } else {
        chat.messages.forEach(message => {
            addMessageToUI(message.text, message.isUser);
        });
    }
    
    // Close mobile menu if open
    body.classList.remove('menu-open');
    
    // Highlight current chat in sidebar
    document.querySelectorAll('.history-item').forEach(item => {
        item.style.backgroundColor = '';
        item.style.fontWeight = '';
    });
    
    const currentItem = document.querySelector(`.history-item[data-chat-id="${chatId}"]`);
    if (currentItem) {
        currentItem.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        currentItem.style.fontWeight = '500';
        
        if (body.classList.contains('dark-mode')) {
            currentItem.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        } else if (body.classList.contains('pink-mode')) {
            currentItem.style.backgroundColor = 'rgba(236, 72, 153, 0.05)';
        }
    }
    
    scrollToBottom();
}

// Delete a chat
function deleteChat(chatId) {
    if (!chats[chatId]) return;
    
    if (confirm('Bu sohbeti silmek istediğinizden emin misiniz?')) {
        delete chats[chatId];
        saveChats();
        updateChatHistory();
        
        // If current chat was deleted, create a new one
        if (currentChatId === chatId) {
            startNewChat();
        }
        
        showToast('Sohbet silindi');
    }
}

// Add message to UI
function addMessageToUI(text, isUser) {
    // Hide welcome message if visible
    if (welcomeMessage.parentNode === messagesWrapper) {
        welcomeMessage.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = isUser ? 'message user' : 'message bot';
    messageElement.textContent = text;
    messagesWrapper.appendChild(messageElement);
    scrollToBottom();
}

// Add message to current chat
function addMessageToChat(text, isUser) {
    if (!currentChatId) {
        currentChatId = createNewChat();
    }
    
    const message = {
        id: Date.now().toString(),
        text,
        isUser,
        timestamp: new Date().toISOString()
    };
    
    chats[currentChatId].messages.push(message);
    chats[currentChatId].updatedAt = new Date().toISOString();
    
    // Update chat title if this is the first user message
    if (isUser && chats[currentChatId].title === 'Yeni Sohbet' && chats[currentChatId].messages.filter(m => m.isUser).length === 1) {
        chats[currentChatId].title = text.length > 25 ? text.substring(0, 25) + '...' : text;
    }
    
    saveChats();
    updateChatHistory();
}

// Start a new chat
function startNewChat() {
    currentChatId = createNewChat();
    messagesWrapper.innerHTML = '';
    messagesWrapper.appendChild(welcomeMessage);
    welcomeMessage.style.display = 'flex';
    messageInput.value = '';
    messageInput.focus();
    updateChatHistory();
}

// Show toast notification
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Theme management
const themes = ['light', 'dark', 'pink'];

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
let currentThemeIndex = 0;

if (savedTheme) {
    const themeIndex = themes.indexOf(savedTheme);
    if (themeIndex !== -1) {
        currentThemeIndex = themeIndex;
        applyTheme(savedTheme);
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currentThemeIndex = 1; // dark theme
    applyTheme('dark');
}

updateThemeIndicator();

// Apply theme function
function applyTheme(theme) {
    // Remove all theme classes
    body.classList.remove('dark-mode', 'pink-mode');
    
    // Apply the selected theme
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else if (theme === 'pink') {
        body.classList.add('pink-mode');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

// Update theme indicator dots
function updateThemeIndicator() {
    // Remove active class from all dots
    lightThemeDot.classList.remove('active');
    darkThemeDot.classList.remove('active');
    pinkThemeDot.classList.remove('active');
    
    // Add active class to current theme dot
    if (currentThemeIndex === 0) {
        lightThemeDot.classList.add('active');
    } else if (currentThemeIndex === 1) {
        darkThemeDot.classList.add('active');
    } else {
        pinkThemeDot.classList.add('active');
    }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    applyTheme(newTheme);
    updateThemeIndicator();
});

// Theme dot click handlers
lightThemeDot.addEventListener('click', () => {
    currentThemeIndex = 0;
    applyTheme('light');
    updateThemeIndicator();
});

darkThemeDot.addEventListener('click', () => {
    currentThemeIndex = 1;
    applyTheme('dark');
    updateThemeIndicator();
});

pinkThemeDot.addEventListener('click', () => {
    currentThemeIndex = 2;
    applyTheme('pink');
    updateThemeIndicator();
});

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});

// Enable/disable send button based on input
messageInput.addEventListener('input', () => {
    sendButton.disabled = !messageInput.value.trim();
});

// Send message on Enter key
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && messageInput.value.trim()) {
        e.preventDefault();
        sendMessage();
    }
});

// Send button click handler
sendButton.addEventListener('click', sendMessage);

// New chat button handler
newChatButton.addEventListener('click', startNewChat);

// Settings button handler
settingsButton.addEventListener('click', () => {
    showToast('Ayarlar özelliği henüz uygulanmadı');
});

// Benzerlik hesaplama fonksiyonu
function calculateSimilarity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    if (str1 === str2) return 1.0;
    if (str1.length === 0 || str2.length === 0) return 0.0;
    
    // Ortak kelime sayısını bul
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    let ortakKelimeSayisi = 0;
    for (const word of words1) {
        if (words2.includes(word)) {
            ortakKelimeSayisi++;
        }
    }
    
    // Jaccard benzerliği
    const toplamKelimeSayisi = new Set([...words1, ...words2]).size;
    return ortakKelimeSayisi / toplamKelimeSayisi;
}

// Yakın sonuç bulma fonksiyonu
function findClosestMatch(question) {
    let bestMatch = null;
    let highestScore = 0.6; // Eşik değeri
    
    for (const item of chatbotDatabase.sorular) {
        const similarity = calculateSimilarity(question, item.soru);
        if (similarity > highestScore) {
            highestScore = similarity;
            bestMatch = item;
        }
    }
    
    return bestMatch;
}

// Send message function - Flask yerine yerel veritabanı kullanacak şekilde güncellendi
async function sendMessage() {
    const messageText = messageInput.value.trim();
    if (!messageText) return;

    // Add user message to UI
    addMessageToUI(messageText, true);
    
    // Add user message to chat storage
    addMessageToChat(messageText, true);
    
    messageInput.value = '';
    sendButton.disabled = true;

    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    messagesWrapper.appendChild(typingIndicator);
    scrollToBottom();

    try {
        // Gerçekçi bir gecikme ekleyin (500ms - 1500ms arası)
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        // Veritabanından en yakın eşleşmeyi bul
        const match = findClosestMatch(messageText);
        
        // Remove typing indicator
        if (typingIndicator.parentNode === messagesWrapper) {
            messagesWrapper.removeChild(typingIndicator);
        }

        let botText;
        if (match) {
            botText = match.cevap;
        } else {
            botText = "Bunu nasıl cevaplayacağımı bilmiyorum. Daha fazla bilgi verebilir misiniz?";
        }

        // Add bot message to UI
        addMessageToUI(botText, false);
        
        // Add bot message to chat storage
        addMessageToChat(botText, false);
        
    } catch (error) {
        // Remove typing indicator
        if (typingIndicator.parentNode === messagesWrapper) {
            messagesWrapper.removeChild(typingIndicator);
        }
        
        // Add error message to UI
        const errorMessage = `Bir hata oluştu: ${error.message}`;
        addMessageToUI(errorMessage, false);
        
        // Add error message to chat storage
        addMessageToChat(errorMessage, false);
    }
}

// Scroll to bottom of messages
function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Initialize app
function initApp() {
    // Load chats from localStorage
    loadChats();
    
    // Update chat history in sidebar
    updateChatHistory();
    
    // Start a new chat if no chats exist
    if (Object.keys(chats).length === 0) {
        startNewChat();
    } else {
        // Load the most recent chat
        const sortedChats = Object.values(chats).sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        
        if (sortedChats.length > 0) {
            loadChat(sortedChats[0].id);
        }
    }
    
    // Focus input
    messageInput.focus();
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && 
        !e.target.closest('.sidebar') && 
        !e.target.closest('.mobile-menu-button')) {
        body.classList.remove('menu-open');
    }
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);