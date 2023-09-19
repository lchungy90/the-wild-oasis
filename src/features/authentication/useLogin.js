import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      // go to another page right after login, is not necessary to get user data from supabase again (when calling useUser), use the current data and set it to query cache (e.g. calling useUser,by query data is from cache)
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("provide email or password are incorrect");
    },
  });

  return { login, isLoading };
}
