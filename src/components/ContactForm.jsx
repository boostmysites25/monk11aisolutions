import React, { useContext } from "react";
import img from "../assets/images/contact-form.webp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../data/constant";

const ContactForm = ({ headline, id }) => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    values.company && (emailBody += "Company: " + values.company + "\n\n");
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "Contact Form Submission - Monk 11 AI Solutions",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      id={id}
      className="wrapper rounded-2xl grid md:grid-cols-2 gap-3 py-[4rem]"
    >
      <div
        data-aos="fade-right"
        className="bg-purpleColor text-white p-8 sm:p-10 rounded-2xl"
      >
        <h3 className="section-heading !text-white">
          {headline ? headline : "Let’s build something great together."}
        </h3>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-4 mt-7"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-white/80">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Company Name (Optional)"
                {...register("company")}
              />
            </div>
          </div>
          <div className="">
            <input
              type="email"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="text-primary">{errors.email?.message}</small>
          </div>
          <div className="">
            <input
              type="tel"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-primary">{errors.phone?.message}</small>
          </div>
          <div className="">
            <textarea
              type="tel"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="text-primary">{errors.message?.message}</small>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <button
              disabled={isSubmitting}
              className="btn rounded bg-white text-black w-full hover:bg-primary hover:text-white hover:shadow-primary/20"
            >
              Send Message
            </button>
            {/* <small className="">
              By sending this form, I confirm that I have read and accepted the
              <Link className="font-semibold" to="/">
                {" "}
                Privacy Policy.
              </Link>
            </small> */}
          </div>
        </form>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#F7F7F9] rounded-2xl md:block hidden overflow-hidden"
      >
        <img src={img} alt="Contact" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactForm;
