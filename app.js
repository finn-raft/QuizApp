const quiz = [
  {
      question: 'スマブラSPのロックマンの空前の発生Fは？',
      answers: [
          '7F',
          '8F',
          '9F',
          '11F'
      ],
      correct: '9F'
  },
  {
      question: 'スマブラSPのロックマンの空下の着地隙Fは？',
      answers: [
          '11F',
          '14F',
          '17F',
          '20F'
      ],
      correct: '14F'
  },
  {
      question: 'スマブラSPのロックマンの下スマの全体Fは？',
      answers: [
          '60F',
          '66F',
          '72F',
          '78F'
      ],
      correct: '78F'
  },
  {
      question: 'ロックマンの上強の全身無敵Fは？',
      answers: [
          '5-7F',
          '6-7F',
          '6-8F',
          '7-10F'
      ],
      correct: '5-7F'
  },
  {
      question: 'ロックマンの上Bの全身無敵Fは？',
      answers: [
          '1-3F',
          '4-6F',
          '7-10F',
          '10-14F'
      ],
      correct: '7-10F'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $question = document.getElementById('js-question');
const $progress = document.getElementById('js-progress');
const $buttons = document.getElementsByClassName('option');

const setupQuiz = () => {
  $question.textContent = quiz[quizIndex].question;
  $progress.textContent = `全問題数: ${quizIndex + 1} / ${quizLength} 問目`;
  Array.from($buttons).forEach((button, index) => {
      button.textContent = quiz[quizIndex].answers[index];
  });
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
      alert('正解！');
      score++;
  } else {
      alert(`不正解！正解は ${quiz[quizIndex].correct} です！`);
  }
  quizIndex++;
  if (quizIndex < quizLength) {
      setupQuiz();
  } else {
      alert(`終了！あなたの正解数は ${score} / ${quizLength} です！`);
  }
};

Array.from($buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
      clickHandler(e);
  });
});