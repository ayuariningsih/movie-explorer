"use client"

import { SearchBarProps } from "@/types"
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { updateSearchParams } from "@/utils"

const SearchBar = ({ placeholder, handleSearch }: SearchBarProps) => {
  const router = useRouter()
  const params = useSearchParams()
  const queryParams = params.get('query') || ''

  const [input, setInput] = useState('')

  async function onSearch() {
    const searchParams = {
      query: input.toLowerCase(),
    }

    await handleSearch(searchParams)
    const newPathname = updateSearchParams(searchParams)
    
    router.push(newPathname)
  }

  function clear () {
    setInput('')
  }

  useEffect(() => {
    const searchParams = {
      query: queryParams.toLowerCase(),
    }

    setInput(queryParams)
    handleSearch(searchParams)
  }, [queryParams])
  
  return (
    <>
      <div className="flex flex-col max-w-md mx-auto mt-8">
        <div className="relative w-full">
          <input
            className="block w-full px-4 py-2.5 text-sm font-semibold text-light border border-inverse-50 rounded-full bg-inverse-50 focus:outline-gray-400"
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          />

          { input && (
            <XCircleIcon
              data-testid="clear-icon"
              className="h-8 w-8 text-light bg-inverse-50 absolute inset-y-1 right-0 flex items-center cursor-pointer pr-3 mr-6"
              onClick={() => clear()}
            />
            )}

          <MagnifyingGlassIcon
            data-testid="search-icon"
            className="h-5 w-5 text-bold text-gray-400 bg-transparent hover:text-gray-400 absolute inset-y-2 right-2 flex items-center cursor-pointer"
            onClick={() => onSearch()}
          />
        </div>
      </div>
    </>

  )
}

export default SearchBar