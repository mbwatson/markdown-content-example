import { Link, Router } from '@reach/router'
import './app.scss'
import { Page, PageWithHero } from '../templates'

import homePageContent from '../content/home.md'
import aboutPageContent from '../content/about.md'
import contactPageContent from '../content/contact.md'

export const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <main>
        <Router>
          <Page
            path="/"
            content={ homePageContent }
          />
          <PageWithHero
            path="/about"
            content={ aboutPageContent }
            heroImagePath="https://picsum.photos/1800/400"
          />
          <Page
            path="/contact"
            content={ contactPageContent }
          />
        </Router>
      </main>
    </div>
  )
}
