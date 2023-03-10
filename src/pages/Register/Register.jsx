import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";

export default function Register() {
  return (
    <div className="bg-blue-500 border-gray-50 border-t-2 border-b-2">
      <div
        className="lg:max-w-screen-sm container mx-auto border-0 rounded-lg my-24"
        style={{ backgroundColor: " rgba(60, 60, 60, 0.4)" }}
      >
        <RegisterForm id="dangKy" />
      </div>
    </div>
  );
}
