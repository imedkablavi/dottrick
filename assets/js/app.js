/* App.js - Gmail Dot Trick Generator (Enhanced) */
(function() {
  'use strict';

  // Configuration
  const MAX_COMBINATIONS = 50000; // safety cap
  const UI = {};
  const state = {
    lang: 'ar',
  strings: {
  ar: {
        title: 'DotTrick — مُولِّد تنويعات نقاط Gmail',
        pageTitle: 'DotTrick — مُولِّد تنويعات نقاط Gmail',
        subtitle: 'ولِّد جميع التنويعات الممكنة بوضع النقاط قبل ‎@gmail.com',
        labelUsername: 'اسم المستخدم (دون ‎@gmail.com)',
        placeholder: 'مثال: imed',
        metaDescription: 'DotTrick — أداة سريعة لتوليد جميع تنويعات اسم مستخدم Gmail بالنقاط قبل ‎@gmail.com مع نسخ وحفظ ودعم العربية/الإنجليزية/التركية.',
        generate: 'توليد التنويعات',
        copy: 'نسخ النتائج',
        save: 'حفظ كملف ‎.txt',
        toggleTheme: 'تبديل الفاتح/الداكن',
        clear: 'مسح النتائج',
        resultCount: n => `تم توليد ${n.toLocaleString('ar-EG')} بريد.` ,
        tooLong: 'الاسم طويل جدًا وسيولد عدداً هائلاً من النتائج، قلِّصه.',
        invalidChars: 'يُسمح فقط بحروف لاتينية وأرقام ونقاط.',
        tooMany: n => `سيتم توليد أكثر من ${n.toLocaleString('ar-EG')} نتيجة، تم الإيقاف للحماية. قلِّل الطول.`,
        need2: 'اكتب اسمًا من حرفين على الأقل.',
        copied: 'تم النسخ!',
        saveName: 'addresses.txt',
        footer: year => `© ${year} All rights reserved — <a href="https://www.imedkablavi.info/" target="_blank" rel="noopener">imedkablavi.info</a>`,
        description: 'أدخل اسم مستخدم Gmail (قبل ‎@) وسيتم توليد كل التنويعات بالنقاط.' ,
        detailsTitle: 'شرح الفكرة',
        detailsBody: 'Gmail يتجاهل النقاط في الجزء الخاص باسم المستخدم قبل @. لذلك imed و i.m.e.d يصلان إلى نفس البريد.',
        outputPlaceholder: 'ستظهر النتائج هنا',
        link404: 'صفحة 404',
        helpTitle: 'ما الذي تفعله الأداة؟',
        helpContent: `
          <p>تساعدك DotTrick على توليد جميع <strong>التركيبات بالنقاط</strong> لاسم مستخدم Gmail (الجزء قبل @) لأن Gmail <strong>يتجاهل النقاط</strong> في هذا الجزء.</p>
          <ul>
            <li>✅ أدخل اسم المستخدم بدون <code>@gmail.com</code>.</li>
            <li>✅ سنولّد كل الصيغ مثل: <code>i.med</code>, <code>im.ed</code>, <code>i.m.e.d</code> ...</li>
            <li>✅ يمكن نسخ النتائج أو حفظها كملف نصي.</li>
            <li>⚠️ العدد ينمو أسيًا؛ لذا نضع حدًا آمنًا لمنع تجميد المتصفح.</li>
          </ul>
          <p>هذه الأداة <strong>لا ترسل</strong> أي بيانات إلى خادم — كل شيء يعمل داخل متصفحك.</p>
        `
      },
      en: {
        title: 'DotTrick — Gmail Dot Trick Generator',
        pageTitle: 'DotTrick — Gmail Dot Trick Generator',
        subtitle: 'Generate every dotted variant before @gmail.com',
        labelUsername: 'Username (without @gmail.com)',
        placeholder: 'Example: imed',
        metaDescription: 'DotTrick — Fast tool to generate every dotted variant of a Gmail username (before @gmail.com). Copy, save and multi-language support.',
        generate: 'Generate Variants',
        copy: 'Copy Results',
        save: 'Save as .txt',
        toggleTheme: 'Toggle Light/Dark',
        clear: 'Clear Results',
        resultCount: n => `${n.toLocaleString('en-US')} addresses generated.` ,
        tooLong: 'Username is too long and would explode in combinations. Shorten it.',
        invalidChars: 'Only letters, digits and dots are allowed.',
        tooMany: n => `More than ${n.toLocaleString('en-US')} combinations would be produced. Stopped for safety.`,
        need2: 'Enter at least 2 characters.',
        copied: 'Copied!',
        saveName: 'addresses.txt',
        footer: year => `© ${year} All rights reserved — <a href="https://www.imedkablavi.info/" target="_blank" rel="noopener">imedkablavi.info</a>`,
        description: 'Enter the Gmail username (before @) and get every dotted variant.',
        detailsTitle: 'How it works',
        detailsBody: 'Gmail ignores dots in the local part before @. So imed and i.m.e.d deliver to the same inbox.',
        outputPlaceholder: 'Results will appear here',
        link404: '404 Page',
        helpTitle: 'What does this tool do?',
        helpContent: `
          <p>DotTrick generates all <strong>dotted variations</strong> of a Gmail username (local part) because Gmail <strong>ignores dots</strong> before the @.</p>
          <ul>
            <li>✅ Enter the username without <code>@gmail.com</code>.</li>
            <li>✅ We generate variants like <code>i.med</code>, <code>im.ed</code>, <code>i.m.e.d</code> ...</li>
            <li>✅ Copy the results or save as a text file.</li>
            <li>⚠️ Count grows exponentially; we cap it for browser safety.</li>
          </ul>
          <p>This tool <strong>never sends</strong> your data to a server — it runs fully in your browser.</p>
        `
      },
      tr: {
        title: 'DotTrick — Gmail Nokta Hilesi Üreticisi',
        pageTitle: 'DotTrick — Gmail Nokta Hilesi Üreticisi',
        subtitle: '@gmail.com öncesi tüm noktalı varyasyonları üretin',
        labelUsername: 'Kullanıcı adı (@gmail.com olmadan)',
        placeholder: 'Örnek: imed',
        metaDescription: 'DotTrick — Gmail kullanıcı adının @ öncesindeki tüm noktalı varyasyonlarını hızlıca üretir. Kopyalama, kaydetme ve çok dilli destek.',
        generate: 'Varyasyonları Üret',
        copy: 'Sonuçları Kopyala',
        save: 'TXT olarak Kaydet',
        toggleTheme: 'Açık/Koyu Modu',
        clear: 'Sonuçları Temizle',
        resultCount: n => `${n.toLocaleString('tr-TR')} adres üretildi.`,
        tooLong: 'Kullanıcı adı çok uzun; kombinasyonlar aşırı olur. Lütfen kısaltın.',
        invalidChars: 'Sadece harf, rakam ve nokta kullanılabilir.',
        tooMany: n => `${n.toLocaleString('tr-TR')} değerinden fazla kombinasyon üretilecek. Güvenlik için durduruldu.`,
        need2: 'En az 2 karakter girin.',
        copied: 'Kopyalandı!',
        saveName: 'addresses.txt',
        footer: year => `© ${year} Tüm hakları saklıdır — <a href="https://www.imedkablavi.info/" target="_blank" rel="noopener">imedkablavi.info</a>`,
        description: '@ işaretinden önceki Gmail kullanıcı adını girin; tüm noktalı varyasyonlar üretilecektir.',
        detailsTitle: 'Nasıl çalışır',
        detailsBody: 'Gmail, @ öncesi yerel kısımda noktaları yok sayar. Bu nedenle imed ve i.m.e.d aynı gelen kutusuna teslim edilir.',
        outputPlaceholder: 'Sonuçlar burada görünecek',
        link404: '404 Sayfası',
        helpTitle: 'Bu araç ne yapar?',
        helpContent: `
          <p>DotTrick, Gmail kullanıcı adının (yerel kısım) tüm <strong>noktalı varyasyonlarını</strong> üretir; çünkü Gmail @ öncesindeki noktalara <strong>aldırmaz</strong>.</p>
          <ul>
            <li>✅ <code>@gmail.com</code> olmadan kullanıcı adını girin.</li>
            <li>✅ <code>i.med</code>, <code>im.ed</code>, <code>i.m.e.d</code> gibi varyasyonlar üretilir.</li>
            <li>✅ Sonuçları kopyalayın veya metin dosyası olarak kaydedin.</li>
            <li>⚠️ Sayı üssel artar; tarayıcı güvenliği için sınır koyduk.</li>
          </ul>
          <p>Bu araç verilerinizi <strong>sunucuya göndermez</strong> — her şey tarayıcınızda çalışır.</p>
        `
      }
    }
  };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheElements();
    detectInitialLanguage();
    bindEvents();
    applyLang();
    updateFooter();
    updateThemeMeta();
    // Periodically draw attention to help button
    try {
      setInterval(()=>{ if (UI.helpBtn) { UI.helpBtn.classList.add('pulse'); setTimeout(()=>UI.helpBtn.classList.remove('pulse'), 1400); } }, 8000);
    } catch(_) {}
  }

  function cacheElements() {
    UI.title = qs('[data-i="title"]');
    UI.subtitle = qs('[data-i="subtitle"]');
    UI.labelUsername = qs('[data-i="labelUsername"]');
    UI.description = qs('[data-i="description"]');
    UI.username = qs('#username');
    UI.generate = qs('[data-i="generate"]');
    UI.copy = qs('[data-i="copy"]');
    UI.save = qs('[data-i="save"]');
    UI.clear = qs('[data-i="clear"]');
    UI.toggleTheme = qs('[data-i="toggleTheme"]');
    UI.count = qs('#count');
    UI.output = qs('#output');
    UI.langAr = qs('#lang-ar');
    UI.langEn = qs('#lang-en');
  UI.langTr = qs('#lang-tr');
    UI.footer = qs('footer.site-footer span[data-i="footer"]');
    UI.detailsTitle = qs('[data-i="detailsTitle"]');
    UI.detailsBody = qs('[data-i="detailsBody"]');
    UI.link404 = qs('footer.site-footer a[data-i="link404"]');
    UI.metaTheme = qs('meta#theme-color-current');
    // Help modal
    UI.helpBtn = qs('#helpBtn');
    UI.helpModal = qs('#helpModal');
    UI.helpClose = qs('#helpClose');
    UI.helpTitle = qs('#helpTitle');
    UI.helpContent = qs('.modal__content[data-i="helpContent"]');
  // (section-explain removed per request)
  }

  function bindEvents() {
    UI.generate.addEventListener('click', generateDots);
    UI.copy.addEventListener('click', copyEmails);
    UI.save.addEventListener('click', saveEmails);
    UI.clear.addEventListener('click', () => { UI.output.value = ''; UI.count.textContent=''; });
    UI.toggleTheme.addEventListener('click', toggleTheme);
  UI.langAr.addEventListener('click', () => switchLang('ar'));
  UI.langEn.addEventListener('click', () => switchLang('en'));
  if (UI.langTr) UI.langTr.addEventListener('click', () => switchLang('tr'));
    UI.username.addEventListener('keydown', e => { if (e.key === 'Enter') generateDots(); });
    // Help modal events
    if (UI.helpBtn) UI.helpBtn.addEventListener('click', openHelp);
    if (UI.helpClose) UI.helpClose.addEventListener('click', closeHelp);
    if (UI.helpModal) UI.helpModal.addEventListener('click', (e) => { if (e.target && e.target.dataset.close === 'true') closeHelp(); });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeHelp(); });
  }

  function applyLang() {
    const L = state.strings[state.lang];
    document.documentElement.lang = state.lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir  = state.lang === 'ar' ? 'rtl' : 'ltr';
    // Title and meta
    if (L.pageTitle) document.title = L.pageTitle;
    const metaDesc = qs('meta[name="description"]');
    if (metaDesc && L.metaDescription) metaDesc.setAttribute('content', L.metaDescription);
    const ogDesc = qs('meta[property="og:description"]');
    if (ogDesc && L.metaDescription) ogDesc.setAttribute('content', L.metaDescription);
    const twDesc = qs('meta[name="twitter:description"]');
    if (twDesc && L.metaDescription) twDesc.setAttribute('content', L.metaDescription);
    const ogLocale = qs('meta[property="og:locale"]');
    if (ogLocale) {
      const map = { ar: 'ar_AR', en: 'en_US', tr: 'tr_TR' };
      ogLocale.setAttribute('content', map[state.lang] || 'en_US');
    }
    setText(UI.title, L.title);
    setText(UI.subtitle, L.subtitle);
    setText(UI.labelUsername, L.labelUsername);
    if (UI.description) setText(UI.description, L.description);
    UI.username.placeholder = L.placeholder;
    if (UI.output) UI.output.placeholder = L.outputPlaceholder || '';
    setText(UI.generate, L.generate);
    setText(UI.copy, L.copy);
    setText(UI.save, L.save);
    setText(UI.clear, L.clear);
    setText(UI.toggleTheme, L.toggleTheme);
    setText(UI.detailsTitle, L.detailsTitle);
    setText(UI.detailsBody, L.detailsBody);
    if (UI.link404) setText(UI.link404, L.link404);
    if (UI.helpTitle) setText(UI.helpTitle, L.helpTitle);
  if (UI.helpContent) setHTML(UI.helpContent, L.helpContent);
    updateFooter();
    updateLangButtons();
  }

  function updateLangButtons() {
    UI.langAr.classList.toggle('active', state.lang === 'ar');
    UI.langEn.classList.toggle('active', state.lang === 'en');
    if (UI.langTr) UI.langTr.classList.toggle('active', state.lang === 'tr');
  }

  function switchLang(lang) {
    state.lang = lang; applyLang();
  }

  function detectInitialLanguage() {
    try {
      const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
      if (navLang.startsWith('ar')) state.lang = 'ar';
      else if (navLang.startsWith('tr')) state.lang = 'tr';
      else state.lang = 'en';
    } catch(e) { state.lang = 'en'; }
  }

  function generateDots() {
    const L = state.strings[state.lang];
    const raw = UI.username.value.trim();
    if (raw.length < 2) { UI.output.value = L.need2; return; }

    // Validation: only letters, digits, dots
    if (!/^[A-Za-z0-9.]+$/.test(raw)) { UI.output.value = L.invalidChars; return; }

    const username = raw.replace(/\.+/g, '.').replace(/\.$/, '').replace(/^\./,'');
    const core = username.replace(/\./g,'').toLowerCase();

    if (core.length > 18) { UI.output.value = L.tooLong; return; }

    // Potential combinations count = 2^(n-1)
    const potential = Math.pow(2, core.length - 1);
    if (potential > MAX_COMBINATIONS) { UI.output.value = L.tooMany(MAX_COMBINATIONS); return; }

    const result = [];

    function backtrack(path, i) {
      if (i === core.length - 1) {
        result.push(path + core[i]);
        return;
      }
      backtrack(path + core[i], i + 1);
      backtrack(path + core[i] + '.', i + 1);
    }

    backtrack('', 0);

    const list = result.map(v => v + '@gmail.com');
    UI.output.value = list.join('\n');
    UI.count.textContent = L.resultCount(list.length);
    UI.count.classList.remove('updated');
    void UI.count.offsetWidth; // force reflow for animation restart
    UI.count.classList.add('updated');
  }

  function copyEmails() {
    const L = state.strings[state.lang];
    const text = UI.output.value;
    if (!text.trim()) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => alert(L.copied)).catch(fallbackCopy);
    } else { fallbackCopy(); }

    function fallbackCopy() {
      UI.output.select();
      document.execCommand('copy');
      alert(L.copied);
    }
  }

  function saveEmails() {
    const L = state.strings[state.lang];
    const text = UI.output.value;
    if (!text.trim()) return;
    const blob = new Blob([text + '\n'], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = L.saveName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function toggleTheme() {
    document.body.classList.toggle('light');
    updateThemeMeta();
  }

  function updateThemeMeta() {
    if (!UI.metaTheme) return;
    const isLight = document.body.classList.contains('light');
    UI.metaTheme.setAttribute('content', isLight ? '#f4f6f8' : '#0f2027');
  }

  function updateFooter() {
    const L = state.strings[state.lang];
    if (UI.footer) setHTML(UI.footer, L.footer(new Date().getFullYear()));
  }

  function openHelp(){ if(UI.helpModal){ UI.helpModal.hidden = false; UI.helpModal.focus(); } }
  function closeHelp(){ if(UI.helpModal){ UI.helpModal.hidden = true; } }

  // Helpers
  function qs(sel, ctx=document) { return ctx.querySelector(sel); }
  function setText(el, txt) { if (el) el.textContent = txt; }
  function setHTML(el, html) { if (el) el.innerHTML = html; }
})();
