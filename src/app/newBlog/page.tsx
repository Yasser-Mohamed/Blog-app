"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Id, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(100, " should be less than 100 characters"),
  tags: Yup.string().required("Tags are required"),
  image: Yup.string().required("Image URL is required"),
  body: Yup.string()
    .required("Body is required")
    .min(50, "should be more than 50 characters"),
});

export default function CreateBlog() {
  const router = useRouter()
  const [draftSaved, setDraftSaved] = useState(false);
  const [data, setData] = useState<string>("");
  const notify: Id = toast.success("❤️published !", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const initialValues = {
    title: "",
    tags: "",
    image: "",
    body: "",
  };


  const saveDraft = (values: any) => {
    localStorage.setItem("draft", JSON.stringify(values));
    setDraftSaved(true);
  };

  const handleSubmit = (values: any) => {
    setData(values);
  };

  const handelCancel = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <Field
              type="text"
              name="title"
              id="title"
              className="border border-gray-300 p-2 w-full rounded"
            />
            <ErrorMessage
              name="title"
              component="p"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block font-medium mb-1">
              Tags
            </label>
            <Field
              type="text"
              name="tags"
              id="tags"
              className="border border-gray-300 p-2 w-full rounded"
            />
            <ErrorMessage
              name="tags"
              component="p"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image URL
            </label>
            <Field
              type="text"
              name="image"
              id="image"
              className="border border-gray-300 p-2 w-full rounded"
            />
            <ErrorMessage
              name="image"
              component="p"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="body" className="block font-medium mb-1">
              Body
            </label>
            <Field
              as="textarea"
              name="body"
              id="body"
              rows="6"
              className="border border-gray-300 p-2 w-full rounded"
            />
            <ErrorMessage
              name="body"
              component="p"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => saveDraft(data)}
            >
              Save Draft
            </button>
            {draftSaved && <span className="text-green-500">Draft saved!</span>}
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              onClick={handelCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      {data && (
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      )}
    </div>
  );
}
