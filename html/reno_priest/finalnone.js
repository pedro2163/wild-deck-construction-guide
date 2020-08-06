function clicToCopyFinalNone() {
    var copyText = document.getElementById("deckCodeFinalNone");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
