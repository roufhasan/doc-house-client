import Container from "../../Shared/Container";
import errorImg from "../../assets/error/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[38px] md:text-6xl font-bold text-center">
          Sorry,
        </h1>
        <p className="text-[25px] md:text-[40px] text-[#6C6B6B] text-center">
          This page not found.
        </p>
        <img
          src={errorImg}
          alt="error image"
          className="w-[273px] md:w-[610px] object-cover my-12"
        />
        <Link
          to="/"
          className="text-xl font-bold text-white bg-[#F7A582] py-4 px-20 rounded-[10px]"
        >
          Back to home
        </Link>
      </section>
    </Container>
  );
};

export default ErrorPage;
