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
  const { handleSubmit, register } = formProps;
  const { onSubmit } = useSubmitHandler();

  return (
    <ContentContainer>
      <HeaderSpacer />
      <div className="mx-auto max-w-2xl px-6 pb-32 pt-16">
        <div className="mb-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primary">
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground">{t("contact.description")}</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              id="name"
              label={t("contact.name")}
              placeholder={t("contact.name")}
              required
              {...register(ContactFormFields.Name)}
            />

            <Input
              id="phone"
              type="number"
              label={t("contact.phone")}
              placeholder={t("contact.phone")}
              {...register(ContactFormFields.PhoneNumber)}
            />
          </div>
          <Input
            id="email"
            type="email"
            label={t("contact.email")}
            placeholder={t("contact.email")}
            required
            {...register(ContactFormFields.Email)}
          />
          <Input
            id="subject"
            label={t("contact.subject")}
            placeholder={t("contact.subject")}
            required
            {...register(ContactFormFields.Subject)}
          />
          <Textarea
            id="message"
            label={t("contact.message")}
            placeholder={t("contact.message")}
            className="min-h-[120px]"
            required
            {...register(ContactFormFields.Message)}
          />
          <div className="flex justify-end">
            <Button type="submit" className="w-full sm:w-auto" size="lg">
              {t("contact.send")}
            </Button>
          </div>
        </form>
      </div>
    </ContentContainer>
  );
};

export default Contact;
