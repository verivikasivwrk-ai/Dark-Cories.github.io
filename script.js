document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.getElementById('dynamicText');
    let newText = prompt("Masukkan teks baru:", dynamicText.innerText);

    if (newText !== null && newText !== "") {
        dynamicText.innerText = newText;
    }
});
