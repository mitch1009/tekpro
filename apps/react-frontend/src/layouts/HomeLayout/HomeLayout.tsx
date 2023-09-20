import { Outlet } from "react-router-dom"
import { FooterCompoenent, NavigationCompoent } from "../../components"
export const HomeLayout = () => {
    return (
        <div>
            <NavigationCompoent />
            <div className="max-w-screen-xl   min-h-[90vh]  mx-auto p-4">
                <Outlet />
            </div>
            <FooterCompoenent />
        </div>
    )
}