import { type FC } from 'react'
import { AppRouter } from './router/Router';


interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <div className=''>
            <AppRouter />
        </div>
    );
}