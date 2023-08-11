import React from 'react';
import Linkify from 'linkify-react';
import Link from 'next/link';

interface DescriptionProjectProps {
    description: string | undefined;
}

interface CustomComponentProps {
    attributes: {
        target?: string;
        [key: string]: any;
    };
    content: string;
}

const renderLink = ({ attributes, content }: CustomComponentProps) => {
    const { href, ...props } = attributes;
    return (
        <Link href={content} {...props}>
            {content.split('', 30)}...
        </Link>
    );
};

const DescriptionProject: React.FC<DescriptionProjectProps> = ({ description }) => {
    return (
        <Linkify
            as="p"
            options={{ render: renderLink }}
            className="max-w-5xl text-base lg:text-lg font-medium fuenteTexto linkify hyphens-auto"
        >
            {description}
        </Linkify>
    );
};

export default DescriptionProject;
