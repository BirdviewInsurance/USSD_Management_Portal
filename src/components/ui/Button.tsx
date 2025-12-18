'use client';

import { Button as HeroButton, ButtonProps as HeroButtonProps } from '@heroui/button';
import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useNavigation } from '@/lib/navigations';

interface ButtonProps extends HeroButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    section?: string; // For smooth scrolling to sections
    onClick?: () => void;
}

export function Button({
    children,
    className,
    href,
    section,
    onClick,
    ...props
}: ButtonProps) {
    const { navigate } = useNavigation();

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick();
        }
        if (href && !props.isDisabled) {
            e.preventDefault();
            navigate(href, section);
        }
    };

    if (href && !props.isDisabled) {
        return (
            <HeroButton
                className={cn('font-medium cursor-pointer', className)}
                as={Link}
                href={section ? `${href}${section}` : href}
                onClick={handleClick}
                {...props}
            >
                {children}
            </HeroButton>
        );
    }

    return (
        <HeroButton
            className={cn('font-medium', className)}
            onClick={handleClick}
            {...props}
        >
            {children}
        </HeroButton>
    );
}