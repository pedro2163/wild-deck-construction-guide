function clicToCopyFinalCheap() {
    var copyText = document.getElementById("deckCodeFinalCheap");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}