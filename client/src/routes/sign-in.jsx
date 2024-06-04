import { SignIn } from "@clerk/clerk-react"
import logo from '../assets/logowhite.png'

export default function SignInPage() {
    return (
        <div className="sign-in">
            <div>
                <div className='logo'>
                    <img src={logo} alt="logo" width={120} />
                </div>
                <SignIn />
            </div>
        </div>
    );
}