import { useState } from "react";

interface CollapseProps {
    title?: string;
    children: React.ReactNode;
}

export default function Collapse({ title = "Details", children }: CollapseProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
          w-full flex justify-between items-center
          px-4 py-2 rounded-lg
          bg-white/10 hover:bg-white/15
          border border-white/20 backdrop-blur
          transition-all duration-200
          cursor-pointer
        "
            >
                <span className="font-medium text-white">{title}</span>
                <span
                    className={`transition-transform ${open ? "rotate-90" : "-rotate-90"
                        }`}
                >
                    ▶
                </span>
            </button>

            <div
                className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-[800px]" : "max-h-0"}
        `}
            >
                <div className="px-4 py-2 text-white/80 prose prose-invert">
                    {children}
                </div>
            </div>
        </div>
    );
}
