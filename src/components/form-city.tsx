import * as Select from '@radix-ui/react-select'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

export default function FormCity() {
  return (
    <div className="mx-auto flex w-full max-w-[466px] flex-col  gap-2 text-left sm:max-w-[624px] sm:flex-row sm:items-center sm:gap-6 ">
      <span className="text-sm text-white">Busque um amigo:</span>

      <form className="grid-cols-form-city mx-auto grid w-full max-w-[466px] gap-2">
        <Select.Root>
          <Select.Trigger className="flex items-center justify-center gap-1 rounded-2xl border border-white px-2 py-2.5 text-base font-bold text-white">
            <Select.SelectValue placeholder="PE" />
            <Select.Icon>
              <ChevronDown className="h-4 w-4" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              className="data-[state=open]:animate-flip-down  data-[state=open]:animate-duration-300 relative z-50 mt-1 max-h-[180px] overflow-hidden rounded bg-[#E44449] text-white data-[side=top]:mb-1"
            >
              <Select.ScrollUpButton className="flex h-6 items-center justify-center ">
                <ChevronUp size={18} />
              </Select.ScrollUpButton>
              <Select.Viewport className="flex  h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] flex-col gap-4 overflow-hidden p-4">
                {Array.from({ length: 26 }).map((_, i) => (
                  <Select.Item
                    className="cursor-pointer text-sm font-medium leading-6 outline-none"
                    value={`item ${i}`}
                    key={i}
                  >
                    PE
                  </Select.Item>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex h-6 items-center justify-center ">
                <ChevronDown size={18} />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <Select.Root>
          <Select.Trigger className="col-span-2 flex items-center justify-center gap-1 rounded-2xl bg-[#E44449] px-2 py-2.5 text-base font-bold text-white sm:col-span-1">
            <Select.SelectValue placeholder="Recife" />
            <Select.Icon>
              <ChevronDown className="h-4 w-4" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              className="data-[state=open]:animate-flip-down  data-[state=open]:animate-duration-300 relative z-50 mt-1 max-h-[180px] rounded bg-[#E44449] text-white data-[side=top]:mb-1"
            >
              <Select.ScrollUpButton className="flex h-6 items-center justify-center ">
                <ChevronUp size={18} />
              </Select.ScrollUpButton>
              <Select.Viewport className="flex h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] flex-col gap-4 overflow-hidden p-4">
                {Array.from({ length: 26 }).map((_, i) => (
                  <Select.Item
                    className="text-medium-grey cursor-pointer text-sm font-medium leading-6 outline-none"
                    value={`item ${i}`}
                    key={i}
                  >
                    Recife
                  </Select.Item>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex h-6 items-center justify-center ">
                <ChevronDown size={18} />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <button className="col-span-3 flex items-center justify-center gap-2 rounded-lg bg-[#F4D35E] py-3 font-bold text-[#0D3B66] hover:bg-[#F4D35E]/80 sm:col-span-1">
          <span className="sm:hidden">Buscar</span>
          <Search strokeWidth={3} />
        </button>
      </form>
    </div>
  )
}
