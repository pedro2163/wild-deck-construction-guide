function clicToCopyFinalVelen() {
    var copyText = document.getElementById("deckCodeFinalVelen");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
