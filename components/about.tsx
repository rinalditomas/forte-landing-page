const stats = [
  { label: "Fundada", value: "2021" },
  { label: "Empleados", value: "37" },
  { label: "Paises", value: "12" },
  { label: "Recaudado", value: "$25M" },
];

interface AboutProps {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function About({ aboutRef }: AboutProps) {
  return (
    <div ref={aboutRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://mercado.com.ar/wp/wp-content/uploads/2020/06/metalurgia.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-cyan-600">Valores de la empresa</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Construyendo un Futuro Forjado en Excelencia: Nuestra Historia en la Metalurgia
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  En Forte, nos enorgullecemos de ser pioneros en la industria metalúrgica. Con más de 45 años de
                  experiencia, hemos construido un legado de innovación, calidad y confiabilidad. Nuestra pasión por la
                  metalurgia impulsa cada aspecto de nuestro trabajo, desde la investigación y el desarrollo hasta la
                  producción y la entrega.
                </p>
                <p className="mt-8">
                  Nuestro equipo está formado por expertos en el campo, comprometidos con la excelencia en todo lo que
                  hacemos. Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo soluciones a
                  medida que impulsan el progreso en diversas industrias. Además, nos comprometemos con prácticas
                  sostenibles que minimizan nuestro impacto en el medio ambiente y promueven un futuro más limpio y
                  saludable.
                </p>
                <p className="mt-8">
                  En Forte, no solo fabricamos productos, creamos asociaciones duraderas basadas en la confianza y la
                  integridad. Estamos aquí para satisfacer sus necesidades metalúrgicas más exigentes y trabajar juntos
                  para alcanzar el éxito. Bienvenido a nuestra familia metalúrgica, donde la calidad y la innovación son
                  nuestra razón de ser.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
