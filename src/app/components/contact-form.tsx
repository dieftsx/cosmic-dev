
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rocket } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    try {
      // Aqui você implementaria a lógica real de envio
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Mensagem enviada com sucesso!", {
        description: "Sua mensagem foi lançada ao espaço. Responderei em breve.",
      })

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (_) {
      toast.error("Falha no lançamento da mensagem", {
        description: "Houve um problema. Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Nome
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
          Assunto
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Assunto da mensagem"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Descreva seu projeto ou proposta..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"} {!isSubmitting && <Rocket className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  )
}



