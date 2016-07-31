import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// post has been created 
				// navigate user
				// by calling this.context.router.push 
				// with new path to navigate to
				this.context.router.push('/');
			});
	}

	render() {

		const { fields: {title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" placeholder="Yeezy What's Good" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" placeholder="Music" className="form-control" {...categories} />
				</div>
				<div className="text-help">
					{categories.touched ? categories.error : ''}
				</div>
				
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>
				<div className="text-help">
					{content.touched ? content.error : ''}
				</div>
				
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
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