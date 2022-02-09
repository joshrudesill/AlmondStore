import React from 'react';
import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <div className='SpinnerOverlay'>
            <div className='SpinnerContainer' />
        </div>
    ) : 
    (
        <WrappedComponent {...otherProps}/>
    );
};

export default WithSpinner;