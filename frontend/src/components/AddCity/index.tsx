import React, { ChangeEvent, useEffect } from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useData } from '@/contexts/DataContext';

import Input from '@/components/Input';
import TextArea from '../TextArea';
import Button from '@/components/Button';
import ImageUploader from '@/components/ImageUploader';

import Container from '@/styles/components/AddCity';

const schemaValidation = yup.object().shape({
  city: yup.string().required('Campo cidade é obrigatório.'),
  cityDescription: yup
    .string()
    .max(210)
    .required('Descrição da cidade é obrigatória.'),
  cityDetails: yup.string().max(150),
});

interface IAddCity {
  goNextStep: () => void;
}

export interface ICityData {
  city: string;
  cityDescription: string;
  cityDetails: string;
}

function AddCity({ goNextStep }: IAddCity) {
  const {
    cityData,
    setCityData,
    cityImage,
    setCityImage,
    cityImageURL,
    setCityImageURL,
  } = useData();

  const methods = useForm<ICityData>({
    resolver: yupResolver(schemaValidation),
    defaultValues: cityData,
    mode: 'onChange',
  });

  const { handleSubmit, watch } = methods;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files instanceof FileList) {
      setCityImage(event.target.files[0]);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (cityImage) {
      setCityImageURL(URL.createObjectURL(cityImage));
    }
  }, [cityImage]);

  const handleRemoveImage = () => {
    setCityImage(undefined);
  };

  const onSubmit: SubmitHandler<ICityData> = async (cityData, event) => {
    event?.preventDefault();
    setCityData(cityData);
    goNextStep();
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div id="title">
          <div>01</div>
          <h1>Adicione uma cidade</h1>
        </div>

        <div id="content">
          <div id="sub-title">
            <h2>Dados da cidade</h2>
          </div>

          <div id="city">
            <p>Nome da cidade</p>
            <Input type="single" name="city" />
          </div>

          <p>Foto da cidade</p>
          <ImageUploader
            onClick={handleRemoveImage}
            onChange={handleInputChange}
            image={cityImage}
            imageURL={cityImageURL}
            name="cityPicture"
          />

          <p>Descrição da cidade</p>
          <div id="description">
            <span>Máximo 210 caracteres</span>
            <TextArea name="cityDescription" />
          </div>

          <p>Detalhes</p>
          <div id="details">
            <span>Máximo 110 caracteres</span>
            <TextArea name="cityDetails" />
          </div>

          <div id="bottom">
            <div id="warn">
              <ErrorOutlineOutlined />
              <span>
                Preencha todos os <br></br> dados com cuidado
              </span>
            </div>

            <Button model="blue">Próximo</Button>
          </div>
        </div>
      </Container>
    </FormProvider>
  );
}

export default AddCity;
