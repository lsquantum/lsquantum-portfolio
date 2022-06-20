import PropTypes from 'prop-types';

interface ProfileImage {
    src: string;
}

function ProfileImage(props: ProfileImage) {
    return (
        <div className='w-full col-span-2'>
            <img className="w-42 h-42 rounded-full mx-auto shadow-xl" src={props.src} alt="" width="384" height="384" />
        </div>
    );
}

ProfileImage.propTypes = {
    src: PropTypes.string.isRequired,
};

export default ProfileImage;