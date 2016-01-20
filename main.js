// 1. letterCapitalize

console.log("letterCapitalize")

var letterCapitalize = function(string) {
	var words = string.split(" ")

	var capWords = words.map( function(word) {
		var wordChars = word.split("")
		wordChars[0] = wordChars[0].toUpperCase()
		return wordChars.join("")
	})

	return capWords.join(" ")
}

console.log(letterCapitalize("capitalize this!"))

// 2. wordCount

console.log("wordCount")

var wordCount = function(string) {
	return string.split(" ").length
}

console.log(wordCount("Never eat shredded wheat"))

// 3. primeTime

console.log("primeTime")

var primeTime = function(n) {
  if (n <= 1){
    return false;
  }
  var i = 2;
  while (i < n) {
    if (n % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(primeTime(3))
