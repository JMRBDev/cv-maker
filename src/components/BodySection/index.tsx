const BodySection = ({ title, content }) => {
    return (
        <div class="flex flex-col gap-2">
            <h4 class="font-bold text-lg">{title}</h4>
            {content ? (
                content.map((item) => (
                    <li class="list-none flex flex-col">
                        <p class="font-semibold">{item.name}</p>
                        {item.date && (
                            <p class="text-sm">
                                {item.place && (
                                    <>
                                        <span class="font-semibold">{item.place}</span>
                                    </>
                                )}
                                ,&nbsp;
                                &nbsp;
                                <span class="text-slate-400 italic font-mono font-semibold">
                                    {item.date.from && item.date.from}
                                    {item.date.to && ` - ${item.date.to}`}
                                </span>
                            </p>
                        )}
                        <p class="mt-1">{item.description}</p>
                    </li>
                ))
            ) : (
                <slot />
            )}
        </div>
    );
}

export default BodySection;