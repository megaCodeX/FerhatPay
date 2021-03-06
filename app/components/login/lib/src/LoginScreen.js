import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Plane, Bounce } from 'react-native-animated-spinkit';

/**
 * ? Local Imports
 */
import Logo from './components/Logo/Logo';
import styles, { container } from './LoginScreen.style';
import BottomContainer from './components/BottomContainer/BottomContainer';

const defaultBackground =
	'https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80';

const LoginScreen = (props) => {
	const {
		source,
		loginText,
		signupText,
		spinnerType,
		spinnerSize,
		spinnerColor,
		onPressLogin,
		spinnerStyle,
		spinnerEnable,
		onPressSignup,
		spinnerVisibility,
		loginButtonTextStyle,
		loginButtonBackgroundColor,
		onReset,
	} = props;

	const [cardState, setCardState] = useState(true);

	renderSpinner = () => (
		<View style={styles.spinnerStyle}>
			<Bounce animating={spinnerVisibility} size={48} color="#FFF" />
		</View>
	);

	renderLoginButton = () =>
		cardState ? (
			<TouchableOpacity style={styles.loginButtonStyle} onPress={onPressLogin}>
				<Text style={loginButtonTextStyle}>LOGIN</Text>
			</TouchableOpacity>
		) : (
			<TouchableOpacity style={styles.loginButtonStyle} onPress={onReset}>
				<Text style={loginButtonTextStyle}>RESET PASSWORD</Text>
			</TouchableOpacity>
		);

	return (
		<KeyboardAvoidingView behavior="position" style={[container(loginButtonBackgroundColor)]}>
			<View style={container(loginButtonBackgroundColor)}>
				<ImageBackground
					source={source}
					// borderRadius={24}
					resizeMode="cover"
					style={styles.imagebackgroundStyle}
				>
					<View style={styles.blackoverlay}>
						<SafeAreaView style={styles.safeAreaViewStyle}>
							<View style={styles.loginContainer}>{/* <Logo {...props} /> */}</View>
							<BottomContainer
								cardState={cardState}
								onPressSignup={() => {
									setCardState(!cardState);
									onPressSignup && onPressSignup();
								}}
								{...props}
							/>
						</SafeAreaView>
					</View>
				</ImageBackground>
				{/* {spinnerEnable && spinnerVisibility ? renderSpinner() : renderLoginButton()} */}
				{renderLoginButton()}
			</View>
			{/* <Text style={{ fontSize: 25, color: '#000' }}>kknjnjbjb</Text> */}
		</KeyboardAvoidingView>
	);
};

LoginScreen.propTypes = {
	loginText: PropTypes.string,
	spinnerEnable: PropTypes.bool,
	spinnerType: PropTypes.string,
	spinnerSize: PropTypes.number,
	spinnerColor: PropTypes.string,
	spinnerVisibility: PropTypes.bool,
	loginButtonBackgroundColor: PropTypes.string,
};

LoginScreen.defaultProps = {
	spinnerSize: 30,
	loginText: 'LOGIN',
	spinnerEnable: false,
	spinnerColor: '#fdfdfd',
	signupText: 'Sign Me Up',
	spinnerVisibility: false,
	spinnerType: 'ThreeBounce',
	source: { uri: defaultBackground },
	loginButtonBackgroundColor: '#282828',
	loginButtonTextStyle: styles.loginButtonTextStyle,
};

export default LoginScreen;
