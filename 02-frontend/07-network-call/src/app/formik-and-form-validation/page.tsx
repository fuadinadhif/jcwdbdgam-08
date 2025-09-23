"use client";

import { Formik } from "formik";
import * as Yup from "yup";

const ArticleSchema = Yup.object().shape({
  email: Yup.string()
    .email("Tolong masukkan email yang baik dan benar")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(8, "Password minimal 8 karakter")
    .matches(/[a-z]/, "Password harus mengandung huruf kecil")
    .matches(/[A-Z]/, "Password harus mengandung huruf besar"),
});

export default function FormikAndFormValidation() {
  return (
    <main>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          alert(`Form submitted: ${values.email}, ${values.password}`)
        }
        validationSchema={ArticleSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <button type="submit">Login</button>
            </form>
          );
        }}
      </Formik>
    </main>
  );
}
