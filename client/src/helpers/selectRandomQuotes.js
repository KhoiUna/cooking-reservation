export default function selectRandomQuotes(firstName) {
  const quotes = {
    0: [firstName, ", thanks for reserving!"],
    1: [firstName, ", you look great today!"],
    2: [firstName, ", you are making Rice Hall better!"],
    3: ["You will be forever remembered, ", firstName, "!"],
    4: [firstName, " and me will fight COVID together!"],
    5: ["Ms. Cala is thankful for you, ", firstName, "!"],
    6: ["Gracias, ", firstName, "!"],
    7: ["谢谢 (thanks)", firstName, "!"],
    8: ["ありがとう (thanks), ", firstName, "!"],
  };

  const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
  const quote = quotes[randomIndex];

  return quote.join("");
}
