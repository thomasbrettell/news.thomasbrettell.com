import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "7242fvtt64xe",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "iD5_D1tjau_Dx-yEvtVUrYta5QtOFq87rtcpIGHXHyI"
});

export default client