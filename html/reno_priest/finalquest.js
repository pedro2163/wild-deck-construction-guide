function clicToCopyFinalQuest() {
    var copyText = document.getElementById("deckCodeFinalQuest");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
