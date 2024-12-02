import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Ім'я користувача є обов'язковим"),
    email: Yup.string()
      .email("Неправильний формат електронної пошти")
      .required("Електронна пошта є обов'язковою"),
    password: Yup.string()
      .min(6, "Пароль має містити щонайменше 6 символів")
      .required("Пароль є обов'язковим"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі не співпадають")
      .required("Підтвердження пароля є обов'язковим"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log("Submitted Data:", values);
  };

  return (
    <div className="container">
      <h1>Реєстрація</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Ім'я користувача</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Електронна пошта</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Підтвердження пароля</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit">Зареєструватися</button>
        </Form>
      </Formik>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;
