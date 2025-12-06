"use client";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import PfInput from "@/components/pf-components/pf-input/pf-input";

const RegisterForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={cn("flex max-w-xl flex-col gap-6", className)} {...props}>
      <Card className="gap-8 py-8">
        <CardHeader>
          <CardTitle className="text-preset-1">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <FieldGroup className="w-full gap-8">
              <Field className="w-full">
                <FieldLabel className="w-full">
                  <PfInput
                    label="Name"
                    htmlFor="register-name"
                    className="w-full"
                  >
                    <InputGroupInput
                      className="w-full"
                      placeholder="Your name"
                      type="text"
                    />
                  </PfInput>
                </FieldLabel>
              </Field>
              <Field className="w-full">
                <FieldLabel className="w-full">
                  <PfInput
                    label="Email"
                    htmlFor="register-email"
                    className="w-full"
                  >
                    <InputGroupInput
                      className="w-full"
                      placeholder="someone@gmail.com"
                      type="email"
                    />
                  </PfInput>
                </FieldLabel>
              </Field>
              <Field className="w-full">
                <FieldLabel className="w-full">
                  <PfInput
                    label="Password"
                    htmlFor="register-password"
                    className="w-full"
                    helperText="Password must be at least 8 characters"
                  >
                    <>
                      <InputGroupInput
                        className="w-full"
                        placeholder="Your password"
                        type={passwordVisible ? "text" : "password"}
                      />
                      <Button
                        onClick={togglePasswordVisibility}
                        type="button"
                        variant="tertiary"
                        size="sm"
                      >
                        <InputGroupAddon
                          align="inline-end"
                          className="cursor-pointer"
                        >
                          {passwordVisible ? (
                            <EyeSlashIcon
                              size={24}
                              weight="fill"
                              className="h-6 w-6"
                            />
                          ) : (
                            <EyeIcon
                              size={24}
                              weight="fill"
                              className="h-6 w-6"
                            />
                          )}
                        </InputGroupAddon>
                      </Button>
                    </>
                  </PfInput>
                </FieldLabel>
              </Field>
              <Field className="w-full gap-8">
                <Button className="w-full" type="submit">
                  Create Account
                </Button>
                <FieldDescription className="text-preset-4 text-center text-dim-grey">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-bold text-shadow-grey underline"
                  >
                    Login
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
