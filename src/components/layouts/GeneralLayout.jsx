import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const GeneralLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

GeneralLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GeneralLayout;
