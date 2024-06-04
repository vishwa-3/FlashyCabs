import { SignedIn, SignedOut } from '@clerk/clerk-react'
import App from '../App.jsx'
import HomePage from './home.jsx'

import '../scss/style.scss'


export default function IndexPage() {
  return (
    <div>
      <SignedOut>
        <HomePage />
      </SignedOut>
      <SignedIn>
        <App />
      </SignedIn>
    </div>
  )
}