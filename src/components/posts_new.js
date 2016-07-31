import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {

		const { fields: {title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create New Post</h3>

				<div className={"form-group"}>
					<label>Title</label>
					<input type="text" placeholder="Yeezy What's Good" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				
				<div className="form-group">
					<label>Categories</label>
					<input type="text" placeholder="Music" className="form-control" {...categories} />
				</div>
				<div className="text-help">
					{categories.touched ? categories.error : ''}
				</div>
				
				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>
				<div className="text-help">
					{content.touched ? content.error : ''}
				</div>
				
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(val) {
	const error = {};
	if (!val.title){
		error.title = 'Enter a title';
	}
	if (!val.categories){
		error.categories = 'Enter a categories';
	}
	if (!val.content){
		error.content = 'Enter a content';
	}

	return error;
}

export default reduxForm(
	{
		form: 'PostsNewForm',
		fields: ['title', 'categories', 'content'],
		validate
	},
	null,
	{createPost})(PostsNew);