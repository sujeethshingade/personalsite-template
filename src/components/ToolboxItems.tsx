import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({ toolboxItems, className, itemWrapperClassName, }: {
    toolboxItems: { title: string; iconType: React.ElementType; className?: string; }[],
    className?: string
    itemWrapperClassName?: string
}) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWrapperClassName)}>
                {toolboxItems.map(item => (
                    <div key={item.title}
                        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};