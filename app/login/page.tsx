"use client";

import {} from "@heroicons/react/16/solid";
import {} from "@heroicons/react/24/outline";
import FormInput from "../../components/form-input";
import FormButton from "../../components/form-button";
import SocialLogin from "../../components/social-login";

export default function Login() {
  const onClick = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        id: "test",
        password: "1234",
      }),
    });

    console.log(await response.json());
  };
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
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <FormInput type="email" placeholder="Email" required errors={[]} />
          <FormInput
            type="password"
            placeholder="Password"
            required
            errors={[]}
          />
        </div>
      </form>
      <span onClick={onClick}>
        <FormButton loading={false} text="Log in" />
      </span>
      <SocialLogin />
    </div>
  );
}
