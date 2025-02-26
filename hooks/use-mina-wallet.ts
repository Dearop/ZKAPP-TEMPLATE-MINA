"use client"

import { useState, useEffect, useCallback } from "react"

export function useMinaWallet() {
  const [wallet, setWallet] = useState<any>(null)
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    const checkWallet = async () => {
      if (typeof window !== "undefined" && "mina" in window) {
        setWallet((window as any).mina)
      }
    }
    checkWallet()
  }, [])

  const connect = useCallback(async () => {
    if (wallet) {
      try {
        setIsConnecting(true)
        const accounts = await wallet.requestAccounts()
        setAddress(accounts[0])
        setConnected(true)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      } finally {
        setIsConnecting(false)
      }
    }
  }, [wallet])

  const disconnect = useCallback(() => {
    setAddress("")
    setConnected(false)
  }, [])

  return { wallet, connected, address, connect, disconnect, isConnecting }
}

