
function can_word_be_made_from_dictionary_util(word, dictionaryMap, isWordPossible, start, nWordLength) {
    if (start === nWordLength) {
        return true;
    }

    // console.log(start)

    // ['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond'

    let temp = '';
    for (let index = start; index < nWordLength; index++) {
        temp = word.substring(start, index + 1);
        if (dictionaryMap.has(temp)) {
            isWordPossible[index] = true;
            can_word_be_made_from_dictionary_util(word, dictionaryMap, isWordPossible, index + 1, nWordLength);
        }
    }
    return isWordPossible[nWordLength - 1];
}

function can_word_be_made_from_dictionary_util_dp(word, dictionaryMap, isWordPossible, nWordLength) {
    if (!nWordLength) {
        return true;
    }

    // console.log(start)

    // ['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond'

    let temp = '';
    for (let index = 1; index <= nWordLength; index++) {
        temp = word.substr(0, index);
        if (!isWordPossible[index] && dictionaryMap.has(temp)) {
            isWordPossible[index] = true;
        }
        if (isWordPossible[index]) {
            if (index === nWordLength) {
                return true;
            }
            for (let iter = index + 1; iter <= nWordLength; iter++) {
                if (!isWordPossible[iter] && dictionaryMap.has(word.substr(index, iter - index))) {
                    isWordPossible[iter] = true;
                    if (iter === nWordLength && isWordPossible[iter] === true) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}


function can_word_be_made_from_dictionary(dictionary, word) {
    if (!word || typeof word !== 'string' || !dictionary ||
        !Array.isArray(dictionary) || dictionary.length <= 0) {
        return false;
    }
    const nWordLength = word.length;
    const isWordPossible = new Array(nWordLength + 1).fill(false);

    const dictionaryMap = new Map(dictionary.map(item => [item, true]));

    return [
        can_word_be_made_from_dictionary_util_dp(word, dictionaryMap, new Array(nWordLength + 1).fill(false), nWordLength),
        can_word_be_made_from_dictionary_util(word, dictionaryMap, isWordPossible, 0, nWordLength)
    ];
}

console.log(can_word_be_made_from_dictionary(['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond'));
console.log(can_word_be_made_from_dictionary(['mobile', 'samsung', 'sam', 'sung', 'man', 'mango', 'icecream', 'and', 'go', 'i', 'like', 'ice', 'cream'], 'ilikesamsung'));
console.log(can_word_be_made_from_dictionary(['mobile', 'samsung', 'sam', 'sung', 'man', 'mango', 'icecream', 'and', 'go', 'i', 'like', 'ice', 'cream'], 'iiiiiiii'));
console.log(can_word_be_made_from_dictionary(['mobile', 'samsung', 'sam', 'sung', 'man', 'mango', 'icecream', 'and', 'go', 'i', 'like', 'ice', 'cream'], 'samsungandmango'));