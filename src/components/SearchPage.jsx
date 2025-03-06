import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { displayData, googleSelector, linkedinSelector, youtubeSelector } from '../states/selector';
import Card from './Card';
import { useRef } from 'react';
import { getSearchResults } from '../services/api';
import { LoaderAtom, results, ResultTypeAtom } from '../states/atom';
import { GoogleLogo, LinkedinCircleLogo, WebIcon, YoutubeIcon } from '../assets/icons';

const SearchPage = () => {
    
    const results = useRecoilValue(displayData);

    return (
    <div className="min-h-screen flex flex-col items-center w-full ">

        <SearchHeader />
        
        {/* {resultType === "linkedin" &&
            <linkedInSearch />
        } */}
            
        <div id='resultComponent' className='max-w-[1200px] flex justify-center items-center flex-wrap gap-10 py-10'>
                { results ?
                    results.map((item, ind) => <Card data={item} key={ind} type={item.type} />)
                    :
                    <div className="py-40 flex justify-center items-center">
                        <p className="text-gray-500 text-xl">No Results Found</p>
                    </div>
                }
        </div>
    </div>
  );
};

const SearchHeader = () => {

    const [resultType, setResultType] = useRecoilState(ResultTypeAtom);
    const setLoading = useSetRecoilState(LoaderAtom);
    const setResults = useSetRecoilState(results);
    const queryRef = useRef(null);

    const handleSearch = async () => {
        const query = queryRef.current.value;
        setLoading(true)
        const data = await getSearchResults(query);
        setLoading(false)
        data && setResults(data.results);
    };

    return (
        <div className="h-full w-full flex flex-col gap-6 border-b border-0.5 border-black/30 justify-center items-center sticky top-0 bg-white py-4 px-4 z-10">
            <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Search Google, Youtube, Linkedin"
                        className="md:w-92 bg-gray-100 rounded-lg p-2 pl-4 text-sm md:text-base outline-none"
                        ref={queryRef}
                    />
                    <button
                        className="cursor-pointer bg-blue-500 text-white rounded-3xl px-4 py-2 text-sm md:text-base"
                        onClick={() => handleSearch()}
                    >
                        Search
                    </button>
            </div>
            <div className=" w-full max-w-[600px] flex justify-around flex-wrap gap-2 md:gap-4">
                <button
                    onClick={() => setResultType("all")}
                    className={`h-10 flex gap-2 justify-center items-center cursor-pointer ${resultType === "all" ? 'bg-blue-500 text-white': 'bg-blue-100 text-gray-500'} border-2 border-blue-500 rounded-3xl px-3 py-1 md:px-4 md:py-2 text-sm md:text-base`}
                >
                        <WebIcon
                        className="w-5 text-grey-800"
                    />
                    <span>
                        All Contents
                    </span>
                </button>
                <button
                    onClick={() => setResultType("google")}
                    className={`h-10 flex gap-2 justify-center items-center cursor-pointer ${resultType === "google" ? 'bg-blue-500 text-white': 'bg-blue-100 text-gray-500'} border-2 border-blue-500 rounded-3xl px-3 py-1 md:px-4 md:py-2 text-sm md:text-base`}
                >
                    
                    <GoogleLogo
                        className="w-4"
                    />
                    <span>
                        Google
                    </span>
                </button>
                <button
                    onClick={() => setResultType("youtube")}
                    className={`h-10 flex gap-2 justify-center items-center cursor-pointer ${resultType === "youtube" ? 'bg-blue-500 text-white': 'bg-blue-100 text-gray-500'} border-2 border-blue-500 rounded-3xl px-3 py-1 md:px-4 md:py-2 text-sm md:text-base`}
                >
                        <YoutubeIcon
                        className="w-5"
                    />
                    <span>
                        Youtube
                    </span>
                </button>
                <button
                    onClick={() => setResultType("linkedin")}
                    className={`h-10 flex gap-2 justify-center items-center cursor-pointer ${resultType === "linkedin" ? 'bg-blue-500 text-white': 'bg-blue-100 text-gray-500'} border-2 border-blue-500 rounded-3xl px-3 py-1 md:px-4 md:py-2 text-sm md:text-base`}
                >
                        <LinkedinCircleLogo
                        className="w-5"
                    />
                    <span>
                        LinkedIn
                    </span>
                </button>
            </div>
        </div>
    )
}

const linkedInSearch = () => {
    const nameRef = useRef(null);
    const jobRef = useRef(null);

    return (
        <div id='resultComponent' className='w-full max-w-[1200px] flex justify-between items-center my-6'>
                <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Search Peoples in Linkedin"
                        className="md:w-92 bg-gray-100 rounded-lg p-2 pl-4 text-sm md:text-base outline-none"
                        ref={nameRef}
                    />
                    <button
                        className="cursor-pointer text-white bg-gray-600 rounded-xl px-4 py-2 text-sm md:text-base font-medium"
                        onClick={() => alert("name")}
                    >
                        Search
                    </button>
                    </div>

                    <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Search for jobs in Linkedin"
                        className="md:w-92 bg-gray-100 rounded-lg p-2 pl-4 text-sm md:text-base outline-none"
                        ref={jobRef}
                    />
                     <button
                        className="cursor-pointer text-white bg-gray-600 rounded-xl px-4 py-2 text-sm md:text-base font-medium"
                        onClick={() => alert("name")}
                    >
                        Search
                    </button>
            </div>
        </div>
    )
}
export default SearchPage;
