"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmitResourceAction } from "@/utils/actions.utils";
import { meetingSchema } from "@/utils/schemas.utils";

import { ExclamationTriangleIcon, RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const MeetingForm = ({ data }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(meetingSchema),
    defaultValues: data || {
      id: "",
      month: "",
      year: "",
      url: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    const res = await onSubmitResourceAction("meetings", formData);

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
          name="month"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Month</FormLabel>
              <FormControl>
                <Input placeholder="01" {...field} />
              </FormControl>
              <FormDescription>Please enter a two-digit month.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input placeholder="2024" {...field} />
              </FormControl>
              <FormDescription>Please enter a four-digit year.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.queereugene.org" {...field} />
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

export default MeetingForm;
