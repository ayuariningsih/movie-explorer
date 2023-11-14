"use client"

import { SearchBarProps } from "@/types"
import { CustomButton } from ".."
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { updateSearchParams } from "@/utils"

const SearchBar = ({ placeholder, handleSearch }: SearchBarProps) => {
  const router = useRouter()
  const params = useSearchParams()

  const [input, setInput] = useState('')

  async function onSearch() {
    if (input === '') return 

    const searchParams = {
      name: input.toLowerCase(),
      limit: 5,
      after: ''
    }

    await handleSearch(searchParams)
    const newPathname = updateSearchParams(searchParams)
    
    router.push(newPathname)
  }

  function clear () {
    setInput('')
  }

  useEffect(() => {
    const queryParams = params.get('name') || ''
    const limit = params.get('limit') || 5
    const afterData = params.get('after') || ''

    const searchParams = {
      name: queryParams.toLowerCase(),
      limit: Number(limit),
      after: afterData
    }

    if (queryParams) {
      handleSearch(searchParams)
      setInput(queryParams)
    }
  }, [])
  

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-3 max-w-xl mx-auto">
        <div className="relative w-full">
          <input
            className="block w-full px-4 py-2.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-gray-400"
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          />

          { input && (
            <XCircleIcon
              className="h-8 w-8 text-gray-300 hover:text-gray-400 absolute inset-y-1 right-0 flex items-center cursor-pointer pr-3"
              onClick={() => clear()}
            />
          )}
        </div>

        <CustomButton
          title="Search"
          containerStyles="bg-green-600 text-white text-sm font-medium rounded-lg"
          rightIcon={<MagnifyingGlassIcon
            className="h-5 w-5 text-white align-middle cursor-pointer ml-2"
            aria-hidden="true"
          />}
          handleClick={() => onSearch()} />
      </div>
      
      { params.get('name') && (
        <div className="max-w-xl mx-auto text-xs text-gray-500 p-2">
          <p>Showing users for "{params.get('name')}" </p>
          <hr className="mt-2" />
        </div>
      )}
    </>

  )
}

export default SearchBar