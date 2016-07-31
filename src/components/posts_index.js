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

	renderPosts() {
		return this.props.posts.map((p) => {
			return (
				<li className="list-group-item" key={p.id}>
					<Link to={`posts/${p.id}`}>
						<span className="pull-xs-right">{p.categories}</span>
						<strong>{p.title}</strong>
					</Link>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="posts/new/" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts!</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	};
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({getPosts}, dispatch);
// }

export default connect(mapStateToProps, { getPosts })(PostsIndex);