import { AppConfig } from "../../config/AppConfig";
import { ExperienceIcon } from "../icons/Icon";

function ExperienceInfo() {
    return (
        <div>
            <div className='flex flex-nowrap'>
                <ExperienceIcon />
                <div className='mt-1 ml-2'>
                    <p>{AppConfig.totalExp} of experience</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceInfo;