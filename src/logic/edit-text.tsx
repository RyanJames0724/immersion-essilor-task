import React from 'react';


export const addBreak = (text: string) => {
    return (
        <h1>
            {text.split(' ').map((data: string, index: number) => (
                <React.Fragment key={index}>
                    {data === 'any' ? (
                        <>
                            {data}
                            <br />
                        </>

                    ) : (
                        data + ' '
                    )}
                </React.Fragment>
            ))}
        </h1>
    );
};

export const addEmphasize = (text: string) => {
    return (
        <>
            {text.split(' ').map((data: string, index: number) => (
                <React.Fragment key={index}>
                    {data === 'Transitions®'
                        || data === 'Drivewear®'
                        || (data === 'Transitions')
                        || data === 'Drivewear'
                        || (data === 'Transitions' && index === 4) ? (
                        <em>{data} </em>
                    ) : (
                        data + ' '
                    )}
                </React.Fragment>
            ))}
        </>
    );
};

export const addSuperScripted = (text: string) => {
    return (
        <>
            {text.split(' ').map((data: string, index: number) => (
                <React.Fragment key={index}>
                    {data === '®' && index === 1 ? (
                        <sup>{data} </sup>
                    ) : (
                        data + ' '
                    )}
                </React.Fragment>
            ))}
        </>
    );
};