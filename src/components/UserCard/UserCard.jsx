import { Separator } from "../ui/separator"
import { Avatar } from "../ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const UserCard = () => {
    return (
        <>
            <Separator />
            <div className="w-full h-fit p-4 flex items-center justify-around">
                <Avatar className="size-8">
                    <AvatarImage src="" />
                </Avatar>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">Iqbal Alhuda</p>
                <p className="text-xs text-muted-foreground">Super Admin</p>
            </div>
        </>
    )
}

export default UserCard