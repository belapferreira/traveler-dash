import React, { ChangeEvent, useEffect, useState } from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { fileApi } from '@/services/api';
import { createCity } from '@/services/city.service';
import { createLocal } from '@/services/local.service';
import { useData, initialValueContext } from '@/contexts/DataContext';

import Input from '@/components/Input';
import TextArea from '../TextArea';
import ImageUploader from '@/components/ImageUploader';
import CheckBox from '@/components/CheckBox';
import Button from '@/components/Button';

import { categoryIcon } from '@/utils/categoryIcon';

import Container from '@/styles/components/AddLocal';

const schemaValidation = yup.object().shape({
  local: yup.string().required('Campo local é obrigatório.'),
  localDescription: yup.string().required('Descrição do local é obrigatória.'),
  CEP: yup.string().max(9).required('Campo CEP é obrigatório.'),
  street: yup.string().required('Campo street é obrigatório.'),
  neighborhood: yup.string().required('Campo bairro é obrigatório.'),
  number: yup.string().required('Campo número é obrigatório.'),
  phone: yup.string().required('Campo phone é obrigatório.'),
});

export interface ILocalData {
  local: string;
  localDescription: string;
  foodDrink?: boolean;
  touristAttractions?: boolean;
  events?: boolean;
  highlight?: boolean;
  CEP: string;
  street: string;
  neighborhood: string;
  number: string;
  phone: string;
}

function AddLocal() {
  const {
    cityData,
    setCityData,
    setCityImage,
    setCityImageURL,
    cityImage,
    localImage,
    setLocalImage,
    localImageURL,
    setLocalImageURL,
  } = useData();

  const methods = useForm<ILocalData>({
    resolver: yupResolver(schemaValidation),
  });

  const router = useRouter();

  const { handleSubmit, watch } = methods;

  const IconFoodCategory = categoryIcon('Comidas e bebidas');
  const IconPlaceCategory = categoryIcon('Pontos turísticos');
  const IconEventCategory = categoryIcon('Eventos organizados');

  const slug = (value: string) => {
    const valueFormatted = value.split(' ').join('-').toLocaleLowerCase();
    return valueFormatted;
  };

  const foodDrinkDisabled = watch('touristAttractions') || watch('events');
  const touristAttractionsDisabled = watch('foodDrink') || watch('events');
  const eventsDisabled = watch('foodDrink') || watch('touristAttractions');

  const category = () => {
    let localCategory;

    if (watch('touristAttractions')) {
      localCategory = 'Pontos turísticos';
    } else if (watch('foodDrink')) {
      localCategory = 'Comidas e bebidas';
    } else if (watch('events')) {
      localCategory = 'Eventos organizados';
    } else {
      localCategory = '';
    }

    return localCategory;
  };

  const statusValidationCheckboxes =
    foodDrinkDisabled || touristAttractionsDisabled || eventsDisabled;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files instanceof FileList) {
      setLocalImage(event.target.files[0]);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (localImage) {
      setLocalImageURL(URL.createObjectURL(localImage));
    }
  }, [localImage]);

  const handleRemoveImage = () => {
    setLocalImage(undefined);
  };

  const onSubmit: SubmitHandler<ILocalData> = async (localData, event) => {
    event?.preventDefault();

    const images = [cityImage, localImage];

    const data = new FormData();
    images.map((image) => data.append('files', image as Blob));
    fileApi.post('/upload', data);

    try {
      await createCity({
        createdAt: new Date(),
        updatedAt: new Date(),
        city: cityData.city,
        picture: `/images/${cityImage?.name}`,
        description: cityData.cityDescription,
        detail: cityData.cityDetails,
        slug: slug(cityData.city),
      });

      await createLocal({
        createdAt: new Date(),
        udatedAt: new Date(),
        name: localData.local,
        city: cityData.city,
        description: localData.localDescription,
        category: category(),
        rate: 0,
        picture: `/images/${localImage?.name}`,
        status: localData.highlight ? 'highlighted' : 'regular',
        phone: localData.phone,
        address: `${localData.street}, ${localData.number} - ${localData.neighborhood} ${localData.CEP}`,
        slug: slug(localData.local),
      });

      setCityData(initialValueContext.cityData);
      setCityImage(initialValueContext.cityImage);
      setCityImageURL(initialValueContext.cityImageURL);

      setLocalImage(undefined);
      setLocalImageURL('');
      methods.reset();

      toast.success(`${cityData.city} successfully created! ✔️`, {
        theme: 'colored',
      });
      router.push('/city');
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || 'It was not possible create a city.',
        {
          theme: 'colored',
        },
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div id="title">
          <div>02</div>
          <h1>Adicione um local</h1>
        </div>

        <div id="content">
          <div id="sub-title">
            <h2>Dados Básicos</h2>
          </div>

          <div id="local">
            <p>Nome da local</p>
            <Input type="single" name="local" />
          </div>

          <p>Foto do local</p>
          <ImageUploader
            onClick={handleRemoveImage}
            onChange={handleInputChange}
            image={localImage}
            imageURL={localImageURL}
            name="localPicture"
          />

          <p>Descrição do local</p>
          <div id="description">
            <span>Máximo 320 caracteres</span>
            <TextArea name="localDescription" />
          </div>

          <p>Selecione uma categoria</p>
          <div id="category">
            <div className="category-card">
              <div id="top-category-card">
                <IconFoodCategory />
                <CheckBox
                  name="foodDrink"
                  value="Comidas e bebidas"
                  disabled={foodDrinkDisabled}
                />
              </div>
              <div id="bottom-category-card">
                Comida <br></br> e Bebida
              </div>
            </div>

            <div className="category-card">
              <div id="top-category-card">
                <IconPlaceCategory />
                <CheckBox
                  name="touristAttractions"
                  value="Pontos turísticos"
                  disabled={touristAttractionsDisabled}
                />
              </div>
              <div id="bottom-category-card">
                Pontos <br></br> Turísticos
              </div>
            </div>

            <div className="category-card">
              <div id="top-category-card">
                <IconEventCategory />
                <CheckBox
                  name="events"
                  value="Eventos organizados"
                  disabled={eventsDisabled}
                />
              </div>
              <div id="bottom-category-card">
                Eventos <br></br> Organizados
              </div>
            </div>
          </div>
          {!statusValidationCheckboxes && (
            <strong id="checkBoxes-warn">
              Uma categoria deve ser selecionada.
            </strong>
          )}

          <div id="status">
            <CheckBox name="highlight" value="highlighted" disabled={false} />
            <label>Definir local como destaque</label>
          </div>

          <div id="address">
            <h2>Endereço e contato</h2>
          </div>

          <div id="address-content">
            <div id="top-address">
              <div id="CEP">
                <p>CEP</p>
                <Input type="single" name="CEP" />
              </div>

              <div id="street">
                <p>Rua</p>
                <Input type="single" name="street" />
              </div>
            </div>

            <div id="bottom-address">
              <div id="neighborhood">
                <p>Bairro</p>
                <Input type="single" name="neighborhood" />
              </div>

              <div id="number">
                <p>Número</p>
                <Input type="single" name="number" />
              </div>
            </div>

            <div id="phone">
              <p>Telefone</p>
              <Input type="single" name="phone" />
            </div>
          </div>

          <div id="bottom">
            <div id="warn">
              <ErrorOutlineOutlined />
              <span>
                Preencha todos os <br></br> dados com cuidado
              </span>
            </div>

            <Button model="green" type="submit">
              Concluir cadastro
            </Button>
          </div>
        </div>
      </Container>
    </FormProvider>
  );
}

export default AddLocal;
