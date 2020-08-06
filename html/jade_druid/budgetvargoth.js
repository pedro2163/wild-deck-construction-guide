function clicToCopyBudgetVargoth() {
    var copyText = document.getElementById("deckCodeBudgetVargoth");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
