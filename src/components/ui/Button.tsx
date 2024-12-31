import { ComponentPropsWithRef, MouseEvent, ReactNode, forwardRef } from 'react';
import Spinner from './Spinner';

interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
    className?: string;
    children?: ReactNode;
    loading?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, loading = false, onClick, ...rest } = props;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (loading) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    return (
        <button ref={ref} className={className} onClick={handleClick} {...rest}>
            {loading ? (
                <span className="flex items-center">
                    <Spinner />
                </span>
            ) : (
                <span className="flex items-center">
                    {children}
                </span>
            )}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
