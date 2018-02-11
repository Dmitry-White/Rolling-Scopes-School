import React from 'react';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const subsArrow = props => {
    let arrow;
    if (props.subs.length !== 0) {
        arrow = props.opened ? <ExpandLess onClick={() => props.openSubs(props.id)}/>
                             : <ExpandMore onClick={() => props.openSubs(props.id)}/>
    }
    return <div>{ arrow }</div>;
};

export default subsArrow;
