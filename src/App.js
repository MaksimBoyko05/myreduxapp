import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './App.css';

const FeedbackForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ім'я є обов'язковим"),
    email: Yup.string()
      .email("Неправильний формат електронної пошти")
      .required("Електронна пошта є обов'язковою"),
    message: Yup.string()
      .min(10, "Повідомлення має містити щонайменше 10 символів")
      .required("Повідомлення є обов'язковим"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="container">
      <h1>Форма зворотного зв'язку</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Ім'я</label>
          <input id="name" type="text" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Електронна пошта</label>
          <input id="email" type="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="message">Повідомлення</label>
          <textarea id="message" rows="4" {...register("message")}></textarea>
          <p className="error">{errors.message?.message}</p>
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FeedbackForm />
    </div>
  );
}

export default App;
