import PropTypes from 'prop-types';

interface SkillProps {
    text: string;
    size: string;
}

function Skill(props: SkillProps) {
    return (<>
        {props.size === 'normal' ?
            <div
                className="
                rounded-full 
                py-1 
                px-6 
                m-1 
                bg-gray-400 
                hover:bg-gray-500 
                dark:bg-[#292929] 
                dark:hover:bg-[#242424] 
                font-medium 
                text-black 
                dark:text-gray-100 
                cursor-pointer"
            >
                {props.text}
            </div>
            : <div className="
                rounded-sm 
                px-2 
                py-1 
                m-1 
                border 
                border-gray-500 
                bg-gray-300 
                hover:bg-slate-500 
                dark:bg-[#292929] 
                dark:hover:bg-[#242424] 
                font-medium 
                text-black 
                dark:text-gray-100 
                cursor-pointer 
                text-xs"
            >
                {props.text}
            </div>
        }
    </>);
}

Skill.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'normal']).isRequired
};

Skill.defaultProps = {
    size: 'normal'
};

export default Skill;