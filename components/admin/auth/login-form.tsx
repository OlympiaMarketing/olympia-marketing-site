"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"

const authSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  fullName: z.string().trim().optional(),
})

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const validation = authSchema.safeParse({
        email,
        password,
        fullName: isLogin ? undefined : fullName,
      })

      if (!validation.success) {
        toast({
          title: "Validation Error",
          description: validation.error.issues[0].message,
          variant: "destructive",
        })
        return
      }

      if (isLogin) {
        const { data: authData, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        })

        if (error) {
          toast({
            title: "Login Failed",
            description: error.message.includes("Invalid login credentials")
              ? "Invalid email or password"
              : error.message,
            variant: "destructive",
          })
          return
        }

        // Ensure profile row exists
        if (authData.user?.email) {
          await supabase.from("profiles").upsert(
            {
              id: authData.user.id,
              email: authData.user.email,
              full_name:
                typeof authData.user.user_metadata?.full_name === "string"
                  ? authData.user.user_metadata.full_name
                  : null,
            },
            { onConflict: "id" }
          )
        }

        toast({ title: "Welcome back!", description: "You have successfully signed in" })

        const redirect = searchParams.get("redirect") || "/admin/dashboard"
        router.push(redirect)
        router.refresh()
      } else {
        const { data: authData, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin/onboarding`,
            data: { full_name: fullName.trim() || "" },
          },
        })

        if (error) {
          toast({
            title: error.message.includes("already registered")
              ? "Account Exists"
              : "Error",
            description: error.message.includes("already registered")
              ? "This email is already registered. Please sign in instead."
              : error.message,
            variant: "destructive",
          })
          return
        }

        if (authData.user?.email) {
          await supabase.from("profiles").upsert(
            {
              id: authData.user.id,
              email: authData.user.email,
              full_name:
                typeof authData.user.user_metadata?.full_name === "string"
                  ? authData.user.user_metadata.full_name
                  : null,
            },
            { onConflict: "id" }
          )
        }

        toast({
          title: "Account Created!",
          description: "Welcome! Let's set up your agency profile.",
        })
        router.push("/admin/onboarding")
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="relative">
        <div className="absolute inset-0 scale-110 animate-pulse bg-gradient-to-r from-primary via-primary to-primary/50 opacity-30 blur-3xl" />
        <div className="absolute inset-0 scale-105 bg-gradient-to-br from-primary/40 to-primary/20 blur-2xl" />

        <Card className="relative w-full max-w-md shadow-lg backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "Sign in to manage proposals and clients"
                : "Get started with Olympia Marketing Admin"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={8}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                disabled={isLoading}
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
