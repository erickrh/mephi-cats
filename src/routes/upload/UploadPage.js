import React from 'react';
import { useFetchCats } from '../../hooks/useFetchCats';
import { UploadCatPhoto } from '../../ui/UploadCatPhoto';

function UploadPage() {
  const { uploadCat } = useFetchCats();

  return (
    <UploadCatPhoto uploadCat={uploadCat} />
  );
}

export { UploadPage };