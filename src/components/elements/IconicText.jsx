import PropTypes from 'prop-types';
import { Stack, styled } from '@mui/material';

const Item = styled('span')(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(0.5),
}));

const IconicText = ({ icon: IconComponent, text }) => {
  return (
    <Stack direction="row" spacing={0.1} sx={{ alignItems: 'center' }}>
      <Item>
        <IconComponent />
      </Item>
      <Item>{text}</Item>
    </Stack>
  );
};

IconicText.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconicText;
