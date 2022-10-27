// Styles
import './contact.css';

const Contact = () => {
	return (
		<section id='contact' className='section contact'>
			<h2 class='section__title'>Contact Me</h2>
			<p class='contact__description'>
				Use the form below to contact me for my CV and anything else you may
				want to ask!
			</p>
			<form id='contact-form' class='contact-form' autoComplete='off'>
				<div class='form-group name'>
					<input
						type='name'
						name='name'
						class='form-control'
						id='name'
						placeholder='Enter your name...'
					/>
					<label for='name'>Name</label>
				</div>

				<div class='form-group email'>
					<input
						type='email'
						name='email'
						class='form-control'
						id='email'
						placeholder='Enter your e-mail address...'
						required
					/>
					<label for='email'>E-mail Address</label>
				</div>

				<div class='form-group subject'>
					<input
						type='text'
						name='subject'
						class='form-control'
						id='subject'
						placeholder='Enter your e-mail subject...'
						required
					/>
					<label for='subject'>E-mail Subject</label>
				</div>

				<div class='form-group message'>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						placeholder='Write your message here...'
						wrap='soft'
						required
					></textarea>
					<label for='message'>Message</label>
				</div>

				<button class='submit-btn' id='submitBtn' type='submit'>
					Submit
				</button>
			</form>
		</section>
	);
};
export default Contact;
