import { useState } from "react";

export default function useSignupForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    bio: "",
  });

  const errors = {
    name: (() => {
      const v = values.name.trim();
      if (!v) return "이름을 입력해주세요.";
      if (v.length < 2) return "이름은 2글자 이상이어야 합니다.";
      return "";
    })(),

    email: (() => {
      const v = values.email.trim();
      if (!v) return "이메일을 입력해주세요.";
      if (!v.includes("@")) return "이메일 형식이 올바르지 않습니다.";
      return "";
    })(),

    address: (() => {
      const v = values.address.trim();
      if (!v) return "주소를 입력해주세요.";
      if (v.length < 5) return "주소는 5글자 이상이어야 합니다.";
      return "";
    })(),

    bio: (() => {
      const v = values.bio.trim();
      if (!v) return "자기소개를 입력해주세요.";
      if (v.length > 300) return "자기소개는 300글자 이하여야 합니다.";
      return "";
    })(),
  };

  const isValid = Object.values(errors).every((error) => error === "");

  const onChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return { values, errors, isValid, onChange };
}
