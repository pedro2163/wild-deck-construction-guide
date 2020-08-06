function clicToCopySemiBudgetVelen() {
    var copyText = document.getElementById("deckCodeSemiBudgetVelen");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
