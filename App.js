import React, { Component } from 'react';
import { View, Text } from 'react-native';
import codePush from "react-native-code-push";

class App extends Component {
  render() {
    return (<View style={{flex:1,backgroundColor:'purple',justifyContent:'center',alignItems:'center'}}>
      <Text>Hello Folks</Text>
      <Text style={{color:'white'}}>React Native Rules !</Text>
    </View>)
  }

  // Méthode lifecycle de codepush 
  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for updates.");
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Downloading package.");
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing update.");
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("Up-to-date.");
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("Update installed.");
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
  }
}

App = codePush(App);

export default codePush(App);

// export default codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);