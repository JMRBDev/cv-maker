const Divider = ({ isVertical = false }) => {
    return (
        <div>
            <div class={`
                ${isVertical
                    ? 'h-full w-[2.5px] min-w-[2.5px] mx-8'
                    : 'h-[2.5px] w-full my-8'
                }
                bg-slate-400
            `}
            />
        </div>
    );
}

export default Divider;