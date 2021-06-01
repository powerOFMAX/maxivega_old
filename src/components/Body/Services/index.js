import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { servicesList } from '../../../config/info'
import { Wrapper } from './styled'

const MenuItem = ({ title, subtitle, image }) => {
  return (
    <div className='menu-item'>
      <div className='card'>
        <h3 className='card-title'>{title}</h3>
        <h5 style={{whiteSpace: "pre-wrap"}}>{subtitle}</h5>
        <img draggable='false' height='100' src={image} alt='draggable-card' style={{ display: 'flex', margin: 'auto' }}></img>
      </div>
    </div>
  );
};

export const Menu = (list) =>
  list.map((el) => {
    const { key } = el;
    return <MenuItem {...el} key={key} />;
  });

export const Services = () => {
  const menuItems = Menu(servicesList);

  return (
    <Wrapper>
      <div className="ways-title">
        <h2>Ways I can help you</h2>
      </div>

      <ScrollMenu
        wheel={false}
        translate={180}
        alignCenter={true}
        inertiaScrolling={true}
        data={menuItems}
      />
    </Wrapper>
  );
};

export default Services;
