import PropTypes from 'prop-types';

interface EducationItemProps {
    school: string;
    year: string;
    class?: string;
    info?: string;
}

function EducationItem(props: EducationItemProps) {
    return (
        <div className='w-auto mt-5 ml-8'>
            <div className='mr-3'>
                <span className='text-blue-600 font-medium text-lg'>{props.school}</span>
                <span className='float-right font-medium'>{props.year}</span>
            </div>
            {
                props.class &&
                <div className='-mt-1'>
                    <span className='text-sm font-medium'>{props.class}</span>
                </div>
            }
            {
                props.info &&
                <div>{props.info}</div>
            }
        </div>
    );
}

EducationItem.propTypes = {
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

EducationItem.defaultProps = {
    info: undefined,
    class: undefined
};


export default EducationItem;