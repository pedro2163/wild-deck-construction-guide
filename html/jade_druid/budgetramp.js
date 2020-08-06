function clicToCopyBudgetRamp() {
    var copyText = document.getElementById("deckCodeBudgetRamp");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
