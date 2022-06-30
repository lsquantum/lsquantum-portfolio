import useLanguage from "../../hooks/useLanguage";

function EmailInfo() {
    const [languageItems] = useLanguage();
    return (
        <div className='mt-2 ml-3 mb-3 flex'>
            <div className="h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className='ml-2'><p>{languageItems.email}</p></div>
        </div>
    );
}

export default EmailInfo;