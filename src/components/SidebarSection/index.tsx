const SidebarSection = ({ title, content = undefined, children = undefined }) => {
    return (
        <div>
            <h4 class="font-bold text-lg">{title}</h4>
            {content ? (
                content.map((item) => (
                    <li class="list-none">{item.icon} {item.name}</li>
                ))
            ) : (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export default SidebarSection;