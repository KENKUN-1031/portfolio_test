// スムーススクロール
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if(targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ページロード時：headerとAboutセクションだけふわっと表示
window.addEventListener('DOMContentLoaded', () => {
  gsap.from("header", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".section:first-of-type", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    delay: 0.3
  });
});

// 2個目以降のsectionにスクロール時アニメ
gsap.utils.toArray('.section').slice(1).forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: "power2.out"
  });
});

// プロジェクトカード
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.1
  });
});

// スキルアイコン
gsap.utils.toArray('.skill-item').forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    delay: i * 0.07,
    ease: "back.out(1.7)"
  });
});

// ---- ここから追記！ ----
gsap.to("#shape1", {
  duration: 8,
  attr: { cy: "38%" },
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to("#shape2", {
  duration: 10,
  attr: { cx: "68%" },
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});
gsap.to("#shape3", {
  duration: 12,
  attr: { cy: "75%" },
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});
// ---- ここまで追記！ ----
