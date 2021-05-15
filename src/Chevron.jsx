const ChevronIcon = (props) => {
    return (
        <>
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <rect x="0.686523" y="0.45459" width="0.642824" height="6.42824" rx="0.321412" transform="rotate(-45 0.686523 0.45459)" fill="currentColor" />
                <rect width="0.642824" height="6.42824" rx="0.321412" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 9.80078 0.45459)" fill="currentColor" />
            </svg>
        </>
    )
};

export default ChevronIcon;