"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormLogoContext } from "./context/form-logo-context";
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
    .string({ message: "description is required" })
    .min(3, { message: "min. 3 charater" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const FormLogoDescription = () => {
  const formLogoCtx = useContext(FormLogoContext);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: formLogoCtx.values.description,
    },
  });

  function onSubmit(values: FormSchemaType) {
    formLogoCtx.setState({
      name: "colors",
      values: { ...formLogoCtx.values, description: values.description },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-black text-4xl">
          <h2>Describe your Logo</h2>
        </CardTitle>
        <CardDescription className="font-semibold text-lg">
          Describe your logo, give an idea to your logo for creating perfect
          logo for your business
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
                      placeholder="Ex. Sukro is a roasted peanut snack. the logo should contains peanut and fire to represent it is roasted"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => formLogoCtx.setState({ name: "name" })}
              >
                <ArrowLeft />
                Previous
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