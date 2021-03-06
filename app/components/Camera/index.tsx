import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen(props) {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const camera = useRef();
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
		setTimeout(() => {
			props.refrence(camera);
		}, 2000);
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={styles.container}>
			<Camera ref={camera} style={styles.camera} type={props.type}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							camera.current.takePictureAsync().then((val) => {
								console.log(val);
							}); // setType(
							// 	type === Camera.Constants.Type.back
							// 		? Camera.Constants.Type.front
							// 		: Camera.Constants.Type.back
							// );
						}}
					>
						{/* <Text style={styles.text}> FerhatPay </Text> */}
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		margin: 20,
	},
	button: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		color: 'white',
	},
});
