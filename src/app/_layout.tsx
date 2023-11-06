import { Stack } from 'expo-router/stack';
import { AppProvider } from '../config/provider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="answer" />
          <Stack.Screen name="result" />
        </Stack>
      </SafeAreaView>
    </AppProvider>
  )
}