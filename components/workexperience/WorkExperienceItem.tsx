import PropTypes from 'prop-types';

interface WorkExperienceItemProps {
    company: string;
    jobTitle: string;
    year: string;
    jobInfo?: string[];
}

function WorkExperienceItem(props: WorkExperienceItemProps) {
    return (
        <div className='w-auto mt-5 ml-8'>
            <div className='mr-3'>
                <span className='text-blue-600 font-medium text-lg'>{props.jobTitle}</span>
                <span className='float-right font-medium'>{props.year}</span>
            </div>
            <div className='-mt-1'>
                <span className='text-sm font-medium'>{props.company}</span>
            </div>
            <div className='ml-10'>
                {props.jobInfo?.map((item, i) => {
                    return (
                        <ul key={i} className="mr-10 mt-2 ml-5 list-disc">
                            <li>{item}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

WorkExperienceItem.propTypes = {
    company: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

WorkExperienceItem.defaultProps = {
    jobInfo: undefined,
};


export default WorkExperienceItem;