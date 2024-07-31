import { type FC } from 'react'
import './NotFound.scss'

export interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div className='notfound'>
            this is notfound
        </div>
    );
}

export default NotFound