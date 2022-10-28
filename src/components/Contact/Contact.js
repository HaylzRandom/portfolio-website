import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// Styles
import './contact.css';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_4t5y6hv',
				'template_skmb7o9',
				form.current,
				'WRdR97UjnnZ-hSL8h'
			)
			.then(
				(result) => {
					toast.success('Email has been sent! Thank you!');
				},
				(error) => {
					toast.error('Unfortunately there was an error', error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id='contact' className='section contact'>
			<h2 className='section__title'>Contact Me</h2>
			<p className='contact__description'>
				Use the form below to contact me for my CV and anything else you may
				want to ask!
			</p>
			<form
				id='contact-form'
				className='contact-form'
				autoComplete='off'
				ref={form}
				onSubmit={sendEmail}
			>
				<div className='form-group name'>
					<input
						type='name'
						name='name'
						className='form-control'
						id='name'
						placeholder='Enter your name...'
					/>
					<label htmlFor='name'>Name</label>
				</div>

				<div className='form-group email'>
					<input
						type='email'
						name='email'
						className='form-control'
						id='email'
						placeholder='Enter your e-mail address...'
						required
					/>
					<label htmlFor='email'>E-mail Address</label>
				</div>

				<div className='form-group subject'>
					<input
						type='text'
						name='subject'
						className='form-control'
						id='subject'
						placeholder='Enter your e-mail subject...'
						required
					/>
					<label htmlFor='subject'>E-mail Subject</label>
				</div>

				<div className='form-group message'>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						placeholder='Write your message here...'
						wrap='soft'
						required
					></textarea>
					<label htmlFor='message'>Message</label>
				</div>

				<button className='submit-btn' id='submitBtn' type='submit'>
					Submit
				</button>
			</form>
		</section>
	);
};
export default Contact;
