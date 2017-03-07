import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { chain } from 'lodash';

const MenuList = (props) => {
  if (!props.pageConfig) throw new Error('pass in the page config for great justice');

  return (
    <ul>
      { chain(props.pageConfig)
          .flatMap(({ title, slug}) => [
              <Link to={ slug } key={ slug }> { title } </Link>,
              <span key={ title.concat(slug) }>|</span>
            ]
          )
          .slice(0, -1)
          .value()
      }
    </ul>
  );
};

MenuList.propTypes = {
  pageConfig: PropTypes.object.isRequired
};

export default MenuList;
