import { DoorOpen, UserRound, X } from "lucide-react";
import Login from "./Login";
import { useAuth } from "../context/AuthContext";

function LoginButton() {
  const { isAuthenticated, logout, isLoginOpen, setIsLoginOpen } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <div onClick={() => setIsLoginOpen(true)} className="text-black">
          <UserRound className="hover:scale-110 text-black cursor-pointer" />
        </div>
      ) : (
        <div onClick={() => { setIsLoginOpen(false); logout() }} className="text-black">
          <DoorOpen className="hover:scale-110 text-black cursor-pointer" />
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
          <div className="relative">
            <X className="absolute top-7 right-7 text-black text-xl" onClick={() => setIsLoginOpen(false)} />
            <Login close={setIsLoginOpen} />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginButton;