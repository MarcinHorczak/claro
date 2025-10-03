import { X, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@components/ui";

interface WorkshopPosterProps {
  imageUrl: string;
  name: string;
}

export const WorkshopPoster = ({ imageUrl, name }: WorkshopPosterProps) => {
  const t = useTranslations();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-primary">
          {t("offers.workshop.poster")}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="group relative bg-gray-100">
          <div className="hidden sm:block">
            <Dialog>
              <DialogTrigger asChild>
                <button className="block w-full cursor-pointer focus:outline-none focus:ring-0">
                  <Image
                    src={imageUrl}
                    alt={`${t("offers.workshop.poster")}: ${name}`}
                    width={0}
                    height={0}
                    className="h-auto w-full transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-200 group-hover:bg-opacity-20">
                    <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="rounded-full bg-white p-2 shadow-lg">
                        <ZoomIn className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="h-auto w-auto max-w-none border-none bg-transparent p-0 shadow-none"
                hideCloseButton
              >
                <DialogTitle className="sr-only">
                  {t("offers.workshop.poster")}: {name}
                </DialogTitle>
                <DialogDescription className="sr-only" />
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <DialogClose className="absolute -right-3 -top-3 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100">
                      <X className="h-5 w-5 text-gray-700" />
                    </DialogClose>
                    <Image
                      src={imageUrl}
                      alt={`${t("offers.workshop.poster")}: ${name}`}
                      width={0}
                      height={0}
                      className="h-auto max-h-[95vh] w-auto max-w-[95vw] rounded-lg object-contain"
                      sizes="95vw"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="block sm:hidden">
            <Image
              src={imageUrl}
              alt={`${t("offers.workshop.poster")}: ${name}`}
              width={0}
              height={0}
              className="h-auto w-full"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
