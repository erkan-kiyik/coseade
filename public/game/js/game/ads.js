// Rewarded-ad integration via Google's Ad Placement API for HTML5 games
// (runs on the same adsbygoogle.js tag as AdSense — see the <head> of
// index.html, where `window.adBreak` is defined as a queue-flushing stub
// ahead of the async script load). Used to gate the "watch ad, get a free
// supply crate" button in metaui.js.

// Wall-clock cap on how long we wait for the ad break to settle. Guards
// against a blocked/slow ad network leaving the button stuck on "loading".
const REWARD_TIMEOUT_MS = 12000;

// Requests a rewarded ad break for `adUnit`. Calls onSettled(true) only if
// the player watched the ad through to completion (adViewed); onSettled(false)
// for every other outcome (dismissed, no fill, error, or timeout).
export function requestRewardedAd({ adUnit, onSettled }) {
  if (typeof window.adBreak !== 'function') { onSettled(false); return; }

  let settled = false;
  const finish = (rewarded) => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    onSettled(rewarded);
  };
  const timer = setTimeout(() => finish(false), REWARD_TIMEOUT_MS);

  window.adBreak({
    type: 'reward',
    name: adUnit,
    beforeReward: (showAdFn) => showAdFn(),
    adViewed: () => finish(true),
    adDismissed: () => finish(false),
    adBreakDone: () => finish(false),
  });
}
