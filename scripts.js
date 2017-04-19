const page = document.querySelector(".page");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
// page.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log(transcript);
    p.textContent = transcript;
    page.appendChild(p);

    if (e.results[0].isFinal) {
      p = document.createElement('p');
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
