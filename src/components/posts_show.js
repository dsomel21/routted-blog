import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

	componentWillMount(){
		this.props.getPost(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.params.id);
	}

	render() {
		/* props will be null at first... */
		const { post } = this.props;

		if (!post){
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
				Delete Post</button>
				<Link to="/" className="btn btn-primary">Back</Link>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		post: state.posts.post
	};
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);