function clicToCopy() {
    var copyText = document.getElementById("deckCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}