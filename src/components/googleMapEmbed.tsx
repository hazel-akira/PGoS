import React from 'react';

const googleMapEmbed = ({ locationUrl, height = "400px", borderRadius = "rounded-xl" }) => {
  return (
    <div className={`w-full overflow-hidden ${borderRadius}`} style={{ height }}>
      <iframe
        src={locationUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
  );
};

export default googleMapEmbed;
