function clicToCopyFinal() {
    var copyText = document.getElementById("deckCodeFinal");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}