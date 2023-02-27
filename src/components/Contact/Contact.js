import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { Item, NameWrapper, Letters, Text, Phone, Btn } from './Contact.styled';

export const Contact = ({ info: { id, name, phone }, onDelete }) => {
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
            <BsTelephoneFill size={12} /> {phone}
          </Phone>
        </div>
      </NameWrapper>
      <Btn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <MdDelete size={14} />
      </Btn>
    </Item>
  );
};

Contact.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
