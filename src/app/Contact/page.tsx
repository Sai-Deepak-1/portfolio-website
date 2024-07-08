"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SendHorizontal, PhoneCall } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    try {
      // Here you would typically send the data to your backend API
      console.log("Form data:", data);

      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
      });

      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-8 sm:py-14 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[95vw] sm:max-w-[90vw]">
        <div className="relative flex flex-col h-[750px] items-center justify-center overflow-hidden rounded-[2rem] border p-6 sm:p-8">
          <div className="absolute z-10 px-4 sm:px-0 w-full max-w-md">
            <div className="mx-auto size-20 sm:size-24 lg:size-32 rounded-[2rem] border bg-white/10 p-2 sm:p-3 shadow-2xl backdrop-blur-md dark:bg-black/10">
              <PhoneCall className="mx-auto size-14 sm:size-16 lg:size-24 text-black dark:text-white" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Contact Me
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 w-full"
              >
                  <Input
                    {...register("name")}
                    placeholder="Your Name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                
                  <Input
                    {...register("subject")}
                    placeholder="Subject"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                
                  <Textarea
                    {...register("message")}
                    placeholder="Your Message"
                    className={errors.message ? "border-red-500" : ""}
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                

                <a
                href="mailto:psaideepak1@gmail.com"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-4 sm:px-6 text-sm sm:text-base",
                )}
              >
                Send Message
                <SendHorizontal size={20} strokeWidth={1.5} className="ml-1 size-3 sm:size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </a>
              </form>
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-white opacity-40 blur-xl dark:bg-black" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
        </div>
      </div>
    </section>
  );
}
