/**
 * Checks if the theme has already been set or it the browser
 * has a default to supply.
 * @returns (bool) True for dark; False for light.
 */
 export function getTheme() {
    let theme = null;
    // Check if the theme was set already in local storage.
    if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }

    // If not in local storage, check for the browser preset.
    if (theme === null && typeof window !== 'undefined') {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        return prefersDarkScheme.matches;
    }

    if (theme === 'dark') {
        return true;
    }
    return false;
}
