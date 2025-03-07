let balance = 0;
function showAd() {
    alert("🎥 Showing Ad... Please Wait...");
    setTimeout(function() {
        balance += 2;
        document.getElementById("balance").innerText = "Your Balance: ₹" + balance;
        alert("🎉 Congrats! You earned ₹2");
    }, 5000);
}
function withdraw() {
    if (balance >= 50) {
        alert("💸 Withdrawal Successful! ₹" + balance + " Sent to Your UPI.");
        balance = 0;
        document.getElementById("balance").innerText = "Your Balance: ₹" + balance;
    } else {
        alert("⛔ Minimum ₹50 required for withdrawal!");
    }
}