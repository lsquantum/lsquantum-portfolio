import PropTypes from 'prop-types';
import Skill from '../skill/Skill';
import ExperienceSkillsWrapper from '../wrappers/ExperienceSkillsWrapper';

interface SideProjectItemProps {
    title: string;
    year: string;
    team?: string;
    info?: string;
    tools?: string[];
    link?: string;
}

function SideProjectItem(props: SideProjectItemProps) {
    return (
        <div className='w-auto mt-5 ml-8'>
            <div className='mr-3'>
                <span className='text-blue-600 font-medium text-lg'>{props.title}</span>
                <span className='float-right font-medium'>{props.year}</span>
            </div>
            {
                props.team &&
                <div className='-mt-1'>
                    <span className='text-sm font-medium'>{props.team}</span>
                </div>
            }
            {
                props.info &&
                <div className='ml-1 mr-6'>
                    {props.info}
                </div>
            }
            {
                props.tools &&
                <ExperienceSkillsWrapper>
                    {props.tools.map((item, i) => {
                        return (
                            <Skill key={i} text={item} size='small' />
                        );
                    })}
                </ExperienceSkillsWrapper>
            }
            {
                props.link &&
                <div className='mt-3'>
                    <a href={props.link} target="_blank" className="text-blue-600 no-underline hover:underline ...">{props.link}</a>
                </div>
            }
        </div>
    );
}

SideProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

SideProjectItem.defaultProps = {
    info: undefined,
    team: undefined,
    tools: undefined,
    link: undefined,
};

export default SideProjectItem;