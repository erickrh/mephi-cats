import React from 'react';
import './UploadCatPhoto.css';

function UploadCatPhoto(props) {
  const [isUploaded, setIsUploaded] = React.useState(false);

  const previewPhoto = event => {
    setIsUploaded(true);
    const output = document.querySelector('.output');
    if (event.target.files[0]) {
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = () => URL.revokeObjectURL(output.src);
    }
  };

  const cleanOutput = () => {
    setIsUploaded(false);
    const input = document.querySelector('.catPhotoFile');
    input.value = '';
  };

  return (
    <>
      <section className="uploadCatSection">
        <h2>Upload a photo of your cat</h2>
        
        <form className='uploadingForm'>
          <input onChange={previewPhoto} type='file' name='file' className='catPhotoFile' />
          
          <button onClick={() => {
            props.uploadCat();
            cleanOutput();
          }}
          className='uploadCatBtn'
          type='button'
          >
            Upload
          </button>
        </form>

        <img
          className={`output ${isUploaded && 'output--active'}`}
          alt="Your upload photo" 
        />
      </section>
    </>
  );
}

export { UploadCatPhoto };