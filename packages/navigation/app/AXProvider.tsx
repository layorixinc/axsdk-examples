"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AXSDK } from "@axsdk/core"
import { AXUI } from "@axsdk/react"
import "@axsdk/react/index.css"
import { create } from "zustand"

export const useEnvStore = create((set, get) => ({
  env: {},
  setEnv: (env: any) => set({ env }),
  getEnv: () => (get() as any).env,
  updateEnv: (newEnv: any) => set((state: any) => ({ env: { ...state.env, ...newEnv } }))
}))

export const useActionStore = create((set, get) => ({
  actions: {},
  setActions: (actions: any) => set({ actions }),
}))

export function AXProvider() {
  const router = useRouter()

  useEffect(() => {
    (useActionStore.getState() as any).setActions({ router })
  }, [router])

  useEffect(() => {
    AXSDK.init({
      apiKey: process.env.NEXT_PUBLIC_AXSDK_API_KEY,
      appId: process.env.NEXT_PUBLIC_AXSDK_APP_ID,
      axHandler: async (command: string, args: unknown) => {
        console.log(command, args);
        if(command == "AX_get_env") {
          return {
            status: "OK",
            data: (useEnvStore.getState() as any).getEnv()
          };
        }
        if(command == "AX_navigate") {
          setTimeout(() => {
            (useActionStore.getState() as any).actions.router.push(`${(args as any).link}`, undefined, {});
          }, 2000)
        }
        return { status: "OK" };
      },
    })
  }, []);

  useEffect(() => {
    console.log("location", global.window.location.href);
    (useEnvStore.getState() as any).updateEnv({ location: global.window.location.href })
  }, [global.window?.location.href])

  return (<AXUI></AXUI>)
}
