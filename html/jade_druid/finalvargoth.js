function clicToCopyFinalVargoth() {
    var copyText = document.getElementById("deckCodeFinalVargoth");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
