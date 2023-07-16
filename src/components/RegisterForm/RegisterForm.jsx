import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { AddBtn, NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from 'components/LogInForm/LogInFormStyled';

const RegisterFormStyled = () => {
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    // else if (
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(values.password)
    // ) {
    //   errors.password = 'Invalid password';
    // }

    if (!values.username) {
      errors.username = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <LogInFormStyled onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Enter your name</label>
      <NameInput
        type="text"
        name="username"
        {...formik.getFieldProps('username')}
        formadd="400px"
      />
      {formik.touched.username && formik.errors.username ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.username}</div>
        </motion.div>
      ) : null}

      <label htmlFor="email">Enter your e-mail</label>
      <NameInput type="email" name="email" {...formik.getFieldProps('email')} formadd="400px" />
      {formik.touched.email && formik.errors.email ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.email}</div>
        </motion.div>
      ) : null}
      <label htmlFor="password">Enter password</label>
      <NameInput
        type="password"
        name="password"
        {...formik.getFieldProps('password')}
        formadd="400px"
      />
      {formik.touched.password && formik.errors.password ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.password}</div>
        </motion.div>
      ) : null}
      <AddBtn type="submit" padding="10px 15px">
        LogIn!
      </AddBtn>
    </LogInFormStyled>
  );
};

// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")

export default RegisterFormStyled;
