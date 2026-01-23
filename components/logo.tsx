"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className = "",
  size = 36,
  alt = "Logo",
}: {
  className?: string
  size?: number
  alt?: string
}) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      priority
      className={cn("select-none", className)}
    />
  )
}

