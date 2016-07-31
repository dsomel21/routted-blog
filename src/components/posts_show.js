import React, { Component } from 'react';

class PostsShow extends Component {
	render() {
		debugger;
		return (
			<div>
				Showing a Gucci Post! {this.props.params.id}
			</div>
		)
	}
}

export default PostsShow;