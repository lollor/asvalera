// ./src/app/studio/[[...index]]/page.tsx
import Studio from './studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export {metadata} from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <Studio />
}