import React from 'react';

function Home(props) {
    let {children} = props;
    return(
        <div>
            {children}
        </div>
    )
}

export default Home;