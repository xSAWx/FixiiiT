import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { MdClose } from "react-icons/md";
import OtpInput from "react-otp-input";
import { useSignOtp } from "../../Hooks/useSign";

function OTP({ open, setopen }) {
  const { loading, message, checkOtp, sendOtp } = useSignOtp();

  const [otp, setotp] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const Send = async () => {
    setSeconds(20);
    await sendOtp();
  };

  const Check = async () => {
    await checkOtp(otp)
  };

  return (
    <Modal open={open} onClose={setopen} closabel={false}>
      <section className=" md:w-[700px] w-11/12 mx-auto rounded-lg tracking-wide bg-white min-h-96 py-2">
        {/* TITLE  */}
        <article className="py-3 pb-4  border-b border-black/30 text-4xl items-center grid grid-cols-5 font-bold text-center">
          <span />
          <p className="col-span-3">Verify</p>
          <MdClose
            onClick={() => setopen(false)}
            className="justify-self-end text-red-600 mr-4 cursor-pointer"
          />
        </article>

        <article className="p-6 py-10 text-xl font-semibold ">
          Enter the code you recived on your email
          <aside className="mx-auto">
            <OtpInput
              value={otp}
              onChange={setotp}
              numInputs={6}
              renderSeparator={<span className="mx-2 md:flex hidden">-</span>}
              inputStyle={false}
              inputType="number"
              renderInput={(props) => (
                <input
                  {...props}
                  style={{ width: "" }}
                  className={`outline-none  md:py-5 py-3 my-6 md:text-3xl text-xl text-center mx-auto justify-center ju-s-c bg-black bg-opacity-15 rounded-xl md:w-16 w-full  border-white/10 border placeholder:text-white/10 
                    ${
                      message.check &&
                      "!border-red-600 !border-opacity-30 bg-red-900 text-red-600 !bg-opacity-5"
                    }
                      `}
                />
              )}
            />
            <h2 className="">
              Didn't Recive The Code{" "}
              <span
                onClick={Send}
                className={`text-tertiary hover:text-orange-700 cursor-pointer duration-300 ${
                  seconds && "pointer-events-none !text-gray-600"
                }`}
              >
                Send Again {seconds ? <span>({seconds})</span> : <></>}
              </span>
            </h2>
          </aside>
        </article>
        <article className="py-3 border-t border-black/20 flex justify-center gap-6">
          <button
              onClick={Check}
            disabled={otp.length < 6 || false}
            className=" bg-tertiary w-44 h-14 text-xl hover:text-tertiary hover:bg-white border border-tertiary font-bold text-white py-2 disabled:pointer-events-none disabled:opacity-40 transition-all rounded-lg"
          >
            {loading ? (
              <div className="w-7 h-7 loader mx-auto !border-t-white" />
            ) : (
              "Verify OTP"
            )}
          </button>
        </article>
      </section>
    </Modal>
  );
}

export default OTP;
