const cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
  }
  return cards;
}
writeCards(cards);