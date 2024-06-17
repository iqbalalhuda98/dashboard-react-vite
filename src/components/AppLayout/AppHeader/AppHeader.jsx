import { ModeToggle } from "@/components/ThemeProvider/ModeToggle/ModeToggle"

const AppHeader = () => {
    return (
        <div className="w-full h-full flex items-center justify-end px-4 font-bold gap-4">
            YOUR DASHBOARD
            <ModeToggle />
        </div>
    )
}

export default AppHeader