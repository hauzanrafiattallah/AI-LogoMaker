"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormLogoContext } from "./context/form-logo-context";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ImgCartoon from "../../../public/images/cartoon.png";
import ImgMascott from "../../../public/images/mascott.png";
import ImgSimpleMinimalist from "../../../public/images/simple_minimalist.png";
import ImgAppLogo from "../../../public/images/app_logo.png";
import Image, { StaticImageData } from "next/image";

const formSchema = z.object({
  style: z.string(),
});

type FormSchemaType = z.infer<typeof formSchema>;

type StyleItem = {
  name: string;
  imgSrc: StaticImageData;
};

const data: StyleItem[] = [
  {
    name: "Cartoon",
    imgSrc: ImgCartoon,
  },
  {
    name: "Mascott",
    imgSrc: ImgMascott,
  },
  {
    name: "App Logo",
    imgSrc: ImgAppLogo,
  },
  {
    name: "Simple Minimalist",
    imgSrc: ImgSimpleMinimalist,
  },
];

const ItemComp = ({
  item,
  isSelected,
  onSelect,
}: {
  item: StyleItem;
  isSelected: boolean;
  onSelect: (item: StyleItem) => void;
}) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className={cn(
        "flex flex-col gap-4 border-2 hover:border-primary p-2",
        isSelected ? "border-primary" : "border-background"
      )}
    >
      <Image
        src={item.imgSrc}
        alt={item.name}
        objectFit="cover"
        className="w-42 h-42"
      />
      <div className="text-xl font-semibold text-center pb-4">{item.name}</div>
    </div>
  );
};

const StyleSelections = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (selected: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {data.map((item) => (
        <ItemComp
          key={item.name}
          item={item}
          isSelected={selected === item.name}
          onSelect={(v) => onChange(v.name)}
        />
      ))}
    </div>
  );
};

export const FormLogoStyles = () => {
  const formLogoCtx = useContext(FormLogoContext);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      style: formLogoCtx.values.style,
    },
  });

  function onSubmit(values: FormSchemaType) {
    formLogoCtx.setState({
      name: "generating",
      values: { ...formLogoCtx.values, style: values.style },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-black text-4xl">
          <h2>Pick style</h2>
        </CardTitle>
        <CardDescription className="font-semibold text-lg">
          Pick styles for your logo you want to create.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <StyleSelections
                      selected={field.value}
                      onChange={(selected) => field.onChange(selected)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => formLogoCtx.setState({ name: "colors" })}
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