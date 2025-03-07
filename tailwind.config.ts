import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'var(--semi-color-white)',
      black: 'var(--semi-color-black)',
      primary: 'var(--semi-color-primary)',
      'primary-hover': 'var(--semi-color-primary-hover)',
      'primary-active': 'var(--semi-color-primary-active)',
      'primary-disabled': 'var(--semi-color-primary-disabled)',
      'primary-light-default': 'var(--semi-color-primary-light-default)',
      'primary-light-hover': 'var(--semi-color-primary-light-hover)',
      'primary-light-active': 'var(--semi-color-primary-light-active)',
      secondary: 'var(--semi-color-secondary)',
      'secondary-hover': 'var(--semi-color-secondary-hover)',
      'secondary-active': 'var(--semi-color-secondary-active)',
      'secondary-disabled': 'var(--semi-color-secondary-disabled)',
      'secondary-light-default': 'var(--semi-color-secondary-light-default)',
      'secondary-light-hover': 'var(--semi-color-secondary-light-hover)',
      'secondary-light-active': 'var(--semi-color-secondary-light-active)',
      tertiary: 'var(--semi-color-tertiary)',
      'tertiary-hover': 'var(--semi-color-tertiary-hover)',
      'tertiary-active': 'var(--semi-color-tertiary-active)',
      'tertiary-light-default': 'var(--semi-color-tertiary-light-default)',
      'tertiary-light-hover': 'var(--semi-color-tertiary-light-hover)',
      'tertiary-light-active': 'var(--semi-color-tertiary-light-active)',
      default: 'var(--semi-color-default)',
      'default-hover': 'var(--semi-color-default-hover)',
      'default-active': 'var(--semi-color-default-active)',
      info: 'var(--semi-color-info)',
      'info-hover': 'var(--semi-color-info-hover)',
      'info-active': 'var(--semi-color-info-active)',
      'info-disabled': 'var(--semi-color-info-disabled)',
      'info-light-default': 'var(--semi-color-info-light-default)',
      'info-light-hover': 'var(--semi-color-info-light-hover)',
      'info-light-active': 'var(--semi-color-info-light-active)',
      success: 'var(--semi-color-success)',
      'success-hover': 'var(--semi-color-success-hover)',
      'success-active': 'var(--semi-color-success-active)',
      'success-disabled': 'var(--semi-color-success-disabled)',
      'success-light-default': 'var(--semi-color-success-light-default)',
      'success-light-hover': 'var(--semi-color-success-light-hover)',
      'success-light-active': 'var(--semi-color-success-light-active)',
      danger: 'var(--semi-color-danger)',
      'danger-hover': 'var(--semi-color-danger-hover)',
      'danger-active': 'var(--semi-color-danger-active)',
      'danger-light-default': 'var(--semi-color-danger-light-default)',
      'danger-light-hover': 'var(--semi-color-danger-light-hover)',
      'danger-light-active': 'var(--semi-color-danger-light-active)',
      warning: 'var(--semi-color-warning)',
      'warning-hover': 'var(--semi-color-warning-hover)',
      'warning-active': 'var(--semi-color-warning-active)',
      'warning-light-default': 'var(--semi-color-warning-light-default)',
      'warning-light-hover': 'var(--semi-color-warning-light-hover)',
      'warning-light-active': 'var(--semi-color-warning-light-active)',
      'focus-border': 'var(--semi-color-focus-border)',
      'disabled-text': 'var(--semi-color-disabled-text)',
      'disabled-border': 'var(--semi-color-disabled-border)',
      'disabled-bg': 'var(--semi-color-disabled-bg)',
      'disabled-fill': 'var(--semi-color-disabled-fill)',
      shadow: 'var(--semi-color-shadow)',
      link: 'var(--semi-color-link)',
      'link-hover': 'var(--semi-color-link-hover)',
      'link-active': 'var(--semi-color-link-active)',
      'link-visited': 'var(--semi-color-link-visited)',
      border: 'var(--semi-color-border)',
      'nav-bg': 'var(--semi-color-nav-bg)',
      'overlay-bg': 'var(--semi-color-overlay-bg)',
      'fill-0': 'var(--semi-color-fill-0)',
      'fill-1': 'var(--semi-color-fill-1)',
      'fill-2': 'var(--semi-color-fill-2)',
      'bg-0': 'var(--semi-color-bg-0)',
      'bg-1': 'var(--semi-color-bg-1)',
      'bg-2': 'var(--semi-color-bg-2)',
      'bg-3': 'var(--semi-color-bg-3)',
      'bg-4': 'var(--semi-color-bg-4)',
      'text-0': 'var(--semi-color-text-0)',
      'text-1': 'var(--semi-color-text-1)',
      'text-2': 'var(--semi-color-text-2)',
      'text-3': 'var(--semi-color-text-3)',
      'highlight-bg': 'var(--semi-color-highlight-bg)',
      highlight: 'var(--semi-color-highlight)',
      'data-0': 'var(--semi-color-data-0)',
      'data-1': 'var(--semi-color-data-1)',
      'data-2': 'var(--semi-color-data-2)',
      'data-3': 'var(--semi-color-data-3)',
      'data-4': 'var(--semi-color-data-4)',
      'data-5': 'var(--semi-color-data-5)',
      'data-6': 'var(--semi-color-data-6)',
      'data-7': 'var(--semi-color-data-7)',
      'data-8': 'var(--semi-color-data-8)',
      'data-9': 'var(--semi-color-data-9)',
      'data-10': 'var(--semi-color-data-10)',
      'data-11': 'var(--semi-color-data-11)',
      'data-12': 'var(--semi-color-data-12)',
      'data-13': 'var(--semi-color-data-13)',
      'data-14': 'var(--semi-color-data-14)',
      'data-15': 'var(--semi-color-data-15)',
      'data-16': 'var(--semi-color-data-16)',
      'data-17': 'var(--semi-color-data-17)',
      'data-18': 'var(--semi-color-data-18)',
      'data-19': 'var(--semi-color-data-19)',
    },
    extend: {
      borderRadius: {
        'extra-small': 'var(--semi-border-radius-extra-small)',
        small: 'var(--semi-border-radius-small)',
        medium: 'var(--semi-border-radius-medium)',
        large: 'var(--semi-border-radius-large)',
        circle: 'var(--semi-border-radius-circle)',
        full: 'var(--semi-border-radius-full)',
      },
      fontSize: {
        huge: ['1.5em', { lineHeight: '2em' }],
        large: ['1rem', { lineHeight: '1.5rem' }],
        regular: ['.875rem', { lineHeight: '1.25rem' }],
        small: ['.75rem', { lineHeight: '1rem' }],
        tiny: ['.625rem', { lineHeight: '.875rem' }],
        h1: ['2rem', { lineHeight: '2.75rem' }],
        h2: ['1.75rem', { lineHeight: '2.5rem' }],
        h3: ['1.5rem', { lineHeight: '2rem' }],
        h4: ['1.25rem', { lineHeight: '1.75rem' }],
        h5: ['1.125rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.375rem' }],
      },
      borderColor: {
        DEFAULT: 'var(--semi-color-border)',
        light: 'var(--semi-color-border)',
        focus: 'var(--semi-color-focus-border)',
        primary: 'var(--semi-color-primary)',
      },
      boxShadow: {
        none: 'none',
        DEFAULT: 'var(--semi-shadow-elevated)',
        elevated: '0px 0px 1px 0px rgba(0,0,0,0.30), 0px 4px 14px 0px rgba(0,0,0,0.10)',
        knob: '0px 4px 6px 0px rgba(0,0,0,0.10), 0px 0px 1px 0px rgba(0,0,0,0.30)',
        small: '0 2px 4px 0 rgba(0,0,0,0.14), 0 0 1px 0 rgba(0,0,0,0.16)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      transitionDuration: {
        DEFAULT: '100ms',
      },
    },
  },
}

export default config
