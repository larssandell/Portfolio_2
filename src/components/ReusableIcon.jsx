import { createElement } from 'react';
import { IconContext } from 'react-icons';
import * as ReactIcon from 'react-icons';

function ReusableIcon({ name, size, color }) {
    const stringyfi = JSON.stringify(name);
    const icon = ReactIcon[name];

    console.log(icon, 'icon reusable');

    if (!icon) {
        console.warn(`Icon "${name}" is not supported.`);
        return null;
    }

    return (
        <IconContext.Provider value={{ size, color }}>
            {createElement(icon)}
        </IconContext.Provider>
    );
}

export default ReusableIcon;
