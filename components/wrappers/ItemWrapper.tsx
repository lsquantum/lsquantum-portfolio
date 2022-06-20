function ItemWrapper({ children }: any) {
    return (
        <div className="w-full bg-gray-300 dark:bg-[#1f1f1f] shadow-md rounded-lg">
            {children}
        </div>
    );
}

export default ItemWrapper;