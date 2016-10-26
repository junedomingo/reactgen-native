module.exports = function(filename) {
    return `import React, { PropTypes } from 'react';
import {
    Text,
    View
} from 'react-native';

const ${filename} = () => (
	<View>
		<Text>Hello</Text>
	</View>
);

export default ${filename};
`;
}