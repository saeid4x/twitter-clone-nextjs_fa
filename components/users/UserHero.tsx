import useUser from "@/hooks/useUser"
import Image from "next/image";
import Avatar from "../Avatar";


interface UesrHeroProps {
    userId:string
}
const UserHero:React.FC<UesrHeroProps> = ({
    userId
}) =>{
    const {data:fetchedUser} = useUser(userId);
    return (
        <div className="bg-neutral-700 h-44 relative">
            {fetchedUser?.coverImage && (
                <Image 
                  src={fetchedUser.coverImage}
                  fill
                  alt="cover image"
                  style={{objectFit:'cover'}}
                />               
            )}
             <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>
        </div>
    )
}

export  default UserHero