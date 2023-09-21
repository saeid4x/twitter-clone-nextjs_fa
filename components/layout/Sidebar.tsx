
import {BsHouseFill,BsBellFill} from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';
 
import {FaUser} from "react-icons/fa"
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import {signOut} from 'next-auth/react'

const Sidebar = () => {

    // currentUser is alias name for 'data'
    const {data: currentUser} = useCurrentUser()
    const items = [
        {
            label:"خانه",
            href: "/",
            icon:BsHouseFill
        },
        {
            label:'نوتیفیکیشن',
            href: '/notifications',
            icon: BsBellFill,
            auth:true,
            alert:currentUser?.hasNotification
        },
        {
            label:"پروفایل",
            href: `/users/${currentUser?.id}`,
            icon: FaUser,
            auth:true
        }
    ]
    return ( 
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    
                    {items.map((item) =>(
                        <SidebarItem 
                           key={item.href}
                           href={item.href}
                           label={item.label}
                           icon={item.icon}
                           auth={item.auth}
                           alert={item.alert}
                           
                        />
                    ))}

                    {
                        currentUser && (
                            <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="خروج" />
                        )
                    }
                    
                    <SidebarTweetButton />
                </div>

            </div>

        </div>
     );
}
 
export default Sidebar;