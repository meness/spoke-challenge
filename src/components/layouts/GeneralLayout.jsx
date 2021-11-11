import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import GeneralHeader from '../elements/GeneralHeader';

const GeneralLayout = ({ children }) => {
  return (
    <>
      <GeneralHeader />
      <Container component="main" sx={{ marginBlockStart: 5 }}>
        {children}
      </Container>
    </>
  );
};

GeneralLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GeneralLayout;
