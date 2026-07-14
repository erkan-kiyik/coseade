"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GoogleButton } from "@/components/auth/google-button";

const schema = z.object({
  name: z.string().min(2, "Enter your name").max(80),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[a-zA-Z]/, "Must include a letter")
    .regex(/[0-9]/, "Must include a number"),
});
type FormValues = z.infer<typeof schema>;

export function SignupForm() {
  const router = useRouter();
  const [emailSent, setEmailSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: { full_name: values.name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    // If email confirmation is disabled, a session exists — go straight in.
    if (data.session) {
      router.push("/dashboard");
      router.refresh();
      return;
    }
    setEmailSent(true);
  };

  if (emailSent) {
    return (
      <div className="space-y-6 text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100">Check your inbox</h1>
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
            We sent you a confirmation link. Click it to activate your account and
            start optimizing your profile.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/login">Back to log in</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100">Start free</h1>
        <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Get recruiter-ready in under 60 seconds. No credit card required.
        </p>
      </div>

      <div>
        <GoogleButton />
      </div>

      <div className="flex items-center gap-3">
        <Separator className="flex-1 bg-blue-200/50 dark:bg-blue-700/50" />
        <span className="text-xs font-medium uppercase text-blue-500 dark:text-blue-400">or continue with email</span>
        <Separator className="flex-1 bg-blue-200/50 dark:bg-blue-700/50" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-blue-900 dark:text-blue-100 font-medium">Full name</Label>
          <Input
            id="name"
            placeholder="Alex Johnson"
            autoComplete="name"
            className="border-blue-200/50 dark:border-blue-700/50 bg-white/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-100 placeholder:text-blue-400 dark:placeholder:text-blue-500"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-blue-900 dark:text-blue-100 font-medium">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="border-blue-200/50 dark:border-blue-700/50 bg-white/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-100 placeholder:text-blue-400 dark:placeholder:text-blue-500"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-blue-900 dark:text-blue-100 font-medium">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className="border-blue-200/50 dark:border-blue-700/50 bg-white/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-100 placeholder:text-blue-400 dark:placeholder:text-blue-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="gradient"
          className="w-full mt-2 h-11 font-medium text-base"
          loading={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <div className="pt-4 border-t border-blue-200/30 dark:border-blue-700/30">
        <p className="text-center text-sm text-blue-700 dark:text-blue-300">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
