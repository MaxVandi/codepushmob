package com.codepushtestios;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    new CodePush(
    "RO4_VmIqPIVUOKrnUU7RwBacdNYG7cefd3de-91e3-4da9-974e-9f748d672837",
    getApplicationContext(),
    BuildConfig.DEBUG,
    R.string.CodePushPublicKey)
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "codepushtestios";
    }
}
