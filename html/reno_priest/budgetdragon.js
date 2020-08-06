function clicToCopyBudgetDragon() {
    var copyText = document.getElementById("deckCodeBudgetDragon");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
