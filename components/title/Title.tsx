import PropTypes from 'prop-types';

interface TitleProps {
    text: string;
    style?: string;
}

function Title(props: TitleProps) {
    var className = `ml-3 text-xl font-bold ${props.style}`;
    return (
        <div className={className}>
            {props.text}
        </div>
    );
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Title;