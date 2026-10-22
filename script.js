const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const checkboxes = document.querySelectorAll('.status-check');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  // 1. Lógica dos Filtros de Categoria
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe ativa de todos e adiciona no clicado
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Lógica do Indicador de Progresso (Checkboxes)
  function updateProgress() {
    const total = checkboxes.length;
    let checkedCount = 0;

    checkboxes.forEach(chk => {
      if (chk.checked) checkedCount++;
    });

    const percentage = Math.round((checkedCount / total) * 100);
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${checkedCount} de ${total} materiais revisados`;
  }

  checkboxes.forEach(chk => {
    chk.addEventListener('change', updateProgress);
  });

  // Inicialização inicial do progresso
  updateProgress();
});