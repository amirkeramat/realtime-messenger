"use client";

import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //axios register//
    }

    if (variant === "LOGIN") {
      //next auth sign in//
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //next auth social sign in
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input errors={errors} id="name" register={register} label="Name" />
          )}
          <Input
            errors={errors}
            type="email"
            id="email"
            register={register}
            label="Email address"
          />
          <Input
            errors={errors}
            type="password"
            id="password"
            register={register}
            label="Password address"
          />
          <div>
            <Button 
            disabled={isLoading} 
            type="submit"
            fullWidth            
            >
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
