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
                    var theme = localStorage.getItem('theme');
                    var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                    if (!theme && supportDarkMode) {
                        document.body.classList.add('dark');
                        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0e1117');
                    }
                    if (!theme) {
                        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3164dc');
                        return;
                    }
                    document.body.classList.add(theme);
                    if (theme === 'dark') {
                        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0e1117');
                    } else {
                        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3164dc');
                    } 
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