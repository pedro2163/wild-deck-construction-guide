function clicToCopyFinalDragon() {
    var copyText = document.getElementById("deckCodeFinalDragon");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
