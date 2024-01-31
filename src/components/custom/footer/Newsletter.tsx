"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { createNewsletterContact } from "@/services/api";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must contain at least 2 characters")
    .max(50, "First name can contain up to 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must contain at least 2 characters")
    .max(50, "Last name can contain up to 50 characters"),
  email: z.string().email("Invalid email"),
});

const Newsletter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: createNewsletterContact,
    onSuccess: () => {
      form.reset();
      toast.success("Welcome Aboard!", {
        description:
          "Thank you for subscribing! You're now signed up to receive the latest updates from us. Stay tuned to your inbox for exciting news and insights.",
        duration: 10000,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    contactMutation.mutate(values);
  }

  return (
    <div>
      <Typography variant="h4" className="text-white font-bold">
        SUBSCRIBE TO NEWSLETTER
      </Typography>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col xl:flex-row gap-5 xl:gap-2.5 xl:items-end mt-4"
        >
          <div className="grid grid-cols-2 gap-2.5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="px-2.5 bg-white border-none bg-opacity-25 text-white placeholder:text-white font-medium placeholder:font-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="px-2.5 bg-white border-none bg-opacity-25 text-white placeholder:text-white font-medium placeholder:font-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        className="px-2.5 bg-white border-none bg-opacity-25 text-white placeholder:text-white font-medium placeholder:font-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <Button className="h-12 w-[120px]" type="submit">
              Subscribe
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Newsletter;
