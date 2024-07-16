import React from 'react';
import { Card } from "@/components/ui/card"
import { DATA } from '@/data/content';

export default function Component() {
  return (
    <div className="grid gap-8 p-8 md:grid-cols-2 bg-gray-100 dark:bg-gray-900">
      {DATA.services.map((service: { id: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | React.Key | null | undefined; color: any; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
        <Card key={String(service.id)} className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 transition-colors duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold text-gray-300 dark:text-gray-500">{service.id}</h2>
              <div className={`flex items-center justify-center w-10 h-10 bg-black dark:bg-gray-700 rounded-full group-hover:bg-${service.color}-600 dark:group-hover:bg-${service.color}-500 group-hover:scale-125`}>
                <ArrowRightIcon className="text-white transform group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <h3 className={`mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-${service.color}-600 dark:group-hover:text-${service.color}-400 transition-colors duration-300`}>
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}

function ArrowRightIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}