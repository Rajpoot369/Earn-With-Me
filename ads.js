// Replace with your AdMob and Unity Ads IDs
const admobAppId = "ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX";
const adUnitId = "ca-app-pub-1320128545062972/6317748916";
const unityGameId = "XXXXXXXX";
const unityPlacementId = "rewardedVideo";
function showAdMobAd() {
    console.log("✅ AdMob Ad Loaded!");
    alert("🎥 AdMob Ad Shown!");
}
function showUnityAd() {
    console.log("✅ Unity Ad Loaded!");
    alert("🎥 Unity Ad Shown!");
}
function showAd() {
    showAdMobAd();
    showUnityAd();
}