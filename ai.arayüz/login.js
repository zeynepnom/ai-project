// DOM Elements
const body = document.body;
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.querySelector('.eye-icon');
const eyeOffIcon = document.querySelector('.eye-off-icon');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
const pinkThemeBtn = document.getElementById('pinkThemeBtn');
const toast = document.getElementById('toast');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Sayfa yüklendiğinde oturum kontrolü yap
document.addEventListener('DOMContentLoaded', () => {
    // auth.js dosyasından gelen auth nesnesini kullan
    if (window.auth && window.auth.isAuthenticated()) {
        window.location.href = 'index.html';
    }
});

// Theme management
const themes = ['light', 'dark', 'pink'];

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
}

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

// Theme button click handlers
lightThemeBtn.addEventListener('click', () => {
    applyTheme('light');
});

darkThemeBtn.addEventListener('click', () => {
    applyTheme('dark');
});

pinkThemeBtn.addEventListener('click', () => {
    applyTheme('pink');
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'block';
        eyeOffIcon.style.display = 'none';
    }
});

// Form validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

// Show toast notification
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Validate email
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Geçerli bir e-posta adresi giriniz';
        isValid = false;
    }
    
    // Validate password
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Şifre en az 6 karakter olmalıdır';
        isValid = false;
    }
    
    if (isValid) {
        // Normalde burada sunucuya istek gönderilir
        // Şimdilik demo amaçlı başarılı giriş simüle ediyoruz
        
        // Kullanıcı bilgilerini oluştur
        const userData = {
            email: emailInput.value,
            name: emailInput.value.split('@')[0], // E-postadan basit bir isim oluştur
            rememberMe: rememberMeCheckbox.checked,
            lastLogin: new Date().toISOString()
        };
        
        // Kullanıcı oturumunu başlat (auth.js'den gelen auth nesnesini kullan)
        if (window.auth) {
            window.auth.login(userData);
            
            showToast('Giriş başarılı! Yönlendiriliyorsunuz...');
            
            // 1.5 saniye sonra ana sayfaya yönlendir
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            // auth.js yüklenmemişse veya auth nesnesi bulunamazsa
            // Basit bir yedek çözüm kullan
            try {
                localStorage.setItem('synaptiqUser', JSON.stringify(userData));
                
                // Oturum zamanını kaydet (24 saat geçerli olacak şekilde)
                const expiresAt = new Date();
                expiresAt.setHours(expiresAt.getHours() + 24);
                localStorage.setItem('synaptiqSession', JSON.stringify({
                    expiresAt: expiresAt.toISOString()
                }));
                
                showToast('Giriş başarılı! Yönlendiriliyorsunuz...');
                
                // 1.5 saniye sonra ana sayfaya yönlendir
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } catch (error) {
                showToast('Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.');
                console.error('Giriş hatası:', error);
            }
        }
    }
});

// Input validation on blur
emailInput.addEventListener('blur', () => {
    if (emailInput.value && !validateEmail(emailInput.value)) {
        emailError.textContent = 'Geçerli bir e-posta adresi giriniz';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value && !validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Şifre en az 6 karakter olmalıdır';
    } else {
        passwordError.textContent = '';
    }
});

// Clear error messages when typing
emailInput.addEventListener('input', () => {
    emailError.textContent = '';
});

passwordInput.addEventListener('input', () => {
    passwordError.textContent = '';
});