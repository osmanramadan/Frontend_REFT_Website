import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const VideoChooser = ({ handleSelect, video }) => {
  const selectVideo = (e) => {
    handleSelect(e);
  };

  return (
    <div>
      <label
        style={{ border: 'none', backgroundColor: 'unset' }}
        for="upload-video"
      >
        <FontAwesomeIcon
          style={{ height: '55px', width: '55px', color: '#c9c9c9' }}
          icon={faYoutube}
        />
      </label>

      <input
        type="file"
        id="upload-video"
        onChange={selectVideo}
        accept="video/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default VideoChooser;
