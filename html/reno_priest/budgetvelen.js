function clicToCopyBudgetVelen() {
    var copyText = document.getElementById("deckCodeBudgetVelen");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
