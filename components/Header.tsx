"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import EditorToolsPanel from "./editor/EditorToolsPanel"
import { Button } from "./ui/button"

function Header() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isEditor = pathname.includes("/edit")

  return (
    <header
      className={`w-full ${
        isEditor ? "h-[8vh] border-b px-3 lg:px-7" : "h-20 px-6 lg:px-12"
      }  flex  `}
    >
      <div
        className={`flex h-full ${isEditor ? "w-[20%]" : "w-1/2"} items-center`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src={
              theme === "dark"
                ? "/logos/markdx-white.svg"
                : "/logos/markdx-black.svg"
            }
            priority
            alt="logo"
            className="h-8 w-auto"
            width={"0"}
            height={"0"}
          />
          <h4 className="ml-2 font-heading text-xl font-bold">
            {isEditor ? "Editor" : "MarkDX"}
          </h4>
        </Link>
      </div>
      {isEditor && <EditorToolsPanel />}
      <div
        className={`flex h-full ${
          isEditor ? "w-[35%]" : "w-1/2"
        }  items-center justify-end`}
      >
        <Button variant="secondary">Login</Button>
      </div>
    </header>
  )
}

export default Header
