import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-background">
			<Text className="text-5xl font-bold font-sans-extrabold">Home</Text>

			<Link
				href="/onboarding"
				className="mt-4 font-sans-bold p-4 rounded bg-primary text-white"
			>
				Go to Onboarding
			</Link>

			<Link
				href="/(auth)/sign-in"
				className="mt-4 font-sans-bold p-4 rounded bg-primary text-white"
			>
				Go to Sign In
			</Link>
			<Link
				href="/(auth)/sign-up"
				className="mt-4 font-sans-bold p-4 rounded bg-primary text-white"
			>
				Go to Sign Up
			</Link>
		</SafeAreaView>
	);
}
