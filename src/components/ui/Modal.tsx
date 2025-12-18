'use client';

import {
    Modal as HeroModal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@heroui/modal';
import { Button } from './Button';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
    footer?: React.ReactNode;
    hideCloseButton?: boolean;
    backdrop?: 'transparent' | 'opaque' | 'blur';
}

export function Modal({
    isOpen,
    onOpenChange,
    title,
    children,
    size = 'lg',
    footer,
    hideCloseButton = false,
    backdrop = 'blur',
}: ModalProps) {
    return (
        <HeroModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size={size}
            backdrop={backdrop}
            hideCloseButton={hideCloseButton}
            classNames={{
                base: 'bg-background',
                header: 'border-b border-divider',
                footer: 'border-t border-divider',
                closeButton: 'hover:bg-default-100',
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        {title && (
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                        )}
                        <ModalBody>{children}</ModalBody>
                        {footer && <ModalFooter>{footer}</ModalFooter>}
                    </>
                )}
            </ModalContent>
        </HeroModal>
    );
}