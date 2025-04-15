import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as Toast from "@radix-ui/react-toast";
import { MdEmail } from "react-icons/md";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email invalide")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email non valide")
    .required("L'adresse email est requise"),
});

const NewsLetter = () => {
  const [open, setOpen] = React.useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    console.log(values);
    setOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section className="w-full bg-white px-4 md:px-12 xl:px-24 py-20">
        <div className="relative flex flex-col lg:flex-row items-center gap-10 bg-gray-50 rounded-xl shadow-xl p-6 sm:p-10 md:p-14 max-w-6xl mx-auto">
          {/* Icon */}
          <div className="lg:absolute lg:-top-6 lg:right-6 w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-orange-500 border-4 border-white flex justify-center items-center shadow-md self-center lg:self-start">
          <MdEmail className="text-white text-3xl lg:text-4xl" />
          </div>

          {/* Text & Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Inscrivez-vous à notre newsletter
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Restez informé de nos actualités, formations et meilleures astuces pour vous améliorer !
            </p>

            <form onSubmit={handleSubmit(submit)} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Entrez votre adresse email"
                {...register("email")}
                className={`w-full sm:w-72 px-5 py-3 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.email ? "border-2 border-red-500" : "border border-transparent"
                }`}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                S'inscrire
              </button>
            </form>

            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
      </section>

      <Toast.Root
        className="relative flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg max-w-sm w-full"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-2 text-lg font-medium text-gray-800 text-center">
          Inscription réussie
        </Toast.Title>
        <Toast.Description asChild>
          <p className="text-sm text-gray-600 text-center">
            Vous recevrez bientôt nos newsletters dans votre boîte mail.
          </p>
        </Toast.Description>
        <Toast.Action
          className="absolute top-4 right-4 text-xs text-gray-500 hover:text-gray-700"
          asChild
          altText="Fermer"
        >
          <button>X</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-4 flex w-[390px] max-w-[100vw] flex-col gap-2.5 outline-none" />
    </Toast.Provider>
  );
};

export default NewsLetter;
