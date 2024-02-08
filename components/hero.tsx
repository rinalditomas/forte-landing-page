"use client";
import { MutableRefObject, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Sobre Nosotros", href: "#" },
  { name: "Nuestros servicios", href: "#" },
  { name: "Contactanos", href: "#" },
];

interface HeroProps {
  contactRef: React.MutableRefObject<HTMLElement | null>;
  aboutRef: React.MutableRefObject<HTMLElement | null>;
  servicesRef: React.MutableRefObject<HTMLElement | null>;
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Hero({ contactRef, aboutRef, servicesRef, homeRef }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const executeScrollContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const executeScrollAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const executeScrollServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div ref={homeRef} className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className=" text-gray-700 font-bold text-4xl">Forte</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={(event) => {
                  event.preventDefault();
                  if (item.name === "Contactanos") {
                    executeScrollContact();
                  }
                  if (item.name === "Sobre Nosotros") {
                    executeScrollAbout();
                  }
                  if (item.name === "Nuestros servicios") {
                    executeScrollServices();
                  }
                }}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className=" text-gray-700 font-bold text-4xl">Forte</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={(event) => {
                        event.preventDefault();
                        if (item.name === "Contactanos") {
                          executeScrollContact();
                        }
                        if (item.name === "Sobre Nosotros") {
                          executeScrollAbout();
                        }
                        if (item.name === "Nuestros servicios") {
                          executeScrollServices();
                        }
                      }}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Transformamos metales en soluciones innovadoras para el mundo moderno
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                En nuestra fundición, la excelencia es nuestra norma y la calidad es nuestra obsesión. Desde el diseño
                hasta la entrega, cada pieza que forjamos es un testimonio de nuestra dedicación inquebrantable a la
                artesanía y la precisión. Únete a nosotros en el viaje mientras redefinimos los estándares de la
                metalurgia y abrimos nuevas posibilidades para el futuro. Juntos, estamos moldeando el mañana.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  onClick={(event) => {
                    event.preventDefault();
                    executeScrollContact();
                  }}
                >
                  Contactanos!
                </a>
              </div>
            </div>
            <img
              src="https://ferrosplanes.com/wp-content/uploads/2020/08/industria-metalurgia-2-1.jpeg"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
