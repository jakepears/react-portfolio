/** @format */

import { useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let tempErrors = {};
		if (!formData.name.trim()) tempErrors.name = 'Name is required';
		if (!formData.email.trim()) {
			tempErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = 'Email is invalid';
		}
		if (!formData.message.trim()) tempErrors.message = 'Message is required';
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Here you would typically send the form data to a server
			console.log('Form submitted:', formData);
			// Clear form after submission
			setFormData({ name: '', email: '', message: '' });
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		if (!value.trim()) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
			}));
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: '',
			}));
		}
	};

	return (
		<section className='container mx-auto p-6'>
			<h2 className='text-3xl font-bold mb-6'>Contact Me</h2>
			<form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
				<div className='mb-4'>
					<label htmlFor='name' className='block mb-2'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
						className='w-full p-2 border rounded'
					/>
					{errors.name && (
						<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
					)}
				</div>
				<div className='mb-4'>
					<label htmlFor='email' className='block mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className='w-full p-2 border rounded'
					/>
					{errors.email && (
						<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
					)}
				</div>
				<div className='mb-4'>
					<label htmlFor='message' className='block mb-2'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						onBlur={handleBlur}
						className='w-full p-2 border rounded'
						rows='4'></textarea>
					{errors.message && (
						<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
					)}
				</div>
				<button
					type='submit'
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
					Send Message
				</button>
			</form>
		</section>
	);
}
