import React from 'react';
import Image from 'next/image';

import spinner from '@/assets/icons/spinner.svg'

interface SpinnerProps {
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    return (
        <div className={`animate-spin inline-block w-4 h-4 ${className || ''}`} >
            <Image src={spinner} alt='spinner' />
        </div>
    );
};

export default Spinner;
