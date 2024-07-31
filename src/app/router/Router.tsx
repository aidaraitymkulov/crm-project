import { Home, Auth, NotFound } from "@/pages"
import { FC, ReactElement, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

export enum PagesEnum {
    Home = "/",
    AUTH = '/auth',
    NOT_FOUND = '*'
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
    [PagesEnum.Home]: <Home />,
    [PagesEnum.AUTH]: <Auth />,
    [PagesEnum.NOT_FOUND]: <NotFound />
}
interface AppRouterProps {}
export const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    Object.entries(AppRouterPages).map(([path, element])=> (
                        <Route path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    )
}