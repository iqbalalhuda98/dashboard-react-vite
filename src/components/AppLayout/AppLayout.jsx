/* eslint-disable react/prop-types */
import AppHeader from './AppHeader/AppHeader'
import AppSidebar from './AppSidebar/AppSidebar'

const AppLayout = ({ children }) => {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <AppSidebar />
            <div className="flex flex-col">
                <AppHeader />
                
                {children}
            </div>
        </div>
    )
}

export default AppLayout