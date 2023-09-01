import * as React from 'react';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
    return (
        <div style={{
            backgroundImage: `url(/home_page.png)`,
            height: '91vh',
            marginTop: '-10vh'
        }}>
            {/* call contact form function */}
            <ContactForm></ContactForm>
        </div>
    );
}