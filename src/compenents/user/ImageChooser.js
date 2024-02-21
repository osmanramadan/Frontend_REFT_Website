import React from 'react';
import { Figure } from 'react-bootstrap';

const ImageChooser = ({ handleSelect, img }) => {
  const selectImage = (e) => {
    handleSelect(e);
  };

  return (
    <div>
      <label
        style={{ border: 'none', backgroundColor: 'unset' }}
        for="upload-image"
      >
        <Figure>
          <Figure.Image
            width={110}
            height={120}
            alt="Profile Image"
            src={img}
            roundedCircle
          />
        </Figure>
        {/* <img style={{ height: '110px', width: '120px' }} src={img} />{' '} */}
      </label>

      <input
        type="file"
        id="upload-image"
        onChange={selectImage}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageChooser;
