function TimelineItemWrapper({ children }: any) {
    return (
        <div className='w-auto mx-8'>
            <div className='mx-5 mt-5 pb-5'>
                <ol className="items-center sm:flex">
                    {children}
                </ol>
            </div>
        </div>
    );
}

export default TimelineItemWrapper;