'use client';

import { Card as HeroCard, CardBody, CardHeader, CardFooter } from '@heroui/card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
    header?: ReactNode;
    footer?: ReactNode;
    shadow?: 'sm' | 'md' | 'lg' | 'none';
    isHoverable?: boolean;
}

export function Card({
    children,
    className,
    header,
    footer,
    shadow = 'lg',
    isHoverable = false,
}: CardProps) {
    return (
        <HeroCard
            className={cn(className)}
            shadow={shadow}
            isHoverable={isHoverable}
        >
            {header && <CardHeader>{header}</CardHeader>}
            <CardBody>{children}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
        </HeroCard>
    );
}