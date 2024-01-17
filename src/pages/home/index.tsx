import { Search } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import heroDogs from '../../assets/hero-dogs.png'
import logo from '../../assets/logo.png'

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F15156] p-6">
      <img className="w-[120px]" src={logo} alt="find a friend logo" />

      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-extrabold leading-8 text-white">
          Leve a felicidade para o seu lar
        </h2>
        <img src={heroDogs} alt="seis cães lado a lado" />
      </div>

      <div className="mt-10 flex flex-col items-start gap-10">
        <p className="text-center font-semibold leading-6 text-white">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>

        <div className="flex w-full flex-col gap-2">
          <span className="text-sm text-white">Busque um amigo:</span>
          <form className=" grid w-full grid-cols-3  gap-2">
            <Select>
              <SelectTrigger className="flex items-center gap-2 rounded-lg border border-white  bg-transparent px-4 py-3 font-bold text-white">
                <SelectValue placeholder="PE" />
              </SelectTrigger>
              <SelectContent className="rounded-md bg-[#E44449] shadow-lg">
                <SelectItem className="text-white" value="1">
                  RJ
                </SelectItem>
                <SelectItem className="text-white " value="2">
                  SP
                </SelectItem>
                <SelectItem className="text-white " value="3">
                  ES
                </SelectItem>
                <SelectItem className="text-white " value="4">
                  MG
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="col-span-2 flex flex-1 items-center justify-center gap-2  rounded-lg bg-[#E44449]  px-4 py-3 text-white">
                <SelectValue placeholder="cidade" />
              </SelectTrigger>
              <SelectContent className=" bg-[#E44449]">
                <SelectItem className="text-white" value="1">
                  Estado 2
                </SelectItem>
                <SelectItem className="text-white" value="2">
                  Estado 2
                </SelectItem>
                <SelectItem className="text-white" value="3">
                  Estado 2
                </SelectItem>
                <SelectItem className="text-white" value="4">
                  Estado 2
                </SelectItem>
              </SelectContent>
            </Select>

            <button className="col-span-3 flex items-center justify-center gap-2 rounded-lg bg-[#F4D35E] py-3 font-bold text-[#0D3B66] hover:bg-[#F4D35E]/80">
              Buscar
              <Search strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
