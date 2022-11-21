const textInput = document.querySelector("#textinput")
const dictionary = document.querySelector("#dictionary")
const form = document.querySelector("#text-form")
const searchForm = document.querySelector("#search-form")
const searchText = document.querySelector("#search-text")
let dictionaryArray = []

form.addEventListener("submit", e => {
    e.preventDefault()
    const word = document.createElement("li")
    word.innerText = textInput.value
    dictionaryArray.push(textInput.value)
    console.log(dictionaryArray)
    word.classList.add("list-item")
    dictionary.appendChild(word)
    textInput.value = ""
})

searchForm.addEventListener("submit", e => {
    e.preventDefault()
    for (let i = 0; i < dictionaryArray.length; i++) {
        if (dictionaryArray[i] == searchText.value) {
            alert("The word is in the dictionary")
        } else {
            alert("The word is not in the dictionary")
        }
    }
})
