"use client"

import React from 'react';
import { DownloadIcon } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const ResumeDownload = () => {
    const pdfFile = "/resume/resume.pdf";

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
                <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                    {/* <div className="rounded-full bg-blue-400 p-3 text-sm font-medium dark:bg-gray-800">
                        <Document file={pdfFile}>
                            <Page pageIndex={0} />
                        </Document>
                    </div> */}
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Download My Resume
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Click on the below button to Download my Latest Resume.
                    </p>

                    <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
                        <Button
                            onClick={downloadPDF}
                            className={buttonVariants({ variant: "default" })}
                        >
                            <DownloadIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            <span>Download Resume</span>
                        </Button>

                        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeDownload;