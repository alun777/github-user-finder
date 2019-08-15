import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  const { title } = props;

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' />
        &nbsp;
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github User Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
