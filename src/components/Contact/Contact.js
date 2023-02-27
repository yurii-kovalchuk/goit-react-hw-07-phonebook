import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { Item, NameWrapper, Letters, Text, Phone, Btn } from './Contact.styled';

export const Contact = ({ info: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <NameWrapper>
        <Letters>
          {name
            .split(' ')
            .map(item => item.slice(0, 1))
            .join('')
            .toUpperCase()}
        </Letters>
        <div>
          <Text>{name}</Text>
          <Phone>
            <BsTelephoneFill size={12} /> {number}
          </Phone>
        </div>
      </NameWrapper>
      <Btn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <RiDeleteBin2Line size={14} />
      </Btn>
    </Item>
  );
};

Contact.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
