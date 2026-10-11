// ============================================
// ===== REDEEM STORE - i18n ENGINE =====
// ============================================
window.i18n = {
    currentLang: 'ar',
    defaultLang: 'ar',
    translations: window.REDEEM_TRANSLATIONS || { ar: {}, en: {} },

    init() {
        const saved = localStorage.getItem('redeem_lang') || this.defaultLang;
        this.currentLang = saved;
        this.applyDirection(saved);
        this.translatePage();

        document.addEventListener('language:change', (e) => {
            this.setLang(e.detail.lang);
        });
    },

    setLang(lang) {
        if (!this.translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('redeem_lang', lang);
        this.applyDirection(lang);
        this.translatePage();

        const label = document.getElementById('currentLanguageLabel');
        if (label) {
            label.textContent = lang === 'ar' ? 'العربية' : 'English';
        }
    },

    applyDirection(lang) {
        const dir = lang === 'en' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);
        if (document.body) document.body.setAttribute('dir', dir);
    },

    t(key) {
        const dict = this.translations[this.currentLang] || {};
        return dict[key] !== undefined ? dict[key] : (this.translations[this.defaultLang][key] || key);
    },

    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const value = this.t(key);
            if (value !== key) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const value = this.t(key);
            if (value !== key) el.placeholder = value;
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            const value = this.t(key);
            if (value !== key) el.title = value;
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
    window.i18n.init();
}