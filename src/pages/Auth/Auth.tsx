import { type FC } from 'react'
import './Auth.scss'

export interface AuthProps {}

const Auth: FC<AuthProps> = () => {
    return (
        <div className='auth'>
            this is auth
        </div>
    );
}

export default Auth;