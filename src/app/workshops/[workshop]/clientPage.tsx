"use client";

import { MapPin, Users } from "lucide-react";
import Link from "next/link";
import {
  ContentContainer,
  MarkdownPreview,
  PageContainer,
  WorkshopPoster,
} from "@components/custom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Text,
} from "@components/ui";
import { Workshop } from "@utils";
import { Paths } from "@utils/paths";

interface WorkshopClientProps {
  workshop: Workshop;
}

export const WorkshopClient = ({ workshop }: WorkshopClientProps) => {
  // const formatDate = (dateString: string) => {
  //   return new Date(dateString).toLocaleDateString("pl-PL", {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };

  return (
    <PageContainer>
      <ContentContainer>
        <div className="grid gap-12 px-4 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <Heading>{workshop.name}</Heading>
            <Card>
              <CardContent className="space-y-4 px-8 py-4">
                <MarkdownPreview content={workshop.description} />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8 lg:col-span-4">
            <WorkshopPoster
              imageUrl={workshop.image.formats.small.url}
              name={workshop.name}
            />
            <div className="space-y-8 lg:col-span-4">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    Szczegóły
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900">
                          Lokalizacja
                        </p>
                        <p className="text-sm text-gray-600">
                          Do uzgodnienia z organizatorem
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900">Format</p>
                        <p className="text-sm text-gray-600">
                          Grupa zamknięta, na zamówienie
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    Zapisz się
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="leading-relaxed text-gray-600">
                    Wypełnij formularz poniżej, aby zapisać się. Skontaktujemy
                    się z Tobą w celu potwierdzenia uczestnictwa i omówienia
                    szczegółów.
                  </p>

                  <div>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" variant="default">
                        Zapisz się
                      </Button>
                    </Link>
                    <div className="mt-4 flex items-center gap-1">
                      <Text variant="small" as="span">
                        Masz pytania?
                      </Text>
                      <Link
                        href={Paths.Contact}
                        className="text-primary hover:underline"
                      >
                        <Text variant="small" as="span">
                          Skontaktuj się z nami
                        </Text>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};
