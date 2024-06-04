import { SignUp } from "@clerk/clerk-react"
import logo from '../assets/logowhite.png'

export default function SignUpPage() {
  return (
    <div className="sign-up">
      <div>
        <div className='logo'>
          <img src={logo} alt="logo" width={120} />
        </div>
        <SignUp />
      </div>
    </div>
  );
}