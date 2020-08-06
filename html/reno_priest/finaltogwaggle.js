function clicToCopyFinalTogwaggle() {
    var copyText = document.getElementById("deckCodeFinalTogwaggle");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
