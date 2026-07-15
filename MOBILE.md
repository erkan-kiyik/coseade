# LinkedBoost AI — Mobile (Android & iOS)

The mobile apps are Capacitor shells that load the deployed web app
(`capacitor.config.ts` → `server.url`). Update that URL to `https://ekkod.com`
once the custom domain is live.

## Android (Google Play)

**Test build (no account needed):**
Every push touching `android/**` runs the "Build Android APK" workflow.
Download `linkedboost-debug-apk` from the workflow's Artifacts and install it
on any Android phone (enable "Install unknown apps").

**Publishing to Google Play:**
1. Create a [Google Play Console](https://play.google.com/console) account — $25 one-time.
2. Generate a signing key:
   `keytool -genkey -v -keystore linkedboost.keystore -alias linkedboost -keyalg RSA -keysize 2048 -validity 10000`
3. Sign the AAB (the workflow's `linkedboost-release-aab` artifact) or configure
   `android/app/build.gradle` with the keystore and run `./gradlew bundleRelease`.
4. Create the app in Play Console → upload the AAB → fill the store listing
   (screenshots, description, privacy policy URL) → submit for review.

## iOS (App Store)

Requires a Mac with Xcode — iOS apps cannot be built on Linux/CI without
Apple certificates.

1. Join the [Apple Developer Program](https://developer.apple.com/programs/) — $99/year.
2. On a Mac: `npm install && npx cap open ios`
3. In Xcode: set your Team under Signing & Capabilities, then
   Product → Archive → Distribute App → App Store Connect.
4. Fill the App Store listing in [App Store Connect](https://appstoreconnect.apple.com) and submit.

⚠️ Apple guideline 4.2 sometimes rejects apps that are only a website wrapper.
To improve approval odds, add native touches before submitting: push
notifications (`@capacitor/push-notifications`), haptics, or offline handling.

## Local development

```bash
npm install
npx cap sync          # copy config into native projects
npx cap open android  # requires Android Studio
npx cap open ios      # requires Xcode (macOS)
```
