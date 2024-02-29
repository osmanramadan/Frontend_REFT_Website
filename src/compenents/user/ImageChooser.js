import React from 'react';
// import { Figure } from 'react-bootstrap';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageChooser = ({ handleSelect }) => {
  const selectImage = (e) => {
    handleSelect(e);
  };

  return (
    <div>
      <label
        style={{ border: 'none', backgroundColor: 'unset' }}
        for="upload-image"
      >
        <FontAwesomeIcon
          style={{
            marginRight: '3px',
            color: 'black',
            height: '80px',
            width: '80px',
          }}
          icon={faCircleUser}
        />

        {/* <Figure>
          <Figure.Image
            width={110}
            height={120}
            alt="Profile Image"
            src={img}
            roundedCircle
          />
        </Figure> */}
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
