"use client";

import {} from "@heroicons/react/16/solid";
import {} from "@heroicons/react/24/outline";
import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import handleForm from "./action";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div
      className="flex flex-col gap-10
      py-8 px-6"
    >
      <div
        className="flex flex-col gap-2
        *:font-medium"
      >
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={[]}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.errors ?? []}
          />
        </div>
        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
