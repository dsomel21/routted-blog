import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/index';

class PostsIndex extends Component {
	
	/* Life-Cycle Method -- Automatically called :) */
	componentWillMount() {
		this.props.getPosts();
	}

	render() {
		return (
			<div>
				LIST THING
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({getPosts}, dispatch);
// }

export default connect(null, mapDispatchToProps)(PostsIndex);