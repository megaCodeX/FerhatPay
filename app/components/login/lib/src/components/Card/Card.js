import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
// import TextInput from "react-native-improved-text-input";
import styles, { _textStyle, _textInputStyle } from './Card.style';

const Card = (props) => {
	const {
		title,
		value,
		textStyle,
		textColor,
		titleStyle,
		titleColor,
		placeholder,
		onChangeText,
		selectionColor,
		iconComponent,
		secure,
		keyboardType,
	} = props;
	return (
		<View style={styles.container}>
			<View style={styles.containerGlue}>
				<View style={{ width: 35, justifyContent: 'center' }}>
					{iconComponent || <Icon size={30} name="user-o" color="black" type="FontAwesome" {...props} />}
				</View>
				<View style={styles.textContainer}>
					<Text style={titleStyle || _textStyle(titleColor)}>{title}</Text>
					<TextInput
						value={value}
						placeholder={placeholder}
						placeholderTextColor="#ccc"
						selectionColor={selectionColor}
						onChangeText={onChangeText}
						secureTextEntry={secure}
						keyboardType={keyboardType}
						style={textStyle || _textInputStyle(textColor)}
						// {...props}
					/>
				</View>
			</View>
		</View>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	textColor: PropTypes.string,
	titleColor: PropTypes.string,
	placeholder: PropTypes.string,
	selectionColor: PropTypes.string,
	secure: PropTypes.bool,
};

Card.defaultProps = {
	title: 'User Name',
	textColor: 'black',
	titleColor: '#c7c5c6',
	placeholder: 'John Doe',
	selectionColor: '#757575',
	secure: false,
};

export default Card;
