const videoElement = document.querySelector("video");
const formElement = document.querySelector("form");
const submitButton = document.querySelector(".button-85");
const radioContainers = document.querySelectorAll(".input-box");
let currentQuestion = 0;

const questions = [
  {
    video: "imagens/video_boas_vindas.mp4",
    options: [
      { text: "Vamos nessa!", video: "imagens/video_continuidade.mp4" },
      {
        text: "Talvez mais tarde, mas prometo que volto :)",
        video: "imagens/video_receita_frutas.mp4",
        redirect: true,
      },
    ],
  },
  {
    video: "imagens/video_boas_vindas.mp4",
    options: [
      {
        text: "Frutas, são docinhas e deliciosas!",
        video: "imagens/video_continuidade.mp4",
      },
      {
        text: "Legumes, adoro como eles são versáteis na culinária!",
        video: "imagens/video_receita_frutas.mp4",
      },
    ],
  },
  {
    video: "imagens/video_boas_vindas.mp4",
    options: [
      {
        text: "Com certeza! Amo comer com a minha família.",
        video: "imagens/video_continuidade.mp4",
      },
      {
        text: "Minha família não costuma realizar refeições em conjunto :(",
        video: "imagens/video_receita_frutas.mp4",
      },
    ],
  },
  {
    video: "imagens/video_saida.mp4",
  }
];
function showQuestion() {
  const question = questions[currentQuestion];
  videoElement.src = question.video;

  const options = question.options;
  const labels = document.querySelectorAll(".input-box label");

  labels.forEach((label, index) => {
    label.textContent = options[index].text;
  });
}

function submitAnswer(event) {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="opcao"]:checked');
  if (selectedOption) {
    const optionValue = selectedOption.id.slice(-1);
    const video = questions[currentQuestion].options[optionValue - 1].video;
    videoElement.src = video;
    const redirect = questions[currentQuestion].options[optionValue - 1].redirect;
    if (redirect) {
      formElement.style.display = 'none';
      setTimeout(() => {
        window.location.href = "index.html";
      }, 8000);
    } else {
      currentQuestion++;
      if (currentQuestion < questions.length - 1) {
        showQuestion();
      } else if (currentQuestion === questions.length - 1) {
        formElement.style.display = 'none';
        setTimeout(() => {
          window.location.href = "index.html";
        }, 5000);
      }
    }
  }
}

formElement.addEventListener("submit", submitAnswer);

showQuestion();