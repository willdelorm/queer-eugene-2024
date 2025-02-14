"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { announcementSchema } from "@/utils/schemas.utils";
import { onSubmitResourceAction } from "@/utils/actions.utils";
import { ExclamationTriangleIcon, RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";

const AnnouncementForm = ({ data }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(announcementSchema),
    defaultValues: data || {
      id: "",
      title: "",
      description: "",
      created: Date.now().toString(),
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    const res = await onSubmitResourceAction("announcements", formData);

    if (res.message !== "Success") {
      setErrorMessage(res.message);
      setIsSubmitting(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else {
      setSuccessMessage(res.message);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Annual Fundraiser" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Such a fun event"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {successMessage && (
          <Alert variant="success">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="mr-3" disabled={isSubmitting}>
          Submit
        </Button>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/dashboard"
        >
          Cancel
        </Link>
      </form>
    </Form>
  );
};

export default AnnouncementForm;
