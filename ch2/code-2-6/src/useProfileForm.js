import { useState } from "react";

export default function useProfileForm() {
  const [values, setValues] = useState({ email: "", nickname: "" });

  const email = values.email.trim();
  const nickname = values.nickname.trim();

  const isCompanyEmail = email.endsWith("@company.com");

  const errors = {
    email: (() => {
      if (!email) return "이메일을 입력해주세요.";
      if (!email.includes("@")) return "이메일 형식이 올바르지 않습니다.";
      return "";
    })(),

    nickname: (() => {
      if (!nickname) return "닉네임을 입력해주세요.";

      if (isCompanyEmail) {
        if (!nickname.includes(".")) {
          return "회사 이메일은 firstname.lastname 형식만 허용됩니다.";
        }
        return "";
      }

      if (nickname.length < 2) return "닉네임은 2글자 이상이어야 합니다.";
      return "";
    })(),
  };

  const isValid = Object.values(errors).every((error) => error === "");

  const onChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return { values, errors, isValid, onChange };
}
