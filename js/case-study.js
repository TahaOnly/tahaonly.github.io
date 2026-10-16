// Case-study interactions: accessible tabs (category galleries) and the results accordion.
(function () {
  // ── Tabs ──
  document.querySelectorAll('[data-tabs]').forEach(function (tabs) {
    var links = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]'));
    var panes = Array.prototype.slice.call(tabs.querySelectorAll('[role="tabpanel"]'));
    function select(i, focus) {
      links.forEach(function (l, k) {
        var on = k === i;
        l.classList.toggle('w--current', on);
        l.setAttribute('aria-selected', on ? 'true' : 'false');
        l.tabIndex = on ? 0 : -1;
      });
      panes.forEach(function (p, k) { p.classList.toggle('w--tab-active', k === i); });
      if (focus) links[i].focus();
    }
    links.forEach(function (l, i) {
      l.addEventListener('click', function () { select(i); });
      l.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % links.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + links.length) % links.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = links.length - 1;
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(i); return; }
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });
  });

  // ── Accordion (collapsed by default, as in the original) ──
  document.querySelectorAll('[data-accordion]').forEach(function (item) {
    var btn = item.querySelector('.accordion-button');
    var panel = item.querySelector('.accordion-item-content');
    var trigger = item.querySelector('.accordion-item-trigger');
    function toggle() {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
      item.classList.toggle('is-open', open);
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    // the whole header row (heading + chevron) is clickable, like the original
    trigger.addEventListener('click', function (e) { if (e.target !== btn) toggle(); });
  });
})();
