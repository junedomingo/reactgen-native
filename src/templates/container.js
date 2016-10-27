module.exports = function(filename) {
    	return `import React, { Component, PropTypes } from 'react';
import {
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles/${filename}';
// import * as postsActions from './posts.actions';

class ${filename} extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<View>
				<Text>Hello</Text>
			</View>
		);
	}
}

${filename}.propTypes = {
	// actions: PropTypes.object.isRequired,
	// posts: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state, ownProps) {
	return {
		// posts: state.posts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		// actions: bindActionCreators(postsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(${filename});
`;
}