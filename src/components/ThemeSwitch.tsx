'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/button';
import { Moon, Sun, Palette, Sparkles } from 'lucide-react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@heroui/dropdown';
import { Tooltip } from '@heroui/tooltip';

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                isIconOnly
                variant="flat"
                className="w-10 h-10"
                isLoading
            />
        );
    }

    const themes = [
        { key: 'light', label: 'Light', icon: Sun, description: 'Clean and bright', color: 'text-yellow-500' },
        { key: 'dark', label: 'Dark', icon: Moon, description: 'Minimal and sleek', color: 'text-blue-400' },
        { key: 'modern', label: 'Modern', icon: Sparkles, description: 'Vibrant and colorful', color: 'text-gradient-primary' },
    ];

    const currentTheme = themes.find(t => t.key === theme) || themes[2];
    const CurrentIcon = currentTheme.icon;

    return (
        <Tooltip content="Change theme" placement="bottom">
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        isIconOnly
                        variant="flat"
                        className="w-10 h-10 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 transition-all duration-300"
                    >
                        <CurrentIcon className={`h-5 w-5 ${currentTheme.color}`} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Theme selection"
                    selectedKeys={[theme || 'modern']}
                    selectionMode="single"
                    onAction={(key) => setTheme(key as string)}
                    className="min-w-[200px]"
                    itemClasses={{
                        base: "px-4 py-3 data-[hover=true]:bg-primary/10",
                    }}
                >
                    {themes.map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (
                            <DropdownItem
                                key={themeOption.key}
                                startContent={
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                                        <Icon className={`h-4 w-4 ${themeOption.color}`} />
                                    </div>
                                }
                                endContent={
                                    themeOption.key === theme && (
                                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                    )
                                }
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{themeOption.label}</span>
                                    <span className="text-xs text-default-500">{themeOption.description}</span>
                                </div>
                            </DropdownItem>
                        );
                    })}
                </DropdownMenu>
            </Dropdown>
        </Tooltip>
    );
}