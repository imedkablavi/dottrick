(function(){
  const map = {
    ar: {
      title404: '404 - الصفحة غير موجودة',
      body404: 'يبدو أنك استخدمت رابطاً مكسوراً أو أدخلت عنواناً غير موجود.',
      backHome: 'العودة للأداة الرئيسية'
    },
    en: {
      title404: '404 - Page not found',
      body404: 'Looks like you’ve followed a broken link or entered a URL that doesn’t exist here.',
      backHome: 'Back to the main tool'
    },
    tr: {
      title404: '404 - Sayfa bulunamadı',
      body404: 'Kırık bir bağlantı izlediniz veya mevcut olmayan bir URL girdiniz.',
      backHome: 'Ana araca dön'
    }
  };
  function detectLang(){
    const htmlLang = document.documentElement.lang;
    if (map[htmlLang]) return htmlLang;
    return 'en';
  }
  function apply(){
    const lang = detectLang();
    const dict = map[lang];
    for (const key in dict){
      const el = document.querySelector('[data-i="'+key+'"]');
      if(el) el.textContent = dict[key];
    }
  }
  apply();
})();
