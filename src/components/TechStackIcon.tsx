
interface TechStackIconProps {
    name: string;
    children?: React.ReactNode;
}

export default function TechStackIcon({ name, children }: TechStackIconProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            {children}
            <p className="text-sm">{name}</p>
        </div>
    );
}