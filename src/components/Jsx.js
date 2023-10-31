import React, {Fragment} from 'react'

const Jsx = () => {

    const temperatura = 17

    return (
        <Fragment>
        <h2>Que temperatura es? frio o calor?</h2>
        <h4>{
                temperatura > 20 ? 'Esta haciendo calor': 'Esta haciendo frio'
            }
        </h4>
        </Fragment>
    );
}
 
export default Jsx;