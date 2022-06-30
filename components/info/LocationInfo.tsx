import useLanguage from "../../hooks/useLanguage";
import { LocationIcon } from "../icons/Icon";

function LocationInfo() {
    const [languageItems] = useLanguage();
    return (
        <div className='flex flex-nowrap'>
            <LocationIcon />
            <div className='mt-1 ml-2'>
                <p>{languageItems.location}</p>
            </div>
        </div>
    );
}

export default LocationInfo;