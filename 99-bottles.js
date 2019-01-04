function beerSong() {

  let count = 99;
  while (count > 0) {

    let preCountBottleWord = getBottleWord(count);
    console.log(`${count} ${preCountBottleWord} of beer on the wall, ${getCountText(count)} ${preCountBottleWord} of beer.`);

    count--;

    console.log(`Take one down, pass it around, ${getCountText(count)} ${getBottleWord(count)} of beer on the wall!`);
  }

  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall!");

  function getBottleWord(number) {
    return (number === 1) ? "bottle" : "bottles";
  }

  function getCountText(count) {
    return count <= 0 ? "no more" : count;
  }
}

beerSong();