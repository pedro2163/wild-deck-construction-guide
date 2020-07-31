function clicToCopySemiBudget() {
    var copyText = document.getElementById("deckCodeSemiBudget");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}