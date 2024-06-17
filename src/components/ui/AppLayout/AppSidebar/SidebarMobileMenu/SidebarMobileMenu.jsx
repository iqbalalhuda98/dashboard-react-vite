/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronLeftIcon } from "lucide-react"
import SidebarButtons from "../SidebarButtons/SidebarButtons"
import UserCard from "@/components/UserCard/UserCard"

const SidebarMobileMenu = ({ isMobileMenuOpen, onMenuButtonClick }) => {
    return (
        <div className="flex flex-col gap-4 p-4">
            {isMobileMenuOpen && (
                <>
                    <Button onClick={onMenuButtonClick} variant={"outline"}>
                        <ChevronLeftIcon className="size-4 mr-2" /> Close
                    </Button>
                    <Separator />
                    <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
                        YOUR DASHBOARD
                    </div>
                    <SidebarButtons />
                    <UserCard />
                </>
            )}

            {!isMobileMenuOpen && (
                <Button onClick={onMenuButtonClick} variant={"outline"}>
                    <ChevronLeftIcon className="size-4" />
                </Button>
            )}
        </div>
    )
}

export default SidebarMobileMenu