import React from 'react';

function MainLayout(props) {
    let {children} = props;
    return(
        <div>
            {children}
        </div>
    )
}

export default MainLayout;