// Kimlik doğrulama işlemleri için yardımcı fonksiyonlar
const auth = {
    // Kullanıcı oturumunu başlat
    login: function(userData) {
        try {
            // Kullanıcı bilgilerini localStorage'a kaydet
            localStorage.setItem('synaptiqUser', JSON.stringify(userData));
            // Oturum zamanını kaydet (24 saat geçerli olacak şekilde)
            const expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 24);
            localStorage.setItem('synaptiqSession', JSON.stringify({
                expiresAt: expiresAt.toISOString()
            }));
            return true;
        } catch (error) {
            console.error('Giriş yapılırken hata oluştu:', error);
            return false;
        }
    },
    
    // Kullanıcı oturumunu sonlandır
    logout: function() {
        try {
            // Kullanıcı bilgilerini ve oturum bilgilerini temizle
            localStorage.removeItem('synaptiqUser');
            localStorage.removeItem('synaptiqSession');
            // Login sayfasına yönlendir
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Çıkış yapılırken hata oluştu:', error);
            // Hata olsa bile login sayfasına yönlendir
            window.location.href = 'login.html';
        }
    },
    
    // Kullanıcının oturum durumunu kontrol et
    isAuthenticated: function() {
        try {
            const user = localStorage.getItem('synaptiqUser');
            const session = localStorage.getItem('synaptiqSession');
            
            if (!user || !session) {
                return false;
            }
            
            const sessionData = JSON.parse(session);
            const expiresAt = new Date(sessionData.expiresAt);
            const now = new Date();
            
            // Oturum süresi dolmuş mu kontrol et
            if (now > expiresAt) {
                // Süresi dolmuşsa oturum bilgilerini temizle
                this.logout();
                return false;
            }
            
            return true;
        } catch (error) {
            console.error('Oturum kontrolü yapılırken hata oluştu:', error);
            return false;
        }
    },
    
    // Mevcut kullanıcı bilgilerini getir
    getCurrentUser: function() {
        try {
            if (!this.isAuthenticated()) {
                return null;
            }
            
            return JSON.parse(localStorage.getItem('synaptiqUser'));
        } catch (error) {
            console.error('Kullanıcı bilgisi okunamadı:', error);
            return null;
        }
    },
    
    // Oturum süresini uzat
    refreshSession: function() {
        try {
            if (!this.isAuthenticated()) {
                return false;
            }
            
            // Yeni bitiş zamanı belirle (24 saat)
            const expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 24);
            
            localStorage.setItem('synaptiqSession', JSON.stringify({
                expiresAt: expiresAt.toISOString()
            }));
            
            return true;
        } catch (error) {
            console.error('Oturum yenilenirken hata oluştu:', error);
            return false;
        }
    }
};

// Global olarak erişilebilir olması için window nesnesine ekle
window.auth = auth;