import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="inicio" options={{ headerShown: false }}/>
    </Stack>
  );
}