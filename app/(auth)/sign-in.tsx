import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
	return (
		<View>
			<Text>Sign In</Text>
			<Link href="/(auth)/sign-up">Sign In</Link>
		</View>
	);
};

export default SignIn;
