function clicToCopySemiBudgetVargoth() {
    var copyText = document.getElementById("deckCodeSemiBudgetVargoth");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
