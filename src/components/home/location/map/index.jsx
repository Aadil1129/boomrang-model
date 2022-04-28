import React from "react";

function Map() {
  return (
    <div className="map-container" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112001.35064021424!2d77.1883008!3d28.688384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1631979865668!5m2!1sen!2sin"
        width="100%"
        height="500"
        loading="lazy"
        title="my map"
      ></iframe>
    </div>
  );
}

export default Map;
