import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  MdCheckBox,
  MdClose,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(4)
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "only letters accepted")
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email not valid"
    )
    .required(),
  phone: yup.string().required(),
  job: yup.string().required(),
  policy: yup.boolean().required(),
});

const InscriptionForm = ({ setShowInscriptionForm }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      job: "",
      policy: false,
    },
    resolver: yupResolver(schema),
  });

  const policySelected = watch("policy");

 const submit = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'inscription');
      }

      // Notification de succès
      toast.success('Inscription réussie! Bienvenue parmi nous.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          border: '2px solid #4BB543',
          color: '#4BB543',
          fontWeight: '500',
        }
      });

      // Fermer le formulaire après 3 secondes
      setTimeout(() => {
        setShowInscriptionForm(false);
      }, 3000);

    } catch (error) {
      console.error('Erreur:', error);
      
      // Notification d'erreur
      toast.error(error.message || 'Une erreur est survenue lors de l\'inscription', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          border: '2px solid #ff3333',
          color: '#ff3333',
          fontWeight: '500',
        }
      });

      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };
  
  return (
    <div className="fixed inset-0 z-[2000] w-screen h-screen flex items-center justify-center">
 <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div
        className="absolute inset-0 z-[1999] w-screen h-screen bg-black/50"
        onClick={() => setShowInscriptionForm(false)}
      />
      <div className="relative z-[2001] flex xl:w-1/3 lg:w-[45%] md:w-[60%] w-[95%] h-fit bg-white rounded-lg p-8">
        <div
          className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-main_color hover:bg-[#c98520] transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => setShowInscriptionForm(false)}
        >
          <MdClose className="text-white w-5 h-5" />
        </div>
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-3xl font-medium text-center">Inscription</h2>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="username"
                className={`${
                  errors.username ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#c98520] transition-colors duration-200 delay-0 ease-in-expo peer`}
                placeholder=" "
                {...register("username")}
              />
              <label
                htmlFor="username"
                className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nom et Prénom
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="job"
                className={`${
                  errors.job ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#c98520] transition-colors duration-200 delay-0 ease-in-expo peer`}
                placeholder=" "
                {...register("job")}
              />
              <label
                htmlFor="job"
                className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Profession
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="email"
                className={`${
                  errors.email ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#c98520] transition-colors duration-200 delay-0 ease-in-expo peer`}
                placeholder=" "
                {...register("email")}
              />
              <label
                htmlFor="email"
                className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="phnoe"
                className={`${
                  errors.phone ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#c98520] transition-colors duration-200 delay-0 ease-in-expo peer`}
                placeholder=" "
                {...register("phone")}
              />
              <label
                htmlFor="phone"
                className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numéro de téléphone
              </label>
            </div>

            <div className="mt-0">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="policy"
                  className="hidden"
                  {...register("policy")}
                />
                <label
                  htmlFor="policy"
                  className="cursor-pointer flex items-center gap-1 text-xs font-medium"
                >
                  {policySelected ? (
                    <MdCheckBox className="w-6 h-6 text-main_color" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 text-main_color" />
                  )}
                  <span>
                    J’accepte{" "}
                    <NavLink
                      to="/"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      la Politique de Confidentialité des Données
                    </NavLink>
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                disabled={false}
                className={`w-full rounded-full bg-main_color hover:bg-[#c98520] transition-all duration-500 ease-in-out p-3 text-white text-base font-medium ${
                  false && "cursor-not-allowed"
                }`}
              >
                {false ? "Chargement..." : "S'inscrire"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionForm;
