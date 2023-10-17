import { Link, useNavigate } from "react-router-dom";
import docWithMedicine from "../../assets/authentication/Doc-with-medicine.png";
import frameImg from "../../assets/authentication/Frame.png";
import Container from "../../Shared/Container";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const { createUser, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        updateUserProfile(data.name, data.imageURL)
          .then(() => {
            console.log(res.user);
            toast.success("Congrats!! Signup Successful😀");
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  return (
    <Container>
      <section className="md:flex items-center gap-28 md:pr-[10%] h-[924px] max-h-[1024px]">
        <div className="bg-[#07332F] md:w-1/2 md:px-[5%] h-full max-h-[1024px] flex flex-col items-center justify-center relative">
          <img
            src={docWithMedicine}
            alt=""
            className="max-w-xl w-64 md:w-full object-cover md:mt-16"
          />
          <img
            src={frameImg}
            alt=""
            className="absolute right-0 top-0 w-[268px] md:w-[464px] md:h-80"
          />
        </div>
        <div className="text-[#0A0808] md:w-1/2 pt-8 pb-16 px-5 md:py-0 md:px-0">
          <div className="border border-[#E6E6E6] rounded-[10px] py-8 px-5 md:p-[50px]">
            <h2 className="text-3xl text-center font-bold mb-6 md:mb-12">
              Sign Up to Doc House
            </h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <label
                htmlFor="name"
                className="text-xl font-semibold inline-block mb-[10px]"
              >
                Name
              </label>
              <br />
              <input
                type="text"
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter your name"
                className="bg-[#F3F3F3] text-[#9D9C9C] p-5 mb-4 md:mb-6 rounded-[10px] w-full focus:text-black"
              />
              <br />
              <label
                htmlFor="imageURL"
                className="text-xl font-semibold inline-block mb-[10px]"
              >
                Image URL
              </label>
              <br />
              <input
                type="url"
                {...register("imageURL", { required: true })}
                id="imageURL"
                placeholder="Enter your image URL"
                className="bg-[#F3F3F3] text-[#9D9C9C] p-5 mb-4 md:mb-6 rounded-[10px] w-full focus:text-black"
              />
              <br />
              <label
                htmlFor="name"
                className="text-xl font-semibold inline-block mb-[10px]"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Enter your email"
                className="bg-[#F3F3F3] text-[#9D9C9C] p-5 mb-4 md:mb-6 rounded-[10px] w-full focus:text-black"
              />
              <br />
              <label
                htmlFor="password"
                className="text-xl font-semibold inline-block mb-[10px]"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
                id="password"
                placeholder="Enter your password"
                className="bg-[#F3F3F3] text-[#9D9C9C] p-5 mb-4 md:mb-6 rounded-[10px] w-full focus:text-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  Password min 8 characters with 1 letter and number.
                </p>
              )}
              <br />
              <button
                disabled={loading}
                type="submit"
                className={` ${
                  loading && "bg-[#f7a58291]"
                } text-xl font-bold text-white bg-[#F7A582] rounded-[10px] w-full py-5 capitalize cursor-pointer mb-4 md:mb-6`}
              >
                {loading ? <BeatLoader color="black" /> : "Create Account"}
              </button>
            </form>
            <p className="text-[#6C6B6B] text-lg text-center">
              Already registered? Go to{" "}
              <Link to="/login" className="font-bold text-[#f7a582]">
                LOG IN
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
