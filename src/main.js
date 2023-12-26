import './main.css'
import javascriptLogo from './javascript.svg'
import viteLogo from './vite.svg'
import { setupCounter } from './app/components/counter.js'
import { siteHeader } from './app/components/header.js' 
import { siteFooter } from './app/components/footer.js'
import { siteProjects } from './app/components/projects.js' 
/**
 * Initializes the main application view by setting up the HTML content,
 * and invoking initialization functions for counters, header, projects, and footer.
 * @returns index.html
 */
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="counter2" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
setupCounter(document.querySelector('#counter2'))
siteHeader()
siteProjects()
siteFooter()
