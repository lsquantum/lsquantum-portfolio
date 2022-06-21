import PropTypes from 'prop-types';

interface TrainingCertificationItemProps {
    title: string;
    year: string;
    info?: string;
}

function TrainingCertificationItem(props: TrainingCertificationItemProps) {
    return (
        <div className='w-auto mt-5 ml-8'>
            <div className='mr-3'>
                <span className='text-blue-600 font-medium text-lg'>{props.title}</span>
                <span className='float-right font-medium'>{props.year}</span>
            </div>
            {
                props.info &&
                <div>
                    {props.info}
                </div>
            }
        </div>
    );
}

TrainingCertificationItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

TrainingCertificationItem.defaultProps = {
    info: undefined
};

export default TrainingCertificationItem;