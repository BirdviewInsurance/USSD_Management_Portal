import type { Config } from 'tailwindcss';
import { heroui } from "@heroui/react";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Base colors
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },

                // Vibrant colors
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    50: 'hsl(var(--primary) / 0.05)',
                    100: 'hsl(var(--primary) / 0.1)',
                    200: 'hsl(var(--primary) / 0.2)',
                    300: 'hsl(var(--primary) / 0.3)',
                    400: 'hsl(var(--primary) / 0.4)',
                    500: 'hsl(var(--primary))',
                    600: 'hsl(198 93% 50%)',
                    700: 'hsl(198 93% 40%)',
                    800: 'hsl(198 93% 30%)',
                    900: 'hsl(198 93% 20%)',
                },

                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                    50: 'hsl(var(--secondary) / 0.05)',
                    100: 'hsl(var(--secondary) / 0.1)',
                    200: 'hsl(var(--secondary) / 0.2)',
                    300: 'hsl(var(--secondary) / 0.3)',
                    400: 'hsl(var(--secondary) / 0.4)',
                    500: 'hsl(var(--secondary))',
                },

                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },

                // Status colors
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                danger: {
                    DEFAULT: 'hsl(var(--danger))',
                    foreground: 'hsl(var(--danger-foreground))',
                },

                // Muted colors
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },

                // UI colors
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                }
            },

            borderRadius: {
                lg: 'var(--radius-lg)',
                md: 'var(--radius-md)',
                sm: 'var(--radius-sm)',
                xl: '1.5rem',
                '2xl': '2rem',
            },

            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite',
                'spin-slow': 'spin 3s linear infinite',
            },

            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-secondary': 'var(--gradient-secondary)',
                'gradient-accent': 'var(--gradient-accent)',
                'gradient-card': 'var(--gradient-card)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            boxShadow: {
                'glow': '0 0 40px hsl(var(--primary) / 0.15)',
                'glow-lg': '0 0 60px hsl(var(--primary) / 0.25)',
                'soft': '0 4px 24px hsl(var(--primary) / 0.1)',
                'elevation': '0 20px 60px hsl(var(--primary) / 0.15)',
            },

            backdropBlur: {
                xs: '2px',
                sm: '4px',
                DEFAULT: '8px',
                md: '12px',
                lg: '16px',
                xl: '24px',
            },
        },
    },

    plugins: [
        heroui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        primary: {
                            DEFAULT: 'hsl(var(--primary))',
                            foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                            DEFAULT: 'hsl(var(--secondary))',
                            foreground: 'hsl(var(--secondary-foreground))'
                        },
                        success: {
                            DEFAULT: 'hsl(var(--success))',
                            foreground: 'hsl(var(--success-foreground))'
                        },
                        warning: {
                            DEFAULT: 'hsl(var(--warning))',
                            foreground: 'hsl(var(--warning-foreground))'
                        },
                        danger: {
                            DEFAULT: 'hsl(var(--danger))',
                            foreground: 'hsl(var(--danger-foreground))'
                        },
                        focus: 'hsl(var(--ring))'
                    },
                    layout: {
                        radius: {
                            small: 'var(--radius-sm)',
                            medium: 'var(--radius-md)',
                            large: 'var(--radius-lg)',
                        }
                    }
                },

                dark: {
                    extend: 'light',
                    colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        primary: {
                            DEFAULT: 'hsl(var(--primary))',
                            foreground: 'hsl(var(--primary-foreground))'
                        },
                        focus: 'hsl(var(--ring))'
                    }
                },

                modern: {
                    extend: 'dark',
                    colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        primary: {
                            DEFAULT: 'hsl(var(--primary))',
                            foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                            DEFAULT: 'hsl(var(--secondary))',
                            foreground: 'hsl(var(--secondary-foreground))'
                        },
                        accent: {
                            DEFAULT: 'hsl(var(--accent))',
                            foreground: 'hsl(var(--accent-foreground))'
                        },
                        focus: 'hsl(var(--ring))'
                    },
                    layout: {
                        radius: {
                            small: 'var(--radius-sm)',
                            medium: 'var(--radius-md)',
                            large: 'var(--radius-lg)',
                        },
                        boxShadow: {
                            small: '0 0 20px hsl(var(--primary) / 0.1)',
                            medium: '0 0 40px hsl(var(--primary) / 0.15)',
                            large: '0 0 60px hsl(var(--primary) / 0.2)',
                        }
                    }
                }
            }
        })
    ],
}

export default config