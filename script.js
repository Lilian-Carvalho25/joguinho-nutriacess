// Definindo as opções iniciais
let currentOptions = [
    { text: 'Vamos nessa!', nextVideo: 'imagens/video_continuidade.mp4' },
    { text: 'Talvez mais tarde, mas prometo que volto :)', nextVideo: 'videos/video_saida.mp4' }
  ];
  
  // Selecionando elementos HTML
  const videoElement = document.querySelector('video');
  const opcao1Element = document.getElementById('opcao1');
  const opcao2Element = document.getElementById('opcao2');
  const formElement = document.querySelector('form');
  
  // Função para exibir as opções na tela
  function showOptions() {
    opcao1Element.nextElementSibling.textContent = currentOptions[0].text;
    opcao2Element.nextElementSibling.textContent = currentOptions[1].text;
  }
  // Função para tratar o clique do usuário em uma opção
  function handleOptionClick(nextVideo) {
    // Exibir o próximo vídeo com base na escolha do usuário
    videoElement.src = nextVideo;
  
    // Definir as novas opções pré-selecionadas
    if (nextVideo === 'imagens/video_continuidade.mp4') {
      currentOptions = [
        { text: 'Frutas, são docinhas e deliciosas!', nextVideo: 'imagens/video_receita_frutas.mp4' },
        { text: 'Legumes, adoro como eles são versáteis na culinária!', nextVideo: 'videos/video_receita_legumes.mp4' }
      ];
    } else if (nextVideo === 'imagens/video_saida.mp4') {
      currentOptions = [
        { text: 'Voltar à página inicial', nextVideo: 'imagens/video_saida.mp4' }
      ];
    } else if (nextVideo === 'imagens/video_receita_frutas.mp4' || nextVideo === 'imagens/video_receita_legumes.mp4') {
      currentOptions = [
        { text: 'Com certeza! Amo comer com a minha família.', nextVideo: 'imagens/video_plano_familia.mp4' },
        { text: 'Minha família não costuma realizar refeições em conjunto :(', nextVideo: 'imagens/video_plano_familia.mp4' }
      ];
    } else if (nextVideo === 'imagens/video_plano_familia.mp4') {
      currentOptions = [
        { text: 'Com certeza!', nextVideo: 'imagens/video_despedida.mp4' },
        { text: 'Tenho consciência de que o ambiente é um fator muito importante em relação à alimentação.', nextVideo: 'imagens/video_despedida.mp4' }
      ];
    }
  
    // Exibir as novas opções na tela
    showOptions();
  }
  
  // Função para lidar com o envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Verificar qual opção foi selecionada
    const selectedOption = opcao1Element.checked ? currentOptions[0] : currentOptions[1];
  
    // Tratar a escolha do usuário
    handleOptionClick(selectedOption.nextVideo);
  }
  
  // Adicionar evento de envio do formulário
  formElement.addEventListener('submit', handleFormSubmit);
  
  // Inicialização do quiz
  videoElement.src = 'imagens/video_boas_vindas.mp4';
  showOptions();