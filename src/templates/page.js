import Markdown from 'markdown-to-jsx'

export const Page = ({ content }) => {
  return (
    <div>
      <Markdown>{ content }</Markdown>
    </div>
  )
}