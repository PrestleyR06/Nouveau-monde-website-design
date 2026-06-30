'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, MapPin, Phone, Clock } from 'lucide-react'
import { restaurant } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Veuillez indiquer votre nom'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(6, 'Téléphone invalide'),
  date: z.string().min(1, 'Choisissez une date'),
  time: z.string().min(1, 'Choisissez une heure'),
  guests: z.coerce.number().min(1).max(30),
  occasion: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

export function ReservationCta() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 2 },
  })

  const onSubmit = async (data: FormValues) => {
    // Front-end only: prepared for future API integration.
    await new Promise((r) => setTimeout(r, 800))
    console.log('[v0] Reservation submitted:', data)
    setSubmitted(true)
    reset({ guests: 2 })
  }

  return (
    <section id="reservation" className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/atmosphere.png"
        alt=""
        fill
        aria-hidden
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Réservation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-6xl">
              Réservez votre <span className="italic text-gradient-gold">table</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Offrez-vous une parenthèse d&apos;exception. Notre équipe vous
              accueille pour un dîner, une célébration ou une soirée jeux
              mémorable.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" /> {restaurant.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" /> {restaurant.phone}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" /> Ouvert tous les jours · 11h – tard
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-xl sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-success" />
                <h3 className="font-serif text-2xl">Demande envoyée</h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Merci ! Notre équipe vous confirmera votre réservation très
                  rapidement.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom complet" error={errors.name?.message}>
                    <input className={inputClass} placeholder="Votre nom" {...register('name')} />
                  </Field>
                  <Field label="Téléphone" error={errors.phone?.message}>
                    <input className={inputClass} placeholder="+237 ..." {...register('phone')} />
                  </Field>
                </div>
                <Field label="Email" error={errors.email?.message}>
                  <input className={inputClass} type="email" placeholder="vous@email.com" {...register('email')} />
                </Field>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="Date" error={errors.date?.message}>
                    <input className={inputClass} type="date" {...register('date')} />
                  </Field>
                  <Field label="Heure" error={errors.time?.message}>
                    <input className={inputClass} type="time" {...register('time')} />
                  </Field>
                  <Field label="Couverts" error={errors.guests?.message}>
                    <input className={inputClass} type="number" min={1} max={30} {...register('guests')} />
                  </Field>
                </div>
                <Field label="Occasion (optionnel)">
                  <select className={cn(inputClass, 'appearance-none')} {...register('occasion')}>
                    <option value="">Dîner classique</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="affaires">Repas d&apos;affaires</option>
                    <option value="couple">Soirée en couple</option>
                    <option value="jeux">Soirée jeux</option>
                  </select>
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
                >
                  {isSubmitting ? 'Envoi...' : 'Confirmer ma réservation'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  )
}
