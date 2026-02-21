import useSignupForm from "./useSignupForm";

export default function App() {
  const { values, errors, isValid, onChange } = useSignupForm();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={values.name} onChange={onChange("name")} />
      {errors.name && <p>{errors.name}</p>}

      <input type="email" value={values.email} onChange={onChange("email")} />
      {errors.email && <p>{errors.email}</p>}

      <input value={values.address} onChange={onChange("address")} />
      {errors.address && <p>{errors.address}</p>}

      <textarea value={values.bio} onChange={onChange("bio")} />
      {errors.bio && <p>{errors.bio}</p>}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
