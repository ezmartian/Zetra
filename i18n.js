const I18N = {
  en: {
    hero_title: 'AI systems that cut costs and grow revenue',
    hero_sub: 'We implement automation for SMBs in Uzbekistan and Central Asia: lead capture, sales CRM, RPA back-office bots, analytics, and customer chatbots — secure, fast, ROI-first.',
    cta_audit: 'Book a free audit',
    cta_pricing: 'See pricing'
  },
  uz: {
    hero_title: 'Xarajatlarni qisqartiradigan va daromadni oshiradigan AI tizimlari',
    hero_sub: 'Biz O‘zbekiston va Markaziy Osiyodagi kichik bizneslar uchun avtomatlashtirishni joriy etamiz: lidlarni yig‘ish, savdo CRM, RPA botlar, analitika va mijozlar chat-botlari — xavfsiz, tez, ROI birinchi.',
    cta_audit: 'Bepul auditga yozilish',
    cta_pricing: 'Narxlarni ko‘rish'
  }
};

(function(){
  const setLang = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  };
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
})();
