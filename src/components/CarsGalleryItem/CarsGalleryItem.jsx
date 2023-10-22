import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Modal from 'components/Modal';
import { ReactComponent as IconFavorite } from '../../icons/heart-normal.svg';
import noImageIcon from '../../images/noImageIcon-200x200.png';

import {
  Card,
  Thumb,
  Image,
  Info,
  ModelInfo,
  Model,
  Options,
  OptionsTxt,
} from 'components/CarsGalleryItem/CarsGalleryItem.styled';
import { IconWrap } from 'components/HomeContent/HomeContent.styled';

const CarsGalleryItem = ({ element }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); //!

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = element;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const feature = accessories[0];

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };

  const handleFavorite = e => {
    // e.stopPropagation();
    // setIsFavorite(element.id);
  }; //!

  return (
    <>
      <Card>
        <Button name="favorite" type="button" onClick={toggleFavorite}>
          <IconWrap>
            <IconFavorite />
          </IconWrap>
        </Button>

        <Thumb>
          {img ? (
            <Image src={img} alt={`${make} ${model}`} />
          ) : (
            <Image src={noImageIcon} alt={`${make} ${model}`} />
          )}
        </Thumb>

        <Info>
          <ModelInfo>
            <p>
              {make}
              <Model> {model}</Model>, {year}
            </p>
            <p>{rentalPrice}</p>
          </ModelInfo>

          <Options>
            <OptionsTxt>
              <p>{city}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{country}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{rentalCompany}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{type}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{model}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{id}</p>
            </OptionsTxt>
            <OptionsTxt>
              <p>{feature}</p>
            </OptionsTxt>
          </Options>
        </Info>

        <Button
          name="learn"
          type="button"
          text="Learn more"
          onClick={toggleModal}
        />
      </Card>

      {showModal && (
        <Modal onClose={toggleModal}>
          <p>Modal</p>
          {/* <SideBar onClose={toggleModal} /> */}
        </Modal>
      )}
    </>
  );
};

CarsGalleryItem.propTypes = {
  element: PropTypes.shape({
    // webformatURL: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    // tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarsGalleryItem;
