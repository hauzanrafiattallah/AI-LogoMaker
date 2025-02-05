"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormLogoContext } from "./context/form-logo-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  description: z
    .string({ message: "Description is required" })
    .min(3, { message: "Description must be at least 3 characters" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const FormLogoDescription = () => {
  const formLogoCtx = useContext(FormLogoContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(values: FormSchemaType) {
    formLogoCtx.setState({
      name: "description", // TODO
      values: { ...formLogoCtx.values, name: values.description },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-black text-3xl">
          <h2>Describe your logo</h2>
        </CardTitle>
        <CardDescription className="font-semibold text-md">
          Describe your logo to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your logo description here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="submit"
                variant="secondary"
                onClick={() => formLogoCtx.setState({ name: "name" })}
              >
                <ArrowLeft />
                Back
              </Button>
              <Button type="submit" disabled={!form.formState.isValid}>
                Next
                <ArrowRight />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
