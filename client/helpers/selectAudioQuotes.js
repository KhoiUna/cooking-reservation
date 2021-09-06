export default function selectAudioQuotes(fromForm, index) {
  const quotes = {
    0: ["thanks for reserving!"],
    1: ["you look great today!"],
    2: ["you are making Rice Hall better!"],
    3: ["You will be forever remembered"],
    4: ["We will fight co-vidd together"],
    5: ["Ms. Cala is thankful for you"],
    6: ["Gracias"],
    7: ["shia shia"],
    8: ["arigato gozai mas"],
    9: ["dhanyaavod"],
    10: ["gam sah hae yoh"],
    11: ["Cảm ơn"],
  };

  const synth = window.speechSynthesis;

  // Only keep US voice
  let voices = synth.getVoices();
  voices = voices.filter((voice) => voice.lang === "en-US");

  const utterThis = new SpeechSynthesisUtterance(
    fromForm !== "feedback" ? quotes[index] : "Thanks for your feedback!"
  );

  utterThis.voice = voices[Math.floor(Math.random() * voices.length)]; // select randomly from available voices array
  utterThis.pitch = 1;
  utterThis.rate = 1;

  synth.speak(utterThis);

  return;
}
