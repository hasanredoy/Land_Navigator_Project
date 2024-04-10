import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center ">
      {err.status === 404 && (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">Oops !! Page Not Found</h1>
              
              <Link to={"/"}>
              <button className="btn btn-error text-white">Back Home</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Error;
