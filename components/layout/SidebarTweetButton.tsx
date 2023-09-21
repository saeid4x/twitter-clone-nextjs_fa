import {FaFeather} from 'react-icons/fa';
import {useRouter} from 'next/router'
import { useCallback } from 'react';
import useLoginModal from '@/hooks/useLoginModal';

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick= useCallback(() => {
        loginModal.onOpen();
    } , [loginModal]);


    return ( 
        <div onClick={onClick}>

            {/* mobile first */}
            <div
                className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex
                        items-center justify-center bg-sky-500 hover:bg-opacity-80
                        transition cursor-pointer                    
                    "   
            >
                <FaFeather size={24} color="white" />
            </div>

            {/* Desktop First */}
            <div
               className='mt-6 hidden lg:block px-4 py-2 rounded-full
                          bg-sky-500 hover:bg-opacity-90 cursor-pointer 
                          transition'
            >
                <p className='hidden lg:block text-center font-semibold text-white text-[20px]'>
                    ارسال توییت
                </p>

            </div>

        </div>
     );
}
 
export default SidebarTweetButton;