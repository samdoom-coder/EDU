import React, { useEffect } from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  Linking
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

  const handleDownload = (event: any) => {
    const { url } = event.nativeEvent;

    // open download link in external browser
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://seedyaios.vercel.app/' }}
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
        onFileDownload={handleDownload}
      />
    </SafeAreaView>
  );
};

export default App;