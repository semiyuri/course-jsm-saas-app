"use client";

import { CompanionFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/lib/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";

const CompanionForm = () => {
  const form = useForm<CompanionFormSchema>({
    resolver: zodResolver(CompanionFormSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit = async (data: CompanionFormSchema) => {
    const companion = await createCompanion(data);

    if (companion) {
      redirect(`/companions/${companion.id}`);
    } else {
      console.error("Failed to create companion");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>Companion Name</FormLabel>

              <FormControl>
                <Input
                  placeholder="Enter the companion name"
                  className="input"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>Subject</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the subject" />
                  </SelectTrigger>

                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        key={subject}
                        value={subject}
                        className="capitalize"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>What should the companion help with?</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="Ex. Derivatives & Integrals"
                  className="input"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>Voice</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the voice" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>Style</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the style" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem className="gap-1.5">
              <FormLabel>Estimated duration</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  placeholder="15"
                  className="input"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer mt-4"
          disabled={form.formState.isSubmitting}
        >
          Build Your Companion
        </Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
