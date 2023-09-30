"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  return (
    <div
      className="
            p-4
            bg-white
            border-t
            flex
            items-center
            gap-2
            lg:gap-4
            w-full
            "
    >
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          type="text"
          id="message"
          register={register}
          errors={errors}
          required
          placeHolder="Write a message"
        />
        <button 
        type="submit"
        className="
        rounded-full
        p-2
        bg-sky-500
        cursor-pointer
        hover:bg-sky-600
        text-white
        transition
        "
        >
            <HiPaperAirplane size={18}/>
        </button>
      </form>
    </div>
  );
};

export default Form;
