import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import React, { useRef, useState } from 'react';

const PdfChooser = ({ handleSelect, img }) => {
  const selectPdf = (e) => {
    handleSelect(e);
  };

  return (
    <div>
      <label
        style={{ border: 'none', backgroundColor: 'unset' }}
        for="upload-pdf"
      >
        <FontAwesomeIcon
          style={{ height: '55px', width: '55px', color: '#c9c9c9' }}
          icon={faFilePdf}
        />
      </label>

      <input
        type="file"
        id="upload-pdf"
        onChange={selectPdf}
        accept="pdf"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default PdfChooser;
