import { useForm } from "react-hook-form";
import { WEBHOOK_URL } from "@config";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { z } from "zod";

export enum ContactFormFields {
  Name = "name",
  Email = "email",
  PhoneNumber = "phoneNumber",
  Subject = "subject",
  Message = "message",
}

const validationSchema = z.object({
  [ContactFormFields.Name]: z.string().min(1),
  [ContactFormFields.Email]: z.email(),
  [ContactFormFields.PhoneNumber]: z.string(),
  [ContactFormFields.Subject]: z.string().min(1),
  [ContactFormFields.Message]: z.string().min(1),
});

type ContactFormValues = z.infer<typeof validationSchema>;

const defaultValues: ContactFormValues = {
  [ContactFormFields.Name]: "",
  [ContactFormFields.Email]: "",
  [ContactFormFields.PhoneNumber]: "",
  [ContactFormFields.Subject]: "",
  [ContactFormFields.Message]: "",
};

export const useFormProps = () =>
  useForm<ContactFormValues>({
    defaultValues,
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

export const useSubmitHandler = () => {
  const t = useTranslations();

  const onSubmit = async (data: ContactFormValues) => {
    await axios
      .post(WEBHOOK_URL, data)
      .then(() => {
        toast.success(t("contact.success"));
      })
      .catch(() => {
        toast.error(t("contact.error"));
      });
  };

  return { onSubmit };
};
