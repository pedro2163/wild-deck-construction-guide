function clicToCopy() {
    var copyText = document.getElementById("deckCodeBudget");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}