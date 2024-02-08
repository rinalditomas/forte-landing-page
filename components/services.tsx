"use client";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Carousel from "./carousel";
import Modal from "./modal";
import { useState } from "react";

export interface ServicesProps {
  servicesRef: React.MutableRefObject<HTMLDivElement | null>;
}
const features = [
  {
    name: "Servicio 1",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Servicio 2",
    description: "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon,
  },
  {
    name: "Servicio 3",
    description: "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: ArrowPathIcon,
  },
  {
    name: "Servicio 4",
    description: "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Servicio 5",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon,
  },
  {
    name: "Servicio 6",
    description: "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon,
  },
];

export default function Services({ servicesRef }: ServicesProps) {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<null | any>(null);

  return (
    <div ref={servicesRef} className="relative bg-white py-16 sm:py-24 lg:py-32">
      <Modal open={open} setOpen={setOpen} selectedService={selectedService} setSelectedService={setSelectedService} />

      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-cyan-600">Desarrollo y producción eficientes</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Todo lo que necesitas para llevar tu proyecto al siguiente nivel
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          En Forte, entendemos la importancia de la eficiencia y la rapidez en cada etapa del proceso. Con nuestra
          amplia gama de servicios te ofrecemos las herramientas y la experiencia necesarias para llevar tu proyecto a
          la realidad en el menor tiempo posible.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="pt-6"
                onClick={() => {
                  setSelectedService(feature);
                  setOpen(true);
                }}
              >
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
