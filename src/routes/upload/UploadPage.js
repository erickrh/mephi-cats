import React from 'react';
import './UploadCatPhoto.css';
import { useFetchCats } from '../../hooks/useFetchCats';
import { ReactComponent as UploadSVG } from '../../ui/icons/upload-image.svg';
import { ReactComponent as CloseSVG } from '../../ui/icons/close.svg';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../ui/Loading';

function UploadPage() {
  const { uploadCat, isUploading } = useFetchCats();
  const [isLoadPhoto, setIsLoadPhoto] = React.useState(false);
  const navigate = useNavigate();
  const msg = document.querySelector('.msg');

  const previewPhoto = event => {
    setIsLoadPhoto(true);
    const output = document.querySelector('.output');
    if (event.target.files[0]) {
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = () => URL.revokeObjectURL(output.src);
      if (msg) msg.classList.remove('showElement');
    }
  };

  const cleanOutput = () => {
    setIsLoadPhoto(false);
    const input = document.querySelector('.catPhotoFile');
    input.value = '';
  };

  const goToLikes = () => {
    if (!isUploading) navigate('/likes');
  };

  const sendUploadImageEvent = async () => {
    const msg = document.querySelector('.msg');
    if (isLoadPhoto) {
      await uploadCat();
      cleanOutput();
      goToLikes();
      msg.classList.remove('showElement');
    } else {
      msg.classList.add('showElement');
    }
  };

  return (
    <section>
      <div className="uploadContainer">
        <div className="uploadBoxDotted">
          <h2 className='uploadTitle'>Share your own cat</h2>
        
          <form className='uploadingForm'>
            <div className="inputContainer">
              <label htmlFor="file" name='file' className='labelFile'>
                <UploadSVG className='UploadSVG' />
              </label>
              <input onChange={previewPhoto} id='file' type='file' name='file' className='catPhotoFile' />
            </div>

            <div className="outputContainer">
              <label htmlFor="file" className='labelImg'>
                <img
                  className={`output ${isLoadPhoto && 'output--active'}`}
                  alt="Your upload photo" 
                />
              </label>
              <CloseSVG
                className={`CloseSVG ${isLoadPhoto && 'showElement'}`}
                onClick={cleanOutput}
              />
            </div>

            {isUploading && <Loading />}
            
            <button onClick={sendUploadImageEvent}
              className='uploadCatBtn'
              type='button'
            >
              Upload
            </button>
            
            <span className='msg'>Don&apos;t forget your cat photo!</span>
          </form>
        </div>
      </div>
    </section>
  );
}

export { UploadPage };