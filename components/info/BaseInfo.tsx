import PropTypes from 'prop-types';

interface BaseInfoProps {
    text: string;
}

function BaseInfo(props: BaseInfoProps) {
    return (
        <ul className="mr-10 mt-2 ml-5 list-disc">
            <li>{props.text}</li>
        </ul>
    );
}

BaseInfo.propTypes = {
    text: PropTypes.string.isRequired,
};


export default BaseInfo;