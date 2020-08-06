function clicToCopySemiBudgetRamp() {
    var copyText = document.getElementById("deckCodeSemiBudgetRamp");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
