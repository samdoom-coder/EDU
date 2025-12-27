import React, { useEffect } from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://schoolos.seedyai.com/' }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback
        originWhitelist={['*']}
        onPermissionRequest={(event: any) => {
          event.nativeEvent.grant(event.nativeEvent.resources);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
