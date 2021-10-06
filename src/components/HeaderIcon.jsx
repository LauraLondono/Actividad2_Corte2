import React from 'react';
import '../App.css';


const HeaderLogo = (props) => {
    return (
        <div >
            {/* Pinterest logo */}
            <div style={{ ..._stylesLayout.btn }}>
                <svg xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.logo }}>
                    <path fill='#e60023'
                        d={props.svgPath}
                    />
                </svg>
            </div>

        </div>
    );
};

const HeaderSearchIcon = (props) => {
    return (
        <div >
            {/* lupa buscar */}
            <div style={{ ..._stylesLayout.btn }}>
                <svg xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.buscar }}>
                    <path fill='gray'
                        d={props.svgPath}
                    />
                </svg>
            </div>

        </div>
    );
};

const HeaderButtonIcon = (props) => {
    return (
        <div >
            {/* botones notif, mnsjs, perfil*/}
            <div style={{ ..._stylesLayout.btn }}>
                <svg className='btnsHeader' xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.svg }}>
                    <path fill='gray'
                        d={props.svgPath}
                    />
                </svg>
            </div>

        </div>
    );
};

const _stylesLayout = {
    btn: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '100%',
        display: 'flex',
        alignItems: 'center',        
    },

    logo:{
        position: 'absolute',
        width: '35px',
        height: '35px',
        cursor:'pointer',

    },

    buscar: {
        position: 'absolute',
        padding: '15px',
        width: '15px',
        height: '15px',
    },

    svg:{
        position: 'absolute',
        width: '22px',
        height: '22px',
        cursor:'pointer',
    },  
};

export {HeaderLogo, HeaderSearchIcon, HeaderButtonIcon };