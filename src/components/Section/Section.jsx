import React from 'react';
import BlurImage from '../../components/BlureImage/BlureImage';

export default function Section(
    {
        className,
        classNameSection = '',
        title,
        titleIs = false,
        titleFigureClassName = '',
        titleImageClassName = '',
        titleContainerClassName = '',
        children
    }
) {
    return (
        <div className={`site__section ${classNameSection}`}>
            <div className={`inner__section ${className}`}>
                {titleIs &&
                    <div className={`title ${titleContainerClassName}`}>
                        <figure className={`titleFigureClassName ${titleFigureClassName}`}>
                            <BlurImage src={title || ''} className={`image ${titleImageClassName}`} />
                        </figure>
                    </div>
                }
                {children}
            </div>
        </div>
    )
}