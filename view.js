function updateView(){
    document.getElementById('letters').innerHTML = /*HTML*/ `
        <h3>Write a word or a sentence:</h3>
        <input type="text" onchange="textInput(this.value)">
        <button onclick="printLetters()">Submit!</button>
        <button onclick="resetLetters()">Reset letters</button><br><br>

        <div>A=${counterA}</div>
        <div>E=${counterE}</div>
        <div>I=${counterI}</div>
        <div>O=${counterO}</div>
        <div>U=${counterU}</div>
        <div>Y=${counterY}</div>
    `
}
