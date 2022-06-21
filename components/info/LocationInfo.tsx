import { AppConfig } from "../../config/AppConfig";
import { LocationIcon } from "../icons/Icon";

function LocationInfo() {
    return (
        <div className='flex flex-nowrap'>
            <LocationIcon />
            <div className='mt-1 ml-2'>
                <p>{AppConfig.location}</p>
            </div>
        </div>
    );
}

export default LocationInfo;