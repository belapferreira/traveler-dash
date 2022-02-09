import React, { ChangeEvent } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Container from '@/styles/components/ImageUploader';

interface IImageUploader {
  onClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  image: File | undefined;
  imageURL: string;
  name: string;
}

function ImageUploader({
  onClick,
  onChange,
  image,
  imageURL,
  name,
}: IImageUploader) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Container>
            {image ? (
              <div id="selected-image">
                <img src={imageURL} />
                <button onClick={onClick}>Remover foto</button>
              </div>
            ) : (
              <div id="image-uploader">
                <div>
                  <label htmlFor="add-image">+ Adicionar uma foto</label>
                  <input
                    type="file"
                    accept="image/*"
                    id="add-image"
                    onChange={onChange}
                  />
                </div>
              </div>
            )}
          </Container>

          {!image && <strong>A imagem é obrigatória.</strong>}
        </>
      )}
    />
  );
}

export default ImageUploader;
