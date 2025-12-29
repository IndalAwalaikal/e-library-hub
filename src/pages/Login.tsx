import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-primary">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span>E-Library</span>
            </Link>
            <h2 className="mt-6 font-display text-3xl font-bold text-foreground">
              Selamat Datang Kembali
            </h2>
            <p className="mt-2 text-muted-foreground">
              Masuk ke akun Anda untuk melanjutkan membaca
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Ingat saya
                </Label>
              </div>
              <Link to="/forgot-password" className="text-sm font-medium text-secondary hover:underline">
                Lupa password?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Masuk
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <Link to="/register" className="font-medium text-secondary hover:underline">
                Daftar sekarang
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 gradient-primary">
          <div className="flex h-full flex-col items-center justify-center p-12 text-primary-foreground">
            <div className="max-w-md text-center">
              <BookOpen className="mx-auto h-20 w-20 mb-8 opacity-90" />
              <h3 className="font-display text-3xl font-bold mb-4">
                Jelajahi Dunia Literasi
              </h3>
              <p className="text-lg text-primary-foreground/80">
                Akses ribuan buku digital kapan saja, di mana saja. 
                Mulai perjalanan membaca Anda bersama E-Library.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
