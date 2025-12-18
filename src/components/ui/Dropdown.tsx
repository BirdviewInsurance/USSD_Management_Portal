'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
    label: string;
    value: string;
    icon?: ReactNode;
}

interface DropdownProps {
    items: DropdownItem[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

export function Dropdown({
    items,
    value,
    onChange,
    placeholder = 'Select an option',
    className,
    disabled = false,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedItem = items.find(item => item.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={cn('relative', className)} ref={dropdownRef}>
            <button
                type="button"
                className={cn(
                    'w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded-xl',
                    'flex items-center justify-between hover:border-gray-400 transition-colors',
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                <div className="flex items-center">
                    {selectedItem?.icon && <span className="mr-2">{selectedItem.icon}</span>}
                    <span className={cn(selectedItem ? 'text-gray-900' : 'text-gray-500')}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </span>
                </div>
                <ChevronDown className={cn(
                    'h-4 w-4 text-gray-400 transition-transform',
                    isOpen && 'transform rotate-180'
                )} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-ultra">
                    <div className="py-1 max-h-60 overflow-auto">
                        {items.map((item) => (
                            <button
                                key={item.value}
                                className={cn(
                                    'w-full px-4 py-2.5 text-left flex items-center hover:bg-gray-50 transition-colors',
                                    value === item.value && 'bg-primary/5 text-primary'
                                )}
                                onClick={() => {
                                    onChange?.(item.value);
                                    setIsOpen(false);
                                }}
                            >
                                {item.icon && <span className="mr-2">{item.icon}</span>}
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}