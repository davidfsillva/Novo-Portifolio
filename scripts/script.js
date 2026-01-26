const botao = document.getElementById('botao-tema');
const body = document.body;

/* ================================
   PERSISTÊNCIA DO TEMA
================================ */
const temaSalvo = localStorage.getItem('tema');

if (!temaSalvo) {
  localStorage.setItem('tema', 'claro');
}

if (temaSalvo === 'escuro') {
  body.classList.add('escuro');
  botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

/* ================================
   BOTÃO MODO NOTURNO
================================ */
botao.addEventListener('click', (e) => {
  e.preventDefault(); // evita scroll/topo

  const isEscuro = body.classList.toggle('escuro');

  botao.innerHTML = isEscuro
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});

/* ================================
   SCROLL SUAVE (MENU)
================================ */
const navLinks = document.querySelectorAll('#menu ul a.link:not(#botao-tema)');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = target.offsetTop - headerHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
