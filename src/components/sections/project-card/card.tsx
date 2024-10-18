"use client"

import React,{ useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Github, Globe, Play, Pause } from 'lucide-react'

interface Technology {
  name: string
  icon?: string // URL to icon image
}

interface ProjectCardProps {
  icon: string | React.ReactNode // URL or inline SVG
  title: string
  subtitle: string
  technologies: Technology[]
  description: string
  preview: {
    type: 'image' | 'video'
    url: string
  }
  githubUrl: string
  websiteUrl: string
}

export default function ProjectCardItem({
  icon,
  title,
  subtitle,
  technologies,
  description,
  preview,
  githubUrl,
  websiteUrl
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/25 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-4 md:p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
            {typeof icon === 'string' ? (
              <Image src={icon} alt={title} width={64} height={64} className="rounded-full" />
            ) : (
              icon
            )}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech.icon && <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-1" />}
              {tech.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm mb-4">{description}</p>
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md bg-muted">
          {preview.type === 'image' ? (
            <Image
              src={preview.url}
              alt={`${title} preview`}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                src={preview.url}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                ref={(el) => {
                  if (el && isHovered) {
                    el.play()
                  } else if (el) {
                    el.pause()
                  }
                }}
              />
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => {
                  const video = document.querySelector('video')
                  if (video) {
                    isPlaying ? video.pause() : video.play()
                  }
                }}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </AspectRatio>
      </CardContent>
      <CardFooter className="p-4 md:p-6 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button variant="default" size="sm" asChild>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            Visit Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}