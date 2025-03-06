import React from 'react';
import { useRecoilValue } from 'recoil';
import { LoaderAtom } from '../states/atom';

const DotLoader = () => {
    const isLoading = useRecoilValue(LoaderAtom);
    if(!isLoading) return null
    return (
    <div className="p-12 h-full flex justify-center items-center fixed inset-0 bg-white/50 backdrop-blur-sm z-[100]">      
        <div className="flex justify-center items-center space-x-2 ">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-dot"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-dot delay-200"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-dot delay-400"></div>
        </div>
    </div>
  );
};

export default DotLoader;
