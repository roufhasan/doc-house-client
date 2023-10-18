import { useForm } from "react-hook-form";
import Container from "../../Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import docWithMedicine from "../../assets/authentication/Doc-with-medicine.png";
import frameImg from "../../assets/authentication/Frame.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const { signIn, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Welcome To Doc House😀");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        toast.error(err.message);
      });
  };
  return (
    <Container>
      <section className="md:flex items-center gap-28 md:pr-[10%] h-[789px] max-h-[1024px]">
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
              Log In to Doc House
            </h2>
            <form onSubmit={handleSubmit(handleLogin)}>
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
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-xl font-semibold inline-block mb-[10px]"
                >
                  Password
                </label>
                <Link to="/login" className="text-[#F7A582]">
                  Forgot password?
                </Link>
              </div>
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
                {loading ? <BeatLoader color="black" /> : "Log In"}
              </button>
            </form>
            <p className="text-[#6C6B6B] text-lg text-center">
              Please register at first. Go to{" "}
              <Link to="/signup" className="font-bold text-[#f7a582]">
                SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
