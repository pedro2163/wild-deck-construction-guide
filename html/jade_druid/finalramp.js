function clicToCopyFinalRamp() {
    var copyText = document.getElementById("deckCodeFinalRamp");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
