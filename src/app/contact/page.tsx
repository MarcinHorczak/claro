"use client";

import { useTranslations } from "next-intl";
import { ContentContainer, HeaderSpacer } from "@components/custom";
import { Button, Input, Textarea } from "@components/ui";
import {
  ContactFormFields,
  useFormProps,
  useSubmitHandler,
} from "./page.utils";

const Contact = () => {
  const t = useTranslations();
  const formProps = useFormProps();
  const { handleSubmit, register, formState } = formProps;
  const { isSubmitting } = formState;
  const { onSubmit } = useSubmitHandler();

  return (
    <ContentContainer>
      <HeaderSpacer />
      <div className="mx-auto max-w-2xl px-6 pb-32 pt-12 md:pt-14 xl:pt-20">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-lg font-bold text-primary md:text-3xl">
            {t("contact.title")}
          </h1>
          <p className="md:text-md text-sm text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label={t("contact.name")}
              placeholder={t("contact.name")}
              required
              {...register(ContactFormFields.Name)}
            />

            <Input
              type="number"
              label={t("contact.phone")}
              placeholder={t("contact.phone")}
              {...register(ContactFormFields.PhoneNumber)}
            />
          </div>
          <Input
            type="email"
            label={t("contact.email")}
            placeholder={t("contact.email")}
            required
            {...register(ContactFormFields.Email)}
          />
          <Input
            label={t("contact.subject")}
            placeholder={t("contact.subject")}
            required
            {...register(ContactFormFields.Subject)}
          />
          <Textarea
            label={t("contact.message")}
            placeholder={t("contact.message")}
            className="min-h-[120px]"
            required
            {...register(ContactFormFields.Message)}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full sm:w-auto"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {t("contact.send")}
            </Button>
          </div>
        </form>
      </div>
    </ContentContainer>
  );
};

export default Contact;
