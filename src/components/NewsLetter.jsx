import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as Toast from "@radix-ui/react-toast";
import { MdEmail } from "react-icons/md";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email non valide"
    )
    .required(),
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
      <section className="flex justify-center xl:px-24 md:px-16 sm:px-10 px-6 py-24 bg-white w-full">
        <div className="relative flex flex-col lg:flex-row gap-8 sm:p-12 p-10 items-center bg-gray-50 rounded-lg shadow-lg max-w-6xl">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 text-left">
              Inscrivez-vous à notre newsletter
            </h2>
            <p className="md:text-lg text-sm text-gray-600 leading-7">
              Restez informé de nos actualités, formations et meilleures astuces
              pour vous améliorer !
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubmit(submit)}
            >
              <input
                type="email"
                className={`${
                  errors.email ? "border-2 border-red-500" : "border-transparent"
                } w-full sm:w-80 h-12 px-6 py-3 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Entrez votre adresse email"
                {...register("email")}
              />
              <button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300"
              >
                S'inscrire
              </button>
            </form>
          </div>
          <div className="absolute z-20 lg:-right-16 right-8 lg:-top  w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-orange-500 flex justify-center items-center border-4 border-white">
            <MdEmail className="text-white text-4xl" />
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
          className="absolute top-4 right-4 inline-flex h-[25px] items-center justify-center rounded-md px-2.5 text-xs font-medium text-gray-500"
          asChild
          altText="Close"
        >
          <button className="text-gray-500 hover:text-gray-700">X</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none" />
    </Toast.Provider>
  );
};

export default NewsLetter;
