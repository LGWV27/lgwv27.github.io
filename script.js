function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var chooser = randomNoRepeats(['Foo', 'Bar', 'Gah']);
document.getElementById("firstTask").innerHTML = chooser;
document.getElementById("secondTask").innerHTML = chooser;
document.getElementById("thirdTask").innerHTML = chooser;
document.getElementById("fourthTask").innerHTML = chooser;
document.getElementById("fifthTask").innerHTML = chooser;
document.getElementById("sixthTask").innerHTML = chooser;