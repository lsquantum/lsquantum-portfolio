import Link from 'next/link';
import PropTypes from 'prop-types';

interface NavbarLinkProps {
    text: string;
    link: string;
}

function NavbarLink(props: NavbarLinkProps) {
    return (
        <>
            <div className='mr-5 dark:text-gray-100'>
                <Link rel="noopener noreferrer" href={props.link}>
                    <a target="_blank">{props.text}</a>
                </Link>
            </div>
        </>
    );
}

NavbarLink.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default NavbarLink;