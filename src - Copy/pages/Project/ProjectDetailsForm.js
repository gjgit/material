import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, Card, TextField, Typography } from "@material-ui/core";

const ProjectDetailsForm = (props) => {
  const { onBack, onNext, ...other } = props;

  return (
    <Formik
      initialValues={{
        projectName: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        projectName: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(255)
          .required("Required"),
        tags: Yup.array(),
        startDate: Yup.date(),
        endDate: Yup.date(),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Call API to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          if (onNext) {
            onNext();
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit} {...other}>
          <Card sx={{ p: 3 }}>
            <Typography color="textPrimary" variant="h6">
              Project details
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                error={Boolean(touched.projectName && errors.projectName)}
                fullWidth
                helperText={touched.projectName && errors.projectName}
                label="Project Name"
                name="projectName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projectName}
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 6,
              }}
            >
              {onBack && (
                <Button
                  color="primary"
                  onClick={onBack}
                  size="large"
                  variant="text"
                >
                  Previous
                </Button>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Next
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

ProjectDetailsForm.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default ProjectDetailsForm;
