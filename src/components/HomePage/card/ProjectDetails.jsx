import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectDetails = ({ features }) => {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-[450px]">
        <CarouselContent>
          {features.map((features, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex justify-center items-center">
                <Card>
                  <CardTitle className="px-2 py-2">
                    <h1>{index + 1}. {features.title}</h1>
                  </CardTitle>
                  <CardContent className="px-2 py-2">
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    <Image
                      width={1918}
                      height={862}
                      src={features.img}
                      alt="Project Image"
                    />
                    <h1>{features.detail}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectDetails;
