import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
            <script 
              key='r00ks-theme'
              dangerouslySetInnerHTML={{ 
                __html: `
                (function() {
                  window.__onThemeChange = function() {};
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    preferredTheme = newTheme;
                    document.body.className = newTheme;
                    if (newTheme == "dark") {
                      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0e1117');
                    } else {
                      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3164dc');
                    }
                    window.__onThemeChange(newTheme);
                  }
                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }
                  window.__setPreferredTheme = function(newTheme) {
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) {}
                  }
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  darkQuery.addListener(function(e) {
                    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                  });
                  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                })();`,
              }}
            />
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}