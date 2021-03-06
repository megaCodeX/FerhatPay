import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	input: {
		height: 44,
		fontSize: 15,
		lineHeight: 15,
		paddingHorizontal: 0,
	},
	inputIcon: {
		paddingLeft: 7,
	},
	inputMultiline: {
		height: 122,
		textAlignVertical: 'top',
		paddingVertical: 10.5,
	},
	viewRow: {
		flexDirection: 'row',
	},
	viewIcon: {
		height: 38,
		width: 28,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	viewInput: {
		flex: 1,
	},
});
