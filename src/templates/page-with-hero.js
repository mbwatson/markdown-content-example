import Markdown from 'markdown-to-jsx'
import './page-with-hero.scss'

export const PageWithHero = ({ content, heroImagePath }) => {
  return (
    <div>
      <div className="hero" style={{ height: '400px', background: `url(${ heroImagePath })` }} />
      <Markdown>{ content }</Markdown>
    </div>
  )
}