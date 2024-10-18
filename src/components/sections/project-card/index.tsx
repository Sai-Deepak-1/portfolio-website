import React from 'react'
import ProjectCardItem from './card'
// import { projects } from '@/data'

const ProjectCard = () => {
    const projects = [
        {
            icon: '/icons/react.svg',
            title: 'React Portfolio',
            subtitle: 'A modern portfolio built with React',
            technologies: [
                { name: 'React', icon: '/icons/react.svg' },
                { name: 'TypeScript', icon: '/icons/typescript.svg' },
                { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
            ],
            description: 'A responsive and interactive portfolio showcasing my projects and skills.',
            preview: {
                type: 'image' as const,
                url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            githubUrl: 'https://github.com/yourusername/react-portfolio',
            websiteUrl: 'https://your-portfolio-url.com',
        },
        {
            icon: '/icons/next.svg',
            title: 'Next.js Blog',
            subtitle: 'A static blog built with Next.js',
            technologies: [
                { name: 'Next.js', icon: '/icons/next.svg' },
                { name: 'MDX', icon: '/icons/mdx.svg' },
                { name: 'Vercel', icon: '/icons/vercel.svg' },
            ],
            description: 'A fast, SEO-friendly blog using Next.js, MDX for content, and deployed on Vercel.',
            preview: {
                type: 'video' as const,
                url: 'https://example.com/nextjs-blog-preview.mp4'
            },
            githubUrl: 'https://github.com/yourusername/nextjs-blog',
            websiteUrl: 'https://your-blog-url.com',
        },
    ]
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCardItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectCard