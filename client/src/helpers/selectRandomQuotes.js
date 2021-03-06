export default function selectRandomQuotes(firstName) {
  const quotes = {
    0: [firstName, ", thanks for reserving!"],
    1: [firstName, ", you look great today!"],
    2: [firstName, ", you are making Rice Hall better!"],
    3: ["Someone will forever remember your name, ", firstName],
    4: [firstName, " and me will fight COVID together!"],
  };

  const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
  const quote = quotes[randomIndex];

  return quote.join("");
}
