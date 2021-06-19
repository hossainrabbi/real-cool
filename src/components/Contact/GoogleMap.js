import React from 'react';

const GoogleMap = ({ className }) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116624.41272700035!2d89.1799275625161!3d24.012972086248986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1624109584842!5m2!1sen!2sbd"
            loading="lazy"
            title="Pabna map"
            className={className}
        />
    );
};

export default GoogleMap;
