import { g, config } from '@grafbase/sdk'

const Project = g.model('Project', {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  siteUrl: g.url(),
  gitHub: g.url(),
  category: g.string().search(),
})

export default config({
  schema: g
})
