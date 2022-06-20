import PropTypes from 'prop-types';

interface SubTitleProps {
    text: string;
}

function SubTitle(props: SubTitleProps) {
    return (
        <div className='ml-3 mt-2'>
            <span className='text-blue-600 font-medium'>{props.text}</span>
        </div>
    );
}

SubTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SubTitle;