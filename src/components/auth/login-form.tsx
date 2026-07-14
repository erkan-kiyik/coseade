"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});
type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    router.push(next);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100">Welcome back</h1>
        <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Log in to your LinkedBoost AI account and continue optimizing your profile
        </p>
      </div>

      <div>
        <GoogleButton next={next} />
      </div>

      <div className="flex items-center gap-3">
        <Separator className="flex-1 bg-blue-200/50 dark:bg-blue-700/50" />
        <span className="text-xs font-medium uppercase text-blue-500 dark:text-blue-400">or continue with email</span>
        <Separator className="flex-1 bg-blue-200/50 dark:bg-blue-700/50" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-blue-900 dark:text-blue-100 font-medium">Password</Label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
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
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="pt-4 border-t border-blue-200/30 dark:border-blue-700/30">
        <p className="text-center text-sm text-blue-700 dark:text-blue-300">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">
            Start free
          </Link>
        </p>
      </div>
    </div>
  );
}
