import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const loadRecaptchaScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById('recaptcha-script')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.id = 'recaptcha-script';
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadRecaptchaScript().then(() => {
      if (window.grecaptcha && !recaptchaRef.current) {
        recaptchaRef.current = window.grecaptcha.render('recaptcha', {
          sitekey: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
        });
      }
    }).catch((error) => {
      console.error('Error loading reCAPTCHA script:', error);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const captchaResponse = window.grecaptcha.getResponse();

    if (!captchaResponse) {
      setPopupType('error');
      setPopupMessage('Please complete the CAPTCHA.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Automatically close popup after 3 seconds
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then(() => {
        setPopupType('success');
        setPopupMessage('Yay! Your message has been sent successfully!');
      }, (error) => {
        setPopupType('error');
        setPopupMessage('Whoopsie daisy! Something is not right. If the issue persists, try to email manually.');
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setShowPopup(true);
        setFormData({ name: '', email: '', message: '' });
        window.grecaptcha.reset();
        setTimeout(() => setShowPopup(false), 3000); // Automatically close popup after 3 seconds
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="5"
                required
              />
            </div>
            <div id="recaptcha" className="g-recaptcha text-gray-700" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}></div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform ${
              popupType === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ width: '300px', textAlign: 'center' }}
          >
            <p className={`font-bold ${
  popupType === 'success' ? 'text-green-500' : popupType === 'error' ? 'text-red-500' : 'text-gray-700'
}`}>
  {popupMessage}
</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;