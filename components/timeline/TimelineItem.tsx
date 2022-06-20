import PropTypes from 'prop-types';

interface TimelineItemProps {
    company: string;
    date: string;
}

function TimelineItem(props: TimelineItemProps) {
    return (
        <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-8 h-8 bg-gray-300 rounded-full ring-1 ring-gray-100 dark:bg-gray-800 sm:ring-4 dark:ring-gray-100 shrink-0">
                    <svg className="w-4 h-4 text-black dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-100"></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.company}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.date}</time>
            </div>
        </li>
    );
}

TimelineItem.propTypes = {
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default TimelineItem;