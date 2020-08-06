function clicToCopySemiBudgetDragon() {
    var copyText = document.getElementById("deckCodeSemiBudgetDragon");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
