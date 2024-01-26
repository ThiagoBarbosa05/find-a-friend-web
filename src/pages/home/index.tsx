import FormCity from '@/components/form-city'

import heroDogs from '../../assets/hero-dogs.png'
import logo from '../../assets/logo.png'

export function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center bg-[#F15156] p-6">
      <img className="mb-6 w-[120px]" src={logo} alt="find a friend logo" />
      <div className=" grid items-end justify-center gap-10 text-center lg:grid-cols-2 lg:gap-32 lg:text-left">
        <h2 className="text-3xl font-extrabold leading-8 text-white sm:text-5xl lg:text-7xl">
          Leve a felicidade para o seu lar
        </h2>
        <img src={heroDogs} alt="seis cães lado a lado" />
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[407px_1fr] lg:flex-row">
        <p className="text-center font-semibold leading-6 text-white lg:text-left lg:text-xl">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>

        <FormCity />
      </div>
    </div>
  )
}
