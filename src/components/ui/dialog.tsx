"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

export function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  const describedBy = props["aria-describedby"] as string | undefined;
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%]",
          "gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-lg duration-200",
          className,
        )}
        {...props}
      >
        <AlertDialogPrimitive.Description
          data-slot="alert-dialog-description"
          id={describedBy}
          className="sr-only"
        />
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  );
}

export function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex w-full flex-col items-center gap-5 text-center sm:text-left", className)}
      {...props}
    />
  );
}

export function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-center", className)}
      {...props}
    />
  );
}

export const AlertDialogTitle = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Title>,
) => (
  <AlertDialogPrimitive.Title
    data-slot="alert-dialog-title"
    className={cn("text-center text-lg font-semibold leading-none", props.className)}
    {...props}
  >
    {props.children}
  </AlertDialogPrimitive.Title>
);

export const AlertDialogDescription = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Description>,
) => (
  <AlertDialogPrimitive.Description
    data-slot="alert-dialog-description"
    className={cn("text-center text-sm", props.className)}
    {...props}
  >
    {props.children}
  </AlertDialogPrimitive.Description>
);

export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
export const AlertDialogAction = AlertDialogPrimitive.Action;
