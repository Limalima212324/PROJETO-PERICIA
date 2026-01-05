// ===== ANIMAÇÃO DOS CARDS =====
const cards = document.querySelectorAll('.card'); // seleciona todos os cards
 
const observer = new IntersectionObserver(entries => { // cria o observador 
  entries.forEach(entry => { // para cada entrada observada 
    if(entry.isIntersecting) { // se o card estiver visível na tela 
      entry.target.classList.add('visible'); // adiciona a classe 'visible' para ativar a animação
    } else { // se o card não estiver visível na tela 
      entry.target.classList.remove('visible'); // garante animação ao subir e descer
    }
  });
}, { threshold: 0.2 }); // define o limiar de visibilidade (20% do card visível) 

cards.forEach(card => observer.observe(card)); // observa cada card

// ===== FORMULÁRIO WHATSAPP =====
function enviarWhats(event) { // função para enviar mensagem via WhatsApp
  event.preventDefault(); // previne o comportamento padrão do formulário
  const nome = document.getElementById('nome').value; // obtém o valor do campo de nome
  const mensagem = document.getElementById('mensagem').value; // obtém o valor do campo de mensagem
  const telefone = '5543988513003'; // número de telefone do destinatário (incluindo código do país)  
  const texto = `Olá, meu nome é ${nome}. ${mensagem}`; // formata a mensagem a ser enviada
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`; // cria a URL do WhatsApp com a mensagem codificada
  window.open(url, '_blank'); // abre a URL em uma nova aba
}



// ===== MODAL CURRÍCULO =====
const abrirCurriculo = document.getElementById('abrirCurriculo');
const modalCurriculo = document.getElementById('modalCurriculo');
const fecharModal = document.querySelector('.fechar-modal');

abrirCurriculo.addEventListener('click', () => {
  modalCurriculo.style.display = 'block';
});

fecharModal.addEventListener('click', () => {
  modalCurriculo.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalCurriculo) {
    modalCurriculo.style.display = 'none';
  }
});
