import useProfileForm from "./useProfileForm";

export default function App() {
  const { values, errors, isValid, onChange } = useProfileForm();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="email" value={values.email} onChange={onChange("email")} />
      {errors.email && <p>{errors.email}</p>}

      <input value={values.nickname} onChange={onChange("nickname")} />
      {errors.nickname && <p>{errors.nickname}</p>}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
