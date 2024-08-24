import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SvgDividerProps {
    title: string;
    Icon: LucideIcon;
}

const SvgDivider: React.FC<SvgDividerProps> = ({ title, Icon }) => {
    return (
        <div className="flex items-center justify-between bg-transparent text-purple-700 p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300 mr-4"></div>
                <div className="relative">
                    <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-gray-800" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SvgDivider;