import { type FC } from 'react'
import './Home.scss'

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className='home'>
            this is HomePage
        </div>
    );
}

export default Home