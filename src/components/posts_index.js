import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	
	/* Life-Cycle Method -- Automatically called :) */
	componentWillMount() {
		this.props.getPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="posts/new/" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				LIST THING
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({getPosts}, dispatch);
// }

export default connect(null, { getPosts })(PostsIndex);