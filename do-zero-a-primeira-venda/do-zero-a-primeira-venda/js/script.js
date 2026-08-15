// ==========================================================================
// Do Zero à Primeira Venda — interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- FAQ accordion ----------
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---------- CTA click tracking (Meta Pixel) ----------
  var ctaButtons = document.querySelectorAll('.cta-btn');
  ctaButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Do Zero à Primeira Venda + Kit Low Ticket Express',
          value: 19.90,
          currency: 'BRL'
        });
      }
      // Navigation to the checkout link proceeds normally via href.
    });
  });

});
