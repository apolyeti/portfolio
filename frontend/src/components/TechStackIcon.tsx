interface TechStackIconProps {
    name: string;
    icon: string;
}

export default function TechStackIcon({ name, icon }: TechStackIconProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            <img src={icon} alt={name} className="w-12 h-12" />
            <p className="text-sm">{name}</p>
        </div>
    );
}