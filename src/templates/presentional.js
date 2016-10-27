module.exports = function(filename) {
    return `import React, { PropTypes } from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from './styles/${filename}';

const ${filename} = () => (
	<View>
		<Text>Hello</Text>
	</View>
);

export default ${filename};
`;
}