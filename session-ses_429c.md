# AGENTS.md: Build, lint, test, and code style guidelines for agents

**Session ID:** ses_429c139f9ffe30CblKtzWK8Gfd
**Created:** 1/19/2026, 8:33:16 PM
**Updated:** 1/19/2026, 8:36:18 PM

---

## User

Please analyze this codebase and create an AGENTS.md file containing:
1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 150 lines long.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.

If there's already an AGENTS.md, improve it if it's located in /Users/enkhbayarenkhorkhon/project/personal/interface-landing

---

## Assistant (Build · glm-4.7-free · 8.4s)

_Thinking:_

The user wants me to:
1. Analyze this codebase
2. Create an AGENTS.md file containing:
   - Build/lint/test commands (especially for running a single test)
   - Code style guidelines (imports, formatting, types, naming conventions, error handling, etc.)
3. Make it about 150 lines long
4. Check for existing Cursor rules (.cursor/rules/ or .cursorrules) or Copilot rules (.github/copilot-instructions.md)
5. If there's already an AGENTS.md, improve it

Let me start by exploring the codebase to understand:
1. Package.json for commands
2. Existing configuration files (tsconfig, eslint, prettier, etc.)
3. Code patterns and conventions
4. Any existing Cursor/Copilot rules
5. Check if AGENTS.md already exists

Let me start with parallel reads of key files.

```
Tool: glob

**Input:**
```json
{
  "pattern": "AGENTS.md"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": ".cursor/**/*"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": ".cursorrules"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": ".github/copilot-instructions.md"
}
```
**Output:**
```
No files found
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/package.json"
}
```
**Output:**
```
<file>
00001| {
00002|   "name": "my-v0-project",
00003|   "version": "0.1.0",
00004|   "private": true,
00005|   "scripts": {
00006|     "dev": "next dev",
00007|     "build": "next build",
00008|     "start": "next start",
00009|     "lint": "eslint ."
00010|   },
00011|   "dependencies": {
00012|     "@hookform/resolvers": "^3.10.0",
00013|     "@radix-ui/react-accordion": "1.2.2",
00014|     "@radix-ui/react-alert-dialog": "1.1.4",
00015|     "@radix-ui/react-aspect-ratio": "1.1.1",
00016|     "@radix-ui/react-avatar": "1.1.2",
00017|     "@radix-ui/react-checkbox": "1.1.3",
00018|     "@radix-ui/react-collapsible": "1.1.2",
00019|     "@radix-ui/react-context-menu": "2.2.4",
00020|     "@radix-ui/react-dialog": "1.1.4",
00021|     "@radix-ui/react-dropdown-menu": "2.1.4",
00022|     "@radix-ui/react-hover-card": "1.1.4",
00023|     "@radix-ui/react-label": "2.1.1",
00024|     "@radix-ui/react-menubar": "1.1.4",
00025|     "@radix-ui/react-navigation-menu": "1.2.3",
00026|     "@radix-ui/react-popover": "1.1.4",
00027|     "@radix-ui/react-progress": "1.1.1",
00028|     "@radix-ui/react-radio-group": "1.2.2",
00029|     "@radix-ui/react-scroll-area": "1.2.2",
00030|     "@radix-ui/react-select": "2.1.4",
00031|     "@radix-ui/react-separator": "1.1.1",
00032|     "@radix-ui/react-slider": "1.2.2",
00033|     "@radix-ui/react-slot": "1.1.1",
00034|     "@radix-ui/react-switch": "1.1.2",
00035|     "@radix-ui/react-tabs": "1.1.2",
00036|     "@radix-ui/react-toast": "1.2.4",
00037|     "@radix-ui/react-toggle": "1.1.1",
00038|     "@radix-ui/react-toggle-group": "1.1.1",
00039|     "@radix-ui/react-tooltip": "1.1.6",
00040|     "@vercel/analytics": "1.3.1",
00041|     "autoprefixer": "^10.4.20",
00042|     "class-variance-authority": "^0.7.1",
00043|     "clsx": "^2.1.1",
00044|     "cmdk": "1.0.4",
00045|     "date-fns": "4.1.0",
00046|     "embla-carousel-react": "8.5.1",
00047|     "framer-motion": "12.23.26",
00048|     "gsap": "3.14.1",
00049|     "input-otp": "1.4.1",
00050|     "lenis": "1.3.15",
00051|     "lucide-react": "^0.454.0",
00052|     "next": "16.1.3",
00053|     "next-intl": "^4.7.0",
00054|     "next-themes": "^0.4.6",
00055|     "react": "19.2.0",
00056|     "react-day-picker": "9.8.0",
00057|     "react-dom": "19.2.0",
00058|     "react-hook-form": "^7.60.0",
00059|     "react-resizable-panels": "^2.1.7",
00060|     "recharts": "2.15.4",
00061|     "sonner": "^1.7.4",
00062|     "tailwind-merge": "^3.3.1",
00063|     "tailwindcss-animate": "^1.0.7",
00064|     "vaul": "^1.1.2",
00065|     "zod": "3.25.76"
00066|   },
00067|   "devDependencies": {
00068|     "@tailwindcss/postcss": "^4.1.9",
00069|     "@types/node": "^22",
00070|     "@types/react": "^19",
00071|     "@types/react-dom": "^19",
00072|     "postcss": "^8.5",
00073|     "tailwindcss": "^4.1.9",
00074|     "tw-animate-css": "1.3.3",
00075|     "typescript": "^5"
00076|   }
00077| }
00078| 

(End of file - total 78 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/tsconfig.json"
}
```
**Output:**
```
<file>
00001| {
00002|   "compilerOptions": {
00003|     "target": "ES2017",
00004|     "lib": [
00005|       "dom",
00006|       "dom.iterable",
00007|       "esnext"
00008|     ],
00009|     "allowJs": true,
00010|     "skipLibCheck": true,
00011|     "strict": true,
00012|     "noEmit": true,
00013|     "esModuleInterop": true,
00014|     "module": "esnext",
00015|     "moduleResolution": "bundler",
00016|     "resolveJsonModule": true,
00017|     "isolatedModules": true,
00018|     "jsx": "react-jsx",
00019|     "incremental": true,
00020|     "plugins": [
00021|       {
00022|         "name": "next"
00023|       }
00024|     ],
00025|     "paths": {
00026|       "@/*": [
00027|         "./*"
00028|       ]
00029|     }
00030|   },
00031|   "include": [
00032|     "next-env.d.ts",
00033|     "**/*.ts",
00034|     "**/*.tsx",
00035|     ".next/types/**/*.ts",
00036|     ".next/dev/types/**/*.ts"
00037|   ],
00038|   "exclude": [
00039|     "node_modules"
00040|   ]
00041| }
00042| 

(End of file - total 42 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/.eslintrc.json"
}
```
**Error:**
```
Error: File not found: /Users/enkhbayarenkhorkhon/project/personal/interface-landing/.eslintrc.json
```
```

---

## Assistant (Build · glm-4.7-free · 4.3s)

_Thinking:_

Let me look for eslint config files with different formats, and also explore some key source files to understand the code style.

```
Tool: glob

**Input:**
```json
{
  "pattern": "eslint.config.*"
}
```
**Output:**
```
/Users/enkhbayarenkhorkhon/project/personal/interface-landing/eslint.config.mjs
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": ".eslintrc*"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": "*.config.*"
}
```
**Output:**
```
/Users/enkhbayarenkhorkhon/project/personal/interface-landing/next.config.ts
/Users/enkhbayarenkhorkhon/project/personal/interface-landing/postcss.config.mjs
/Users/enkhbayarenkhorkhon/project/personal/interface-landing/eslint.config.mjs
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/components/ui/button.tsx"
}
```
**Output:**
```
<file>
00001| import * as React from "react"
00002| import { Slot } from "@radix-ui/react-slot"
00003| import { cva, type VariantProps } from "class-variance-authority"
00004| 
00005| import { cn } from "@/lib/utils"
00006| 
00007| const buttonVariants = cva(
00008|   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
00009|   {
00010|     variants: {
00011|       variant: {
00012|         default: "bg-primary text-primary-foreground hover:bg-primary/90",
00013|         destructive:
00014|           "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
00015|         outline:
00016|           "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
00017|         secondary:
00018|           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
00019|         ghost:
00020|           "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
00021|         link: "text-primary underline-offset-4 hover:underline",
00022|       },
00023|       size: {
00024|         default: "h-9 px-4 py-2 has-[>svg]:px-3",
00025|         sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
00026|         lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
00027|         icon: "size-9",
00028|         "icon-sm": "size-8",
00029|         "icon-lg": "size-10",
00030|       },
00031|     },
00032|     defaultVariants: {
00033|       variant: "default",
00034|       size: "default",
00035|     },
00036|   }
00037| )
00038| 
00039| function Button({
00040|   className,
00041|   variant = "default",
00042|   size = "default",
00043|   asChild = false,
00044|   ...props
00045| }: React.ComponentProps<"button"> &
00046|   VariantProps<typeof buttonVariants> & {
00047|     asChild?: boolean
00048|   }) {
00049|   const Comp = asChild ? Slot : "button"
00050| 
00051|   return (
00052|     <Comp
00053|       data-slot="button"
00054|       data-variant={variant}
00055|       data-size={size}
00056|       className={cn(buttonVariants({ variant, size, className }))}
00057|       {...props}
00058|     />
00059|   )
00060| }
00061| 
00062| export { Button, buttonVariants }
00063| 

(End of file - total 63 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/lib/utils.ts"
}
```
**Output:**
```
<file>
00001| import { clsx, type ClassValue } from "clsx"
00002| import { twMerge } from "tailwind-merge"
00003| 
00004| export function cn(...inputs: ClassValue[]) {
00005|   return twMerge(clsx(inputs))
00006| }
00007| 

(End of file - total 7 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/app/free-landing/page.tsx"
}
```
**Output:**
```
<file>
00001| "use client"
00002| 
00003| import { useMemo, useState } from "react"
00004| import { z } from "zod"
00005| import { zodResolver } from "@hookform/resolvers/zod"
00006| import { useForm } from "react-hook-form"
00007| import { useTranslations } from "next-intl"
00008| 
00009| import { cn } from "@/lib/utils"
00010| import { Button } from "@/components/ui/button"
00011| import {
00012|   Field,
00013|   FieldContent,
00014|   FieldDescription,
00015|   FieldError,
00016|   FieldGroup,
00017|   FieldLabel,
00018|   FieldLegend,
00019|   FieldSet,
00020| } from "@/components/ui/field"
00021| import { Input } from "@/components/ui/input"
00022| import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
00023| import { Checkbox } from "@/components/ui/checkbox"
00024| import {
00025|   Select,
00026|   SelectContent,
00027|   SelectItem,
00028|   SelectTrigger,
00029|   SelectValue,
00030| } from "@/components/ui/select"
00031| import { Separator } from "@/components/ui/separator"
00032| import { Spinner } from "@/components/ui/spinner"
00033| import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
00034| 
00035| type FormValues = {
00036|   companyType: string
00037|   companyName: string
00038|   email: string
00039|   primaryColor: string
00040|   sections: string[]
00041| }
00042| 
00043| export default function FreeLandingPage() {
00044|   // `next-intl` key typing is based on message namespaces.
00045|   // We keep a loose typing here so adding new keys doesn't break TS.
00046|   const t = useTranslations("FreeLanding" as any) as unknown as (key: string) => string
00047|   const FAKE_SUCCESS = process.env.NEXT_PUBLIC_FREE_LANDING_FAKE_SUCCESS === "true"
00048| 
00049|   const schema = useMemo(
00050|     () =>
00051|       z.object({
00052|         companyType: z.string().min(1, t("validation.companyTypeRequired")),
00053|         companyName: z.string().min(2, t("validation.companyNameRequired")),
00054|         email: z.string().email(t("validation.emailInvalid")),
00055|         primaryColor: z
00056|           .string()
00057|           .regex(/^#([0-9a-fA-F]{6})$/, t("validation.primaryColorInvalid")),
00058|         sections: z.array(z.string()).min(1, t("validation.sectionsRequired")),
00059|       }),
00060|     [t]
00061|   )
00062| 
00063|   const [otpRequested, setOtpRequested] = useState(false)
00064|   const [otp, setOtp] = useState("")
00065|   const [busy, setBusy] = useState<null | "requestOtp" | "submit">(null)
00066|   const [status, setStatus] = useState<
00067|     null | { type: "ok" | "error"; message: string }
00068|   >(null)
00069|   const [ordered, setOrdered] = useState(false)
00070| 
00071|   const form = useForm<FormValues>({
00072|     resolver: zodResolver(schema),
00073|     defaultValues: {
00074|       companyType: "",
00075|       companyName: "",
00076|       email: "",
00077|       primaryColor: "#ff7a18",
00078|       sections: ["hero", "about-us", "contact-us"],
00079|     },
00080|     mode: "onBlur",
00081|   })
00082| 
00083|   const email = form.watch("email")
00084|   const primaryColor = form.watch("primaryColor")
00085|   const sections = form.watch("sections")
00086| 
00087|   const isEmailValid = useMemo(() => {
00088|     return z.string().email().safeParse(email).success
00089|   }, [email])
00090| 
00091|   const companyTypes = useMemo(
00092|     () => [
00093|       { value: "startup", label: t("companyTypes.startup") },
00094|       { value: "sme", label: t("companyTypes.sme") },
00095|       { value: "enterprise", label: t("companyTypes.enterprise") },
00096|       { value: "agency", label: t("companyTypes.agency") },
00097|       { value: "other", label: t("companyTypes.other") },
00098|     ],
00099|     [t]
00100|   )
00101| 
00102|   const sectionsCatalog = useMemo(
00103|     () => [
00104|       { id: "hero", label: t("sections.hero.label"), description: t("sections.hero.description") },
00105|       { id: "about-us", label: t("sections.about-us.label"), description: t("sections.about-us.description") },
00106|       { id: "work-sections", label: t("sections.work-sections.label"), description: t("sections.work-sections.description") },
00107|       { id: "testimonials", label: t("sections.testimonials.label"), description: t("sections.testimonials.description") },
00108|       { id: "pricing", label: t("sections.pricing.label"), description: t("sections.pricing.description") },
00109|       { id: "faq", label: t("sections.faq.label"), description: t("sections.faq.description") },
00110|       { id: "contact-us", label: t("sections.contact-us.label"), description: t("sections.contact-us.description") },
00111|     ],
00112|     [t]
00113|   )
00114| 
00115|   async function requestOtp() {
00116|     setStatus(null)
00117|     if (!isEmailValid) {
00118|       form.setError("email", { message: t("validation.emailForOtp") })
00119|       return
00120|     }
00121| 
00122|     if (FAKE_SUCCESS) {
00123|       setOtpRequested(true)
00124|       setOtp("123456")
00125|       setStatus({
00126|         type: "ok",
00127|         message: t("status.demoOtpVerified"),
00128|       })
00129|       return
00130|     }
00131| 
00132|     setBusy("requestOtp")
00133|     try {
00134|       const resp = await fetch("/api/free-landing/request-otp", {
00135|         method: "POST",
00136|         headers: { "Content-Type": "application/json" },
00137|         body: JSON.stringify({ email }),
00138|       })
00139| 
00140|       const data = (await resp.json().catch(() => null)) as
00141|         | { ok: true }
00142|         | { ok: false; error?: string }
00143|         | null
00144| 
00145|       if (!resp.ok || !data?.ok) {
00146|         setStatus({
00147|           type: "error",
00148|           message: t("status.otpSendFailed"),
00149|         })
00150|         return
00151|       }
00152| 
00153|       setOtpRequested(true)
00154|       setStatus({
00155|         type: "ok",
00156|         message: t("status.otpSent"),
00157|       })
00158|     } catch {
00159|       setStatus({ type: "error", message: t("status.networkError") })
00160|     } finally {
00161|       setBusy(null)
00162|     }
00163|   }
00164| 
00165|   async function onSubmit(values: FormValues) {
00166|     setStatus(null)
00167| 
00168|     if (FAKE_SUCCESS) {
00169|       setOrdered(true)
00170|       setStatus({
00171|         type: "ok",
00172|         message: t("status.demoOrderCreated"),
00173|       })
00174|       return
00175|     }
00176| 
00177|     if (!otpRequested) {
00178|       setStatus({ type: "error", message: t("status.verifyEmailFirst") })
00179|       return
00180|     }
00181|     if (!/^\d{6}$/.test(otp)) {
00182|       setStatus({ type: "error", message: t("status.otpRequired") })
00183|       return
00184|     }
00185| 
00186|     setBusy("submit")
00187|     try {
00188|       const verifyResp = await fetch("/api/free-landing/verify-otp", {
00189|         method: "POST",
00190|         headers: { "Content-Type": "application/json" },
00191|         body: JSON.stringify({ email: values.email, otp }),
00192|       })
00193| 
00194|       const verifyData = (await verifyResp.json().catch(() => null)) as
00195|         | { ok: true }
00196|         | { ok: false; error?: string }
00197|         | null
00198| 
00199|       if (!verifyResp.ok || !verifyData?.ok) {
00200|         setStatus({ type: "error", message: t("status.otpInvalidOrExpired") })
00201|         setOtp("")
00202|         setOtpRequested(false)
00203|         return
00204|       }
00205| 
00206|       const orderResp = await fetch("/api/free-landing/order", {
00207|         method: "POST",
00208|         headers: { "Content-Type": "application/json" },
00209|         body: JSON.stringify(values),
00210|       })
00211| 
00212|       const orderData = (await orderResp.json().catch(() => null)) as
00213|         | { ok: true }
00214|         | { ok: false; error?: string }
00215|         | null
00216| 
00217|       if (!orderResp.ok || !orderData?.ok) {
00218|         setStatus({
00219|           type: "error",
00220|           message: t("status.orderFailed"),
00221|         })
00222|         return
00223|       }
00224| 
00225|       setOrdered(true)
00226|       setStatus({
00227|         type: "ok",
00228|         message: t("status.orderCreated"),
00229|       })
00230|     } catch {
00231|       setStatus({ type: "error", message: t("status.networkError") })
00232|     } finally {
00233|       setBusy(null)
00234|     }
00235|   }
00236| 
00237|   return (
00238|     <main className="relative min-h-screen">
00239|       <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-16 md:pt-24">
00240|         <header className="mb-10">
00241|           <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00242|             {t("kicker")}
00243|           </p>
00244|           <h1 className="mt-3 font-(--font-bebas) text-5xl tracking-wide md:text-6xl">
00245|             {t("title")}
00246|           </h1>
00247|           <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
00248|             {t("subtitle")}
00249|           </p>
00250|           {FAKE_SUCCESS ? (
00251|             <div className="mt-5 inline-flex border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
00252|               {t("demoModeBadge")}
00253|             </div>
00254|           ) : null}
00255|         </header>
00256| 
00257|         <div
00258|           className={cn(
00259|             "border border-border/40 bg-accent/2 backdrop-blur-sm",
00260|             "p-6 md:p-10"
00261|           )}
00262|         >
00263|           <form
00264|             className="flex flex-col gap-10"
00265|             onSubmit={form.handleSubmit(onSubmit)}
00266|           >
00267|             <FieldGroup>
00268|               <FieldSet>
00269|                 <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00270|                   {t("company.legend")}
00271|                 </FieldLegend>
00272| 
00273|                 <Field>
00274|                   <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00275|                     {t("company.typeLabel")}
00276|                   </FieldLabel>
00277|                   <FieldContent>
00278|                     <Select
00279|                       value={form.watch("companyType")}
00280|                       onValueChange={(value) => form.setValue("companyType", value, { shouldValidate: true })}
00281|                       disabled={ordered}
00282|                     >
00283|                       <SelectTrigger className="rounded-none">
00284|                         <SelectValue placeholder={t("company.typePlaceholder")} />
00285|                       </SelectTrigger>
00286|                       <SelectContent>
00287|                         {companyTypes.map((opt) => (
00288|                           <SelectItem key={opt.value} value={opt.value}>
00289|                             {opt.label}
00290|                           </SelectItem>
00291|                         ))}
00292|                       </SelectContent>
00293|                     </Select>
00294|                     <FieldError errors={[form.formState.errors.companyType]} />
00295|                   </FieldContent>
00296|                 </Field>
00297| 
00298|                 <Field>
00299|                   <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00300|                     {t("company.nameLabel")}
00301|                   </FieldLabel>
00302|                   <FieldContent>
00303|                     <Input
00304|                       className="rounded-none font-mono"
00305|                       placeholder={t("company.namePlaceholder")}
00306|                       disabled={ordered}
00307|                       {...form.register("companyName")}
00308|                       aria-invalid={!!form.formState.errors.companyName}
00309|                     />
00310|                     <FieldError errors={[form.formState.errors.companyName]} />
00311|                   </FieldContent>
00312|                 </Field>
00313|               </FieldSet>
00314| 
00315|               <Separator className="opacity-40" />
00316| 
00317|               <FieldSet>
00318|                 <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00319|                   {t("email.legend")}
00320|                 </FieldLegend>
00321| 
00322|                 <Field>
00323|                   <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00324|                     {t("email.label")}
00325|                   </FieldLabel>
00326|                   <FieldContent>
00327|                     <div className="flex flex-col gap-3 md:flex-row md:items-center">
00328|                       <Input
00329|                         className="rounded-none font-mono"
00330|                         placeholder={t("email.placeholder")}
00331|                         disabled={ordered}
00332|                         {...form.register("email")}
00333|                         aria-invalid={!!form.formState.errors.email}
00334|                       />
00335|                       <Button
00336|                         type="button"
00337|                         variant="outline"
00338|                         className="rounded-none font-mono text-[10px] uppercase tracking-widest"
00339|                         onClick={requestOtp}
00340|                         disabled={!isEmailValid || busy !== null || ordered}
00341|                       >
00342|                         {busy === "requestOtp" ? (
00343|                           <>
00344|                             <Spinner className="size-4" /> {t("email.sending")}
00345|                           </>
00346|                         ) : (
00347|                           t("email.verifyButton")
00348|                         )}
00349|                       </Button>
00350|                     </div>
00351|                     <FieldDescription className="font-mono text-xs">
00352|                       {t("email.helper")}
00353|                     </FieldDescription>
00354|                     <FieldError errors={[form.formState.errors.email]} />
00355| 
00356|                     {otpRequested ? (
00357|                       <div className="mt-4 border border-border/40 p-5">
00358|                         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
00359|                           <div>
00360|                             <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00361|                               {t("otp.title")}
00362|                             </p>
00363|                             <p className="mt-1 font-mono text-xs text-muted-foreground">
00364|                               {t("otp.sentTo")}{" "}
00365|                               <span className="text-foreground/90">{email}</span>
00366|                             </p>
00367|                           </div>
00368|                           <Button
00369|                             type="button"
00370|                             variant="ghost"
00371|                             className="rounded-none font-mono text-[10px] uppercase tracking-widest"
00372|                             onClick={requestOtp}
00373|                             disabled={busy !== null || ordered}
00374|                           >
00375|                             {t("otp.resendButton")}
00376|                           </Button>
00377|                         </div>
00378| 
00379|                         <div className="mt-4 flex flex-col gap-4">
00380|                           <InputOTP
00381|                             maxLength={6}
00382|                             value={otp}
00383|                             onChange={setOtp}
00384|                             disabled={busy !== null || ordered}
00385|                             containerClassName="justify-start"
00386|                           >
00387|                             <InputOTPGroup>
00388|                               <InputOTPSlot index={0} />
00389|                               <InputOTPSlot index={1} />
00390|                               <InputOTPSlot index={2} />
00391|                               <InputOTPSlot index={3} />
00392|                               <InputOTPSlot index={4} />
00393|                               <InputOTPSlot index={5} />
00394|                             </InputOTPGroup>
00395|                           </InputOTP>
00396| 
00397|                           <FieldDescription className="font-mono text-xs">
00398|                             {t("otp.expires")}
00399|                           </FieldDescription>
00400|                         </div>
00401|                       </div>
00402|                     ) : null}
00403|                   </FieldContent>
00404|                 </Field>
00405|               </FieldSet>
00406| 
00407|               <Separator className="opacity-40" />
00408| 
00409|               <FieldSet>
00410|                 <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00411|                   {t("design.legend")}
00412|                 </FieldLegend>
00413|                 <FieldDescription className="font-mono text-xs">
00414|                   {t("design.helper")}
00415|                 </FieldDescription>
00416| 
00417|                 <Field>
00418|                   <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00419|                     {t("design.primaryColorLabel")}
00420|                   </FieldLabel>
00421|                   <FieldContent>
00422|                     <div className="flex flex-col gap-3 md:flex-row md:items-center">
00423|                       <div className="flex items-center gap-3">
00424|                         <input
00425|                           type="color"
00426|                           value={primaryColor}
00427|                           onChange={(e) =>
00428|                             form.setValue("primaryColor", e.target.value, { shouldValidate: true })
00429|                           }
00430|                           disabled={ordered}
00431|                           aria-label="Primary color"
00432|                           className={cn(
00433|                             "h-9 w-14 cursor-pointer border border-border/60 bg-transparent p-1",
00434|                             "disabled:cursor-not-allowed disabled:opacity-50"
00435|                           )}
00436|                         />
00437|                         <InputGroup className="rounded-none">
00438|                           <InputGroupAddon className="font-mono text-[10px] uppercase tracking-widest opacity-80">
00439|                             {t("design.hex")}
00440|                           </InputGroupAddon>
00441|                           <InputGroupInput
00442|                             className="rounded-none font-mono uppercase"
00443|                             value={primaryColor}
00444|                             readOnly
00445|                             aria-label={t("design.hexAria")}
00446|                           />
00447|                         </InputGroup>
00448|                       </div>
00449|                     </div>
00450|                     <FieldDescription className="font-mono text-xs">
00451|                       {t("design.primaryColorHelper")}
00452|                     </FieldDescription>
00453|                     <FieldError errors={[form.formState.errors.primaryColor]} />
00454|                   </FieldContent>
00455|                 </Field>
00456| 
00457|                 <Field>
00458|                   <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00459|                     {t("design.sectionsLabel")}
00460|                   </FieldLabel>
00461|                   <FieldContent>
00462|                     <FieldDescription className="font-mono text-xs">
00463|                       {t("design.sectionsHelper")}
00464|                     </FieldDescription>
00465|                     <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
00466|                       {sectionsCatalog.map((item) => {
00467|                         const checked = sections.includes(item.id)
00468|                         return (
00469|                           <label
00470|                             key={item.id}
00471|                             className={cn(
00472|                               "flex items-center gap-3 border border-border/40 p-3",
00473|                               "hover:border-foreground/40 transition-colors",
00474|                               checked ? "bg-accent/10 border-accent/40" : "bg-transparent"
00475|                             )}
00476|                           >
00477|                             <Checkbox
00478|                               checked={checked}
00479|                               disabled={ordered}
00480|                               onCheckedChange={(next) => {
00481|                                 const on = next === true
00482|                                 const current = form.getValues("sections")
00483|                                 const updated = on
00484|                                   ? Array.from(new Set([...current, item.id]))
00485|                                   : current.filter((x) => x !== item.id)
00486|                                 form.setValue("sections", updated, { shouldValidate: true })
00487|                               }}
00488|                             />
00489|                             <span className="flex flex-col gap-0.5">
00490|                               <span className="font-mono text-xs uppercase tracking-widest text-foreground/90">
00491|                                 {item.label}
00492|                               </span>
00493|                               <span className="font-mono text-xs text-muted-foreground">
00494|                                 {item.description}
00495|                               </span>
00496|                             </span>
00497|                           </label>
00498|                         )
00499|                       })}
00500|                     </div>
00501|                     <FieldError errors={[form.formState.errors.sections]} />
00502|                   </FieldContent>
00503|                 </Field>
00504|               </FieldSet>
00505|             </FieldGroup>
00506| 
00507|             {status ? (
00508|               <div
00509|                 className={cn(
00510|                   "border p-4 font-mono text-xs",
00511|                   status.type === "ok"
00512|                     ? "border-accent/40 bg-accent/10 text-foreground"
00513|                     : "border-destructive/40 bg-destructive/10 text-foreground"
00514|                 )}
00515|                 role="status"
00516|               >
00517|                 {status.message}
00518|               </div>
00519|             ) : null}
00520| 
00521|             <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
00522|               <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
00523|                 {ordered ? t("footer.submitted") : t("footer.ready")}
00524|               </p>
00525|               <Button
00526|                 type="submit"
00527|                 className="rounded-none font-mono text-[10px] uppercase tracking-widest"
00528|                 disabled={busy !== null || ordered}
00529|               >
00530|                 {busy === "submit" ? (
00531|                   <>
00532|                     <Spinner className="size-4" /> {t("footer.processing")}
00533|                   </>
00534|                 ) : (
00535|                   t("footer.submitButton")
00536|                 )}
00537|               </Button>
00538|             </div>
00539|           </form>
00540|         </div>
00541|       </div>
00542|     </main>
00543|   )
00544| }
00545| 
00546| 

(End of file - total 546 lines)
</file>
```
```

---

## Assistant (Build · glm-4.7-free · 6.7s)

_Thinking:_

Now let me look at some more files to understand the code style better, particularly looking at API routes, server components, and lib utilities.

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/eslint.config.mjs"
}
```
**Output:**
```
<file>
00001| import { dirname } from "path";
00002| import { fileURLToPath } from "url";
00003| import { FlatCompat } from "@eslint/eslintrc";
00004| 
00005| const __filename = fileURLToPath(import.meta.url);
00006| const __dirname = dirname(__filename);
00007| 
00008| const compat = new FlatCompat({
00009|   baseDirectory: __dirname,
00010| });
00011| 
00012| const eslintConfig = [
00013|   ...compat.extends("next/core-web-vitals", "next/typescript"),
00014| ];
00015| 
00016| export default eslintConfig;
00017| 

(End of file - total 17 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/lib/free-landing.ts"
}
```
**Output:**
```
<file>
00001| import crypto from "node:crypto"
00002| 
00003| type OtpRecord = {
00004|   otpHash: string
00005|   expiresAt: number
00006|   attempts: number
00007| }
00008| 
00009| type OtpStore = Map<string, OtpRecord>
00010| 
00011| declare global {
00012|   // eslint-disable-next-line no-var
00013|   var __freeLandingOtpStore: OtpStore | undefined
00014| }
00015| 
00016| function getOtpStore(): OtpStore {
00017|   if (!globalThis.__freeLandingOtpStore) {
00018|     globalThis.__freeLandingOtpStore = new Map()
00019|   }
00020|   return globalThis.__freeLandingOtpStore
00021| }
00022| 
00023| function getOtpSecret() {
00024|   return process.env.FREE_LANDING_OTP_SECRET ?? "dev-only-secret"
00025| }
00026| 
00027| export function isValidEmail(email: string) {
00028|   // Simple but solid baseline for UI + server validation.
00029|   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
00030| }
00031| 
00032| export function generateOtpCode() {
00033|   const n = crypto.randomInt(0, 1_000_000)
00034|   return String(n).padStart(6, "0")
00035| }
00036| 
00037| export function hashOtp(email: string, otp: string) {
00038|   return crypto
00039|     .createHash("sha256")
00040|     .update(`${email.toLowerCase()}|${otp}|${getOtpSecret()}`)
00041|     .digest("hex")
00042| }
00043| 
00044| export function setOtp(email: string, otp: string, ttlMs: number) {
00045|   const store = getOtpStore()
00046|   store.set(email.toLowerCase(), {
00047|     otpHash: hashOtp(email, otp),
00048|     expiresAt: Date.now() + ttlMs,
00049|     attempts: 0,
00050|   })
00051| }
00052| 
00053| export function verifyOtp(email: string, otp: string) {
00054|   const store = getOtpStore()
00055|   const key = email.toLowerCase()
00056|   const record = store.get(key)
00057|   if (!record) return { ok: false as const, reason: "missing" as const }
00058| 
00059|   if (Date.now() > record.expiresAt) {
00060|     store.delete(key)
00061|     return { ok: false as const, reason: "expired" as const }
00062|   }
00063| 
00064|   record.attempts += 1
00065|   if (record.attempts > 5) {
00066|     store.delete(key)
00067|     return { ok: false as const, reason: "too_many_attempts" as const }
00068|   }
00069| 
00070|   const expected = record.otpHash
00071|   const actual = hashOtp(email, otp)
00072|   const matches =
00073|     expected.length === actual.length &&
00074|     crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(actual))
00075| 
00076|   if (!matches) return { ok: false as const, reason: "invalid" as const }
00077| 
00078|   store.delete(key)
00079|   return { ok: true as const }
00080| }
00081| 
00082| const OTP_CHALLENGE_COOKIE = "free_landing_otp_challenge"
00083| const VERIFIED_COOKIE = "free_landing_verified"
00084| 
00085| export function getOtpChallengeCookieName() {
00086|   return OTP_CHALLENGE_COOKIE
00087| }
00088| 
00089| export function getVerifiedCookieName() {
00090|   return VERIFIED_COOKIE
00091| }
00092| 
00093| export function signOtpChallenge(
00094|   email: string,
00095|   otpHash: string,
00096|   expiresAtMs: number
00097| ) {
00098|   const payload = JSON.stringify({
00099|     email: email.toLowerCase(),
00100|     otpHash,
00101|     exp: expiresAtMs,
00102|   })
00103|   const payloadB64 = Buffer.from(payload).toString("base64url")
00104|   const sig = crypto
00105|     .createHmac("sha256", getOtpSecret())
00106|     .update(payloadB64)
00107|     .digest("base64url")
00108|   return `${payloadB64}.${sig}`
00109| }
00110| 
00111| export function verifyOtpChallengeCookie(value: string | undefined) {
00112|   if (!value) return null
00113|   const [payloadB64, sig] = value.split(".")
00114|   if (!payloadB64 || !sig) return null
00115| 
00116|   const expectedSig = crypto
00117|     .createHmac("sha256", getOtpSecret())
00118|     .update(payloadB64)
00119|     .digest("base64url")
00120| 
00121|   const sigOk =
00122|     expectedSig.length === sig.length &&
00123|     crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(sig))
00124| 
00125|   if (!sigOk) return null
00126| 
00127|   try {
00128|     const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as {
00129|       email: string
00130|       otpHash: string
00131|       exp: number
00132|     }
00133|     if (!payload?.email || !payload?.otpHash || !payload?.exp) return null
00134|     if (Date.now() > payload.exp) return null
00135|     return { email: payload.email, otpHash: payload.otpHash, exp: payload.exp }
00136|   } catch {
00137|     return null
00138|   }
00139| }
00140| 
00141| export function signVerifiedEmail(email: string, expiresAtMs: number) {
00142|   const payload = JSON.stringify({
00143|     email: email.toLowerCase(),
00144|     exp: expiresAtMs,
00145|   })
00146|   const payloadB64 = Buffer.from(payload).toString("base64url")
00147|   const sig = crypto
00148|     .createHmac("sha256", getOtpSecret())
00149|     .update(payloadB64)
00150|     .digest("base64url")
00151|   return `${payloadB64}.${sig}`
00152| }
00153| 
00154| export function verifyVerifiedEmailCookie(value: string | undefined) {
00155|   if (!value) return null
00156|   const [payloadB64, sig] = value.split(".")
00157|   if (!payloadB64 || !sig) return null
00158| 
00159|   const expectedSig = crypto
00160|     .createHmac("sha256", getOtpSecret())
00161|     .update(payloadB64)
00162|     .digest("base64url")
00163| 
00164|   const sigOk =
00165|     expectedSig.length === sig.length &&
00166|     crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(sig))
00167| 
00168|   if (!sigOk) return null
00169| 
00170|   try {
00171|     const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as {
00172|       email: string
00173|       exp: number
00174|     }
00175|     if (!payload?.email || !payload?.exp) return null
00176|     if (Date.now() > payload.exp) return null
00177|     return payload.email
00178|   } catch {
00179|     return null
00180|   }
00181| }
00182| 
00183| 

(End of file - total 183 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/app/api/free-landing/verify-otp/route.ts"
}
```
**Output:**
```
<file>
00001| import { NextResponse } from "next/server"
00002| import { cookies } from "next/headers"
00003| 
00004| import {
00005|   getOtpChallengeCookieName,
00006|   getVerifiedCookieName,
00007|   hashOtp,
00008|   isValidEmail,
00009|   signOtpChallenge,
00010|   signVerifiedEmail,
00011|   verifyOtpChallengeCookie,
00012| } from "@/lib/free-landing"
00013| 
00014| export async function POST(req: Request) {
00015|   try {
00016|     const body = (await req.json()) as { email?: unknown; otp?: unknown }
00017|     const email = typeof body.email === "string" ? body.email.trim() : ""
00018|     const otp = typeof body.otp === "string" ? body.otp.trim() : ""
00019| 
00020|     if (!email || !isValidEmail(email)) {
00021|       return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
00022|     }
00023|     if (!/^\d{6}$/.test(otp)) {
00024|       return NextResponse.json({ ok: false, error: "invalid_otp" }, { status: 400 })
00025|     }
00026| 
00027|     const store = await cookies()
00028|     const challengeValue = store.get(getOtpChallengeCookieName())?.value
00029|     const challenge = verifyOtpChallengeCookie(challengeValue)
00030|     if (!challenge || challenge.email !== email.toLowerCase()) {
00031|       return NextResponse.json({ ok: false, error: "missing" }, { status: 400 })
00032|     }
00033| 
00034|     const actualHash = hashOtp(email, otp)
00035|     if (actualHash !== challenge.otpHash) {
00036|       return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
00037|     }
00038| 
00039|     // Verified session: 2 hours.
00040|     const exp = Date.now() + 2 * 60 * 60 * 1000
00041|     const cookieValue = signVerifiedEmail(email, exp)
00042| 
00043|     const res = NextResponse.json({ ok: true })
00044|     // Clear OTP challenge cookie after successful verification.
00045|     res.cookies.set({
00046|       name: getOtpChallengeCookieName(),
00047|       value: signOtpChallenge(email, "cleared", Date.now() - 1),
00048|       httpOnly: true,
00049|       sameSite: "lax",
00050|       secure: process.env.NODE_ENV === "production",
00051|       path: "/",
00052|       expires: new Date(0),
00053|     })
00054|     res.cookies.set({
00055|       name: getVerifiedCookieName(),
00056|       value: cookieValue,
00057|       httpOnly: true,
00058|       sameSite: "lax",
00059|       secure: process.env.NODE_ENV === "production",
00060|       path: "/",
00061|       expires: new Date(exp),
00062|     })
00063| 
00064|     return res
00065|   } catch (e) {
00066|     console.error("[free-landing] verify-otp error", e)
00067|     return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
00068|   }
00069| }
00070| 
00071| 

(End of file - total 71 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/app/page.tsx"
}
```
**Output:**
```
<file>
00001| import { HeroSection } from "@/components/hero-section"
00002| import { SignalsSection } from "@/components/signals-section"
00003| import { WorkSection } from "@/components/work-section"
00004| import { PrinciplesSection } from "@/components/principles-section"
00005| import { ColophonSection } from "@/components/colophon-section"
00006| import { SideNav } from "@/components/side-nav"
00007| import { MobileNav } from "@/components/mobile-nav"
00008| import { PromoBanner } from "@/components/promo-banner"
00009| 
00010| export default function Page() {
00011|   return (
00012|     <main className="relative min-h-screen">
00013|       <PromoBanner />
00014|       <MobileNav />
00015|       <div className="md:hidden h-[calc(2rem+3.5rem+env(safe-area-inset-top))]" aria-hidden="true" />
00016|       <div className="hidden md:block h-8" aria-hidden="true" />
00017|       <SideNav />
00018|       <div className="relative z-10">
00019|         <HeroSection />
00020|         <SignalsSection />
00021|         <WorkSection />
00022|         <PrinciplesSection />
00023|         <ColophonSection />
00024|       </div>
00025|     </main>
00026|   )
00027| }
00028| 

(End of file - total 28 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/components/side-nav.tsx"
}
```
**Output:**
```
<file>
00001| "use client"
00002| 
00003| import { useState, useEffect } from "react"
00004| import { cn } from "@/lib/utils"
00005| import { useTranslations } from "next-intl"
00006| import { LocaleSwitcher } from "@/components/locale-switcher"
00007| import { Logo } from "@/components/logo"
00008| 
00009| const navItems = [
00010|   { id: "hero", key: "index" },
00011|   { id: "signals", key: "signals" },
00012|   { id: "work", key: "experiments" },
00013|   { id: "principles", key: "principles" },
00014|   { id: "colophon", key: "colophon" },
00015| ]
00016| 
00017| export function SideNav() {
00018|   const t = useTranslations("HomePage.nav")
00019|   const [activeSection, setActiveSection] = useState("hero")
00020| 
00021|   useEffect(() => {
00022|     const observer = new IntersectionObserver(
00023|       (entries) => {
00024|         entries.forEach((entry) => {
00025|           if (entry.isIntersecting) {
00026|             setActiveSection(entry.target.id)
00027|           }
00028|         })
00029|       },
00030|       { threshold: 0.3 },
00031|     )
00032| 
00033|     navItems.forEach(({ id }) => {
00034|       const element = document.getElementById(id)
00035|       if (element) observer.observe(element)
00036|     })
00037| 
00038|     return () => observer.disconnect()
00039|   }, [])
00040| 
00041|   const scrollToSection = (id: string) => {
00042|     const element = document.getElementById(id)
00043|     if (element) {
00044|       element.scrollIntoView({ behavior: "smooth" })
00045|     }
00046|   }
00047| 
00048|   return (
00049|     <nav className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col justify-between py-10 border-r border-border/30 bg-background/80 backdrop-blur-sm">
00050|       <div className="px-4 flex justify-center">
00051|         <button
00052|           type="button"
00053|           onClick={() => scrollToSection("hero")}
00054|           className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 cursor-pointer"
00055|           aria-label="Go to top"
00056|         >
00057|           <Logo className="opacity-90 hover:opacity-100 transition-opacity duration-200 rounded-xl overflow-hidden cursor-pointer" size={32} />
00058|         </button>
00059|       </div>
00060| 
00061|       <div className="flex flex-col gap-6 px-4 items-center flex-1 justify-center">
00062|         {navItems.map(({ id, key }) => (
00063|           <button key={id} onClick={() => scrollToSection(id)} className="group relative flex items-center gap-3">
00064|             <span
00065|               className={cn(
00066|                 "h-1.5 w-1.5 p-1 cursor-pointer rounded-full transition-all duration-300",
00067|                 activeSection === id ? "bg-accent scale-125" : "bg-muted-foreground/40 group-hover:bg-foreground/60",
00068|               )}
00069|             />
00070|             <span
00071|               className={cn(
00072|                 "absolute left-6 font-mono text-[10px] uppercase cursor-pointer tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
00073|                 activeSection === id ? "text-accent" : "text-muted-foreground",
00074|               )}
00075|             >
00076|               {key}
00077|             </span>
00078|           </button>
00079|         ))}
00080|       </div>
00081| 
00082|       <div className="px-4">
00083|         <div className="flex justify-center">
00084|           <LocaleSwitcher />
00085|         </div>
00086|       </div>
00087|     </nav>
00088|   )
00089| }
00090| 

(End of file - total 90 lines)
</file>
```
```

---

## Assistant (Build · glm-4.7-free · 6.5s)

_Thinking:_

Let me look at a few more files to get a complete picture of the codebase patterns - including some component examples and maybe any configuration files.

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/messages/en.json",
  "limit": 50
}
```
**Output:**
```
<file>
00001| {
00002|   "Metadata": {
00003|     "title": "INTERFACE — Fast MVP & Product Engineering for Startups",
00004|     "description": "A software consulting company that helps early-stage teams ship web and mobile apps fast—built clean, scalable, and production-ready."
00005|   },
00006|   "HomePage": {
00007|     "title": "Build faster. Launch sooner.",
00008|     "nav": {
00009|       "index": "Home",
00010|       "signals": "Services",
00011|       "experiments": "Work",
00012|       "principles": "How We Work",
00013|       "colophon": "Contact"
00014|     },
00015|     "hero": {
00016|       "sideLabel": "INTERFACE",
00017|       "splitFlap": "INTERFACE",
00018|       "subtitle": "Startup Software Development, Delivered Fast",
00019|       "description": "We build web and mobile app development for early-stage teams—rapid MVPs, quick iterations, and scalable, production-ready engineering.",
00020|       "cta": {
00021|         "viewExperiments": "See Our Work",
00022|         "latestSignals": "Explore Services"
00023|       },
00024|       "buildTag": "Fast MVP Delivery / Production-Ready Build"
00025|     },
00026|     "signals": {
00027|       "kicker": "01 / Services",
00028|       "title": "WHAT WE BUILD",
00029|       "card": {
00030|         "issue": "Service {number}"
00031|       },
00032|       "items": [
00033|         {
00034|           "title": "Website Development",
00035|           "note": "High-converting startup sites that load fast, rank well, and turn visitors into users."
00036|         },
00037|         {
00038|           "title": "Mobile App Development (iOS & Android)",
00039|           "note": "Launch-ready mobile apps built for speed, stability, and future iterations."
00040|         },
00041|         {
00042|           "title": "Data Analytics & Dashboards",
00043|           "note": "Clear KPI dashboards and reporting so you can make decisions with real numbers."
00044|         },
00045|         {
00046|           "title": "AI Tools & Automation",
00047|           "note": "Practical AI development services to automate workflows and unlock product features."
00048|         },
00049|         {
00050|           "title": "Bug Fixing, QA & Performance Optimization",

(File has more lines. Use 'offset' parameter to read beyond line 50)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/components/hero-section.tsx",
  "limit": 80
}
```
**Output:**
```
<file>
00001| "use client"
00002| 
00003| import { useEffect, useRef } from "react"
00004| import { ScrambleTextOnHover } from "@/components/scramble-text"
00005| import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
00006| import { AnimatedNoise } from "@/components/animated-noise"
00007| import { BitmapChevron } from "@/components/bitmap-chevron"
00008| import gsap from "gsap"
00009| import { ScrollTrigger } from "gsap/ScrollTrigger"
00010| import { useTranslations } from "next-intl"
00011| 
00012| gsap.registerPlugin(ScrollTrigger)
00013| 
00014| export function HeroSection() {
00015|   const t = useTranslations("HomePage.hero")
00016|   const sectionRef = useRef<HTMLElement>(null)
00017|   const contentRef = useRef<HTMLDivElement>(null)
00018| 
00019|   useEffect(() => {
00020|     if (!sectionRef.current || !contentRef.current) return
00021| 
00022|     const ctx = gsap.context(() => {
00023|       gsap.to(contentRef.current, {
00024|         y: -100,
00025|         opacity: 0,
00026|         scrollTrigger: {
00027|           trigger: sectionRef.current,
00028|           start: "top top",
00029|           end: "bottom top",
00030|           scrub: 1,
00031|         },
00032|       })
00033|     }, sectionRef)
00034| 
00035|     return () => ctx.revert()
00036|   }, [])
00037| 
00038|   return (
00039|     <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
00040|       <AnimatedNoise opacity={0.03} />
00041| 
00042|       {/* Left vertical labels */}
00043|       {/* <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
00044|         <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
00045|           {t("sideLabel")}
00046|         </span>
00047|       </div> */}
00048| 
00049|       {/* Main content */}
00050|       <div ref={contentRef} className="flex-1 w-full">
00051|         <SplitFlapAudioProvider>
00052|           <div className="relative">
00053|             <SplitFlapText
00054|               text={t("splitFlap")}
00055|               speed={100}
00056|               className="pointer-events-none [--splitflap-font-size:clamp(3rem,12vw,8rem)] md:[--splitflap-font-size:clamp(4rem,15vw,14rem)]"
00057|             />
00058|             {/* <div className="mt-4">
00059|               <SplitFlapMuteToggle />
00060|             </div> */}
00061|           </div>
00062|         </SplitFlapAudioProvider>
00063| 
00064|         <h2 className="font-(--font-bebas) text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
00065|           {t("subtitle")}
00066|         </h2>
00067| 
00068|         <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
00069|           {t("description")}
00070|         </p>
00071| 
00072|         <div className="mt-16 flex items-center gap-8">
00073|           <a
00074|             href="#work"
00075|             className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
00076|           >
00077|             <ScrambleTextOnHover text={t("cta.viewExperiments")} as="span" duration={0.6} />
00078|             <BitmapChevron className="transition-transform duration-400 ease-in-out group-hover:rotate-45" />
00079|           </a>
00080|           <a

(File has more lines. Use 'offset' parameter to read beyond line 80)
</file>
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": "prettier.config.*"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": "*.test.ts*"
}
```
**Output:**
```
No files found
```
```

```
Tool: glob

**Input:**
```json
{
  "pattern": "*.spec.ts*"
}
```
**Output:**
```
No files found
```
```

---

## Assistant (Build · glm-4.7-free · 4.7s)

_Thinking:_

Let me look at one more file - a simpler component or the layout to get more insights into styling conventions.

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/app/layout.tsx"
}
```
**Output:**
```
<file>
00001| import type React from "react"
00002| import type { Metadata } from "next"
00003| import { Analytics } from "@vercel/analytics/next"
00004| import { SmoothScroll } from "@/components/smooth-scroll"
00005| import { NextIntlClientProvider } from "next-intl"
00006| import { getLocale, getMessages, getTranslations } from "next-intl/server"
00007| 
00008| import "./globals.css"
00009| 
00010| export async function generateMetadata(): Promise<Metadata> {
00011|   const t = await getTranslations("Metadata")
00012| 
00013|   return {
00014|     title: t("title"),
00015|     description: t("description"),
00016|     generator: "v0.app",
00017|     icons: {
00018|       icon: [
00019|         {
00020|           url: "/icon-light-32x32.png",
00021|           media: "(prefers-color-scheme: light)",
00022|         },
00023|         {
00024|           url: "/icon-dark-32x32.png",
00025|           media: "(prefers-color-scheme: dark)",
00026|         },
00027|         {
00028|           url: "/icon.svg",
00029|           type: "image/svg+xml",
00030|         },
00031|       ],
00032|       apple: "/apple-icon.png",
00033|     },
00034|   }
00035| }
00036| 
00037| export default async function RootLayout({
00038|   children,
00039| }: Readonly<{
00040|   children: React.ReactNode
00041| }>) {
00042|   const locale = await getLocale()
00043|   const messages = await getMessages()
00044| 
00045|   return (
00046|     <html lang={locale} className="bg-background">
00047|       <head>
00048|         <link rel="preconnect" href="https://fonts.googleapis.com" />
00049|         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
00050|         <link
00051|           rel="stylesheet"
00052|           href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Bebas+Neue&display=swap"
00053|         />
00054|       </head>
00055|       <body
00056|         className="font-sans antialiased overflow-x-hidden"
00057|       >
00058|         <NextIntlClientProvider locale={locale} messages={messages}>
00059|           <div className="noise-overlay" aria-hidden="true" />
00060|           <SmoothScroll>{children}</SmoothScroll>
00061|           <Analytics />
00062|         </NextIntlClientProvider>
00063|       </body>
00064|     </html>
00065|   )
00066| }
00067| 

(End of file - total 67 lines)
</file>
```
```

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/i18n/request.ts"
}
```
**Output:**
```
<file>
00001| import {getRequestConfig} from 'next-intl/server';
00002| import { cookies } from 'next/headers';
00003|  
00004| export default getRequestConfig(async () => {
00005|   // Static for now, we'll change this later
00006|   const store = await cookies();
00007|   const locale = store.get('locale')?.value || 'en';
00008| 
00009|  
00010|   return {
00011|     locale: locale as 'en' | 'mn',
00012|     messages: (await import(`../messages/${locale}.json`)).default
00013|   };
00014| });
00015| 

(End of file - total 15 lines)
</file>
```
```

---

## Assistant (Build · glm-4.7-free · 95.0s)

_Thinking:_

Now I have enough information to create a comprehensive AGENTS.md file. Let me summarize what I've learned:

## Commands
- `npm run dev` - Start dev server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- No test framework is set up (no test files found)

## Code Style Guidelines

### Imports
- React imports are explicit: `import * as React from "react"` (default in shadcn/ui components) or named imports
- Third-party imports are grouped separately
- Internal imports use `@/*` path alias
- Order: standard library → third-party → internal (separated by blank lines)

Example from `app/free-landing/page.tsx`:
```
"use client"

import { useMemo, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
...
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

### Formatting/Style
- No Prettier config found, but code is clean and consistent
- No semicolons used
- Double quotes for strings
- Spaces after colons in objects
- Arrow functions with explicit return or implicit for single expressions
- `className` for Tailwind classes
- `cn()` utility from `@/lib/utils` for merging classes

### Types
- TypeScript strict mode enabled
- Explicit types for function parameters
- Interface types for complex objects
- Type assertions used sparingly with `as unknown as` when needed (e.g., for next-intl typing workaround)
- React 19 with Server Components by default, Client Components marked with `"use client"`


- Naming conventions follow a specific pattern: components use PascalCase, functions use camelCase, constants use PascalCase for enums and UPPER_SNAKE_CASE for constants
- File names adopt a consistent hyphen-separated approach for components and kebab-case for files

### Error Handling
- Try-catch blocks provide robust error management
- API routes implement comprehensive error handling with consistent JSON responses
- Logging utilizes `console.error()` for capturing error details
- Graceful fallbacks are implemented to handle undefined or missing scenarios

### State Management
- React's built-in hooks like useState and useEffect are employed for component-level state
- Advanced state management leverages specialized libraries such as react-hook-form for form interactions

### Component Patterns
- Server-side components default to simple function declarations
- Client-side components require explicit "use client" directive
- Hooks are organized using `useRef` and `useMemo` for performance optimization

### Styling Approaches
- Tailwind CSS serves as the primary styling mechanism
- Utility class merging utilizes a custom `cn()` function combining clsx and tailwind-merge
- Component variant configurations are managed through class-variance-authority (cva)
- Shadcn/ui provides a consistent component design system

### Internationalization
- Next-intl facilitates multi-language support
- Translation key retrieval uses distinct hooks: `useTranslations()` for client-side and `getTranslations()` for server-side components
- Locale storage is handled via cookies
- Message content is structured in JSON files organized by specific namespaces

### API Architecture
- RESTful API endpoints reside in the app/api/ directory
- Server-side route handlers leverage async functions
- HTTP method-specific exports like `POST` are utilized for endpoint definitions

### Global State Management
- Server-side global state relies on global variable declarations within declare global blocks
- Type definitions for global state are meticulously documented
- Singleton pattern ensures global state consistency

### Security Considerations
- HMAC implementation uses crypto methods
- Constant-time comparison techniques prevent timing attacks
- Cookie security configurations include httpOnly and sameSite attributes
- Environment-specific settings dynamically adjust security parameters, especially in production environments

### Animation Strategies
- Scroll-based animations are powered by GSAP with ScrollTrigger
- Framer Motion manages component-level animations
- Lenis facilitates smooth scrolling implementation

### Testing Requirements
- Test files utilize .test.ts/.test.tsx or .spec.ts/.spec.tsx naming conventions
- No test framework is currently configured in the project

### Component Structure
- Minimalist approach to default exports
- Prop interfaces defined directly in component files
- Shadcn/ui primitives leverage utility components for flexible composition

### Environment Variables
- Environment-specific configuration through process.env
- Prefix conventions include NEXT_PUBLIC_ for client-accessible variables
- No .env.example file exists for reference

```
Tool: write

**Input:**
```json
{
  "content": "# AGENTS.md\n\nThis file provides guidance to agentic coding assistants working in this repository.\n\n## Commands\n\n```bash\n# Development\nnpm run dev              # Start dev server at http://localhost:3000\n\n# Build & Production\nnpm run build            # Build for production\nnpm run start            # Start production server\n\n# Linting\nnpm run lint             # Run ESLint (extends next/core-web-vitals, next/typescript)\n```\n\nNo test framework is configured. Add tests in `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files when implementing.\n\n## Code Style\n\n### Imports\n\nUse explicit `import * as React from \"react\"` for React. Group imports by type with blank lines:\n1. Standard library\n2. Third-party packages\n3. Internal imports (use `@/*` alias)\n\n```tsx\n\"use client\"\n\nimport { useMemo, useState } from \"react\"\nimport { z } from \"zod\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\n\nimport { cn } from \"@/lib/utils\"\nimport { Button } from \"@/components/ui/button\"\n```\n\n### Formatting\n\n- No semicolons\n- Double quotes for strings\n- Arrow functions with explicit return or implicit for single expressions\n- `className` prop for Tailwind classes\n- Use `cn()` utility from `@/lib/utils` for conditional class merging\n\n### Types\n\nStrict TypeScript enabled. Define explicit types for complex objects:\n\n```tsx\ntype FormValues = {\n  companyType: string\n  companyName: string\n  email: string\n}\n\nfunction MyComponent({ disabled }: { disabled: boolean }) {\n  return ...\n}\n```\n\nUse `as unknown as` sparingly for type assertions when necessary (e.g., next-intl typing workarounds).\n\n### Naming Conventions\n\n- Components: PascalCase (`Button`, `HeroSection`)\n- Functions: camelCase (`getOtpStore`, `verifyOtp`)\n- Constants: UPPER_SNAKE_CASE (`OTP_CHALLENGE_COOKIE`)\n- Files: kebab-case (`button.tsx`, `free-landing.ts`)\n\n### Error Handling\n\n```tsx\ntry {\n  const resp = await fetch(\"/api/endpoint\")\n  const data = await resp.json()\n} catch {\n  setStatus({ type: \"error\", message: t(\"error.network\") })\n} finally {\n  setBusy(null)\n}\n```\n\nAPI routes: return `{ ok: false, error: string }` with appropriate HTTP status codes.\n\n### State & Effects\n\n```tsx\nconst [busy, setBusy] = useState<null | \"requestOtp\" | \"submit\">(null)\nconst ref = useRef<HTMLElement>(null)\n\nuseEffect(() => {\n  const ctx = gsap.context(() => {\n    // GSAP animations\n  }, ref)\n  return () => ctx.revert()\n}, [])\n```\n\n### Components\n\n- Server components by default (no \"use client\")\n- Client components: top `\"use client\"` directive\n- Minimal default exports\n- Type props inline or as separate interfaces\n\n```tsx\n\"use client\"\n\nexport function Button({ className, variant, ...props }: ButtonProps) {\n  return <button className={cn(base, className)} {...props} />\n}\n```\n\n### Styling\n\n- Use Tailwind CSS utility classes\n- Dark mode: `dark:` prefix (dark mode always enabled)\n- `cn()` from `@/lib/utils` merges classes with `clsx` + `tailwind-merge`\n- Variants via `class-variance-authority` (cva)\n- Shadcn/ui primitives for consistent UI\n\n### Internationalization (next-intl)\n\nServer:\n```tsx\nconst t = await getTranslations(\"HomePage.hero\")\nreturn <h1>{t(\"title\")}</h1>\n```\n\nClient:\n```tsx\nconst t = useTranslations(\"FreeLanding\" as any) as unknown as (key: string) => string\n```\n\nMessages in `messages/en.json`, `messages/mn.json`, namespaced by section.\n\n### API Routes\n\n```tsx\nexport async function POST(req: Request) {\n  try {\n    const body = await req.json() as { email?: string; otp?: string }\n    const email = typeof body.email === \"string\" ? body.email.trim() : \"\"\n\n    if (!isValidEmail(email)) {\n      return NextResponse.json({ ok: false, error: \"invalid_email\" }, { status: 400 })\n    }\n\n    return NextResponse.json({ ok: true })\n  } catch (e) {\n    console.error(\"[api-name] error\", e)\n    return NextResponse.json({ ok: false, error: \"bad_request\" }, { status: 400 })\n  }\n}\n```\n\n### Global State\n\nServer-side global state with `declare global`:\n\n```ts\ndeclare global {\n  var __freeLandingOtpStore: Map<string, OtpRecord> | undefined\n}\n\nfunction getOtpStore() {\n  if (!globalThis.__freeLandingOtpStore) {\n    globalThis.__freeLandingOtpStore = new Map()\n  }\n  return globalThis.__freeLandingOtpStore\n}\n```\n\n### Security\n\n- Use `crypto.timingSafeEqual()` for comparisons\n- HMAC for cookie signing\n- Cookies: `httpOnly`, `sameSite: \"lax\"`, `secure` in production\n- Environment variables: `NEXT_PUBLIC_*` for client, others server-only\n\n### Animations\n\n```tsx\nimport gsap from \"gsap\"\nimport { ScrollTrigger } from \"gsap/ScrollTrigger\"\n\ngsap.registerPlugin(ScrollTrigger)\n\nuseEffect(() => {\n  gsap.to(ref.current, {\n    y: -100,\n    scrollTrigger: { trigger: ref, scrub: true },\n  })\n}, [])\n```\n\nFramer Motion for component animations, Lenis for smooth scrolling (via `<SmoothScroll>` wrapper).\n\n### Form Validation\n\nUse `react-hook-form` + `zod`:\n\n```tsx\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\n\nconst schema = z.object({\n  email: z.string().email(\"Invalid email\"),\n})\n\nconst form = useForm({ resolver: zodResolver(schema), defaultValues: { email: \"\" } })\n```\n\n### Path Aliases\n\n`@/*` maps to project root. Use for all internal imports:\n\n```tsx\nimport { Button } from \"@/components/ui/button\"\nimport { cn } from \"@/lib/utils\"\n```\n",
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/AGENTS.md"
}
```
**Output:**
```
Wrote file successfully.
```
```

---

## Assistant (Build · glm-4.7-free · 9.1s)

_Thinking:_

The file was created successfully. Let me verify it was written correctly by reading it back.

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/AGENTS.md"
}
```
**Output:**
```
<file>
00001| # AGENTS.md
00002| 
00003| This file provides guidance to agentic coding assistants working in this repository.
00004| 
00005| ## Commands
00006| 
00007| ```bash
00008| # Development
00009| npm run dev              # Start dev server at http://localhost:3000
00010| 
00011| # Build & Production
00012| npm run build            # Build for production
00013| npm run start            # Start production server
00014| 
00015| # Linting
00016| npm run lint             # Run ESLint (extends next/core-web-vitals, next/typescript)
00017| ```
00018| 
00019| No test framework is configured. Add tests in `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files when implementing.
00020| 
00021| ## Code Style
00022| 
00023| ### Imports
00024| 
00025| Use explicit `import * as React from "react"` for React. Group imports by type with blank lines:
00026| 1. Standard library
00027| 2. Third-party packages
00028| 3. Internal imports (use `@/*` alias)
00029| 
00030| ```tsx
00031| "use client"
00032| 
00033| import { useMemo, useState } from "react"
00034| import { z } from "zod"
00035| import { zodResolver } from "@hookform/resolvers/zod"
00036| 
00037| import { cn } from "@/lib/utils"
00038| import { Button } from "@/components/ui/button"
00039| ```
00040| 
00041| ### Formatting
00042| 
00043| - No semicolons
00044| - Double quotes for strings
00045| - Arrow functions with explicit return or implicit for single expressions
00046| - `className` prop for Tailwind classes
00047| - Use `cn()` utility from `@/lib/utils` for conditional class merging
00048| 
00049| ### Types
00050| 
00051| Strict TypeScript enabled. Define explicit types for complex objects:
00052| 
00053| ```tsx
00054| type FormValues = {
00055|   companyType: string
00056|   companyName: string
00057|   email: string
00058| }
00059| 
00060| function MyComponent({ disabled }: { disabled: boolean }) {
00061|   return ...
00062| }
00063| ```
00064| 
00065| Use `as unknown as` sparingly for type assertions when necessary (e.g., next-intl typing workarounds).
00066| 
00067| ### Naming Conventions
00068| 
00069| - Components: PascalCase (`Button`, `HeroSection`)
00070| - Functions: camelCase (`getOtpStore`, `verifyOtp`)
00071| - Constants: UPPER_SNAKE_CASE (`OTP_CHALLENGE_COOKIE`)
00072| - Files: kebab-case (`button.tsx`, `free-landing.ts`)
00073| 
00074| ### Error Handling
00075| 
00076| ```tsx
00077| try {
00078|   const resp = await fetch("/api/endpoint")
00079|   const data = await resp.json()
00080| } catch {
00081|   setStatus({ type: "error", message: t("error.network") })
00082| } finally {
00083|   setBusy(null)
00084| }
00085| ```
00086| 
00087| API routes: return `{ ok: false, error: string }` with appropriate HTTP status codes.
00088| 
00089| ### State & Effects
00090| 
00091| ```tsx
00092| const [busy, setBusy] = useState<null | "requestOtp" | "submit">(null)
00093| const ref = useRef<HTMLElement>(null)
00094| 
00095| useEffect(() => {
00096|   const ctx = gsap.context(() => {
00097|     // GSAP animations
00098|   }, ref)
00099|   return () => ctx.revert()
00100| }, [])
00101| ```
00102| 
00103| ### Components
00104| 
00105| - Server components by default (no "use client")
00106| - Client components: top `"use client"` directive
00107| - Minimal default exports
00108| - Type props inline or as separate interfaces
00109| 
00110| ```tsx
00111| "use client"
00112| 
00113| export function Button({ className, variant, ...props }: ButtonProps) {
00114|   return <button className={cn(base, className)} {...props} />
00115| }
00116| ```
00117| 
00118| ### Styling
00119| 
00120| - Use Tailwind CSS utility classes
00121| - Dark mode: `dark:` prefix (dark mode always enabled)
00122| - `cn()` from `@/lib/utils` merges classes with `clsx` + `tailwind-merge`
00123| - Variants via `class-variance-authority` (cva)
00124| - Shadcn/ui primitives for consistent UI
00125| 
00126| ### Internationalization (next-intl)
00127| 
00128| Server:
00129| ```tsx
00130| const t = await getTranslations("HomePage.hero")
00131| return <h1>{t("title")}</h1>
00132| ```
00133| 
00134| Client:
00135| ```tsx
00136| const t = useTranslations("FreeLanding" as any) as unknown as (key: string) => string
00137| ```
00138| 
00139| Messages in `messages/en.json`, `messages/mn.json`, namespaced by section.
00140| 
00141| ### API Routes
00142| 
00143| ```tsx
00144| export async function POST(req: Request) {
00145|   try {
00146|     const body = await req.json() as { email?: string; otp?: string }
00147|     const email = typeof body.email === "string" ? body.email.trim() : ""
00148| 
00149|     if (!isValidEmail(email)) {
00150|       return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
00151|     }
00152| 
00153|     return NextResponse.json({ ok: true })
00154|   } catch (e) {
00155|     console.error("[api-name] error", e)
00156|     return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
00157|   }
00158| }
00159| ```
00160| 
00161| ### Global State
00162| 
00163| Server-side global state with `declare global`:
00164| 
00165| ```ts
00166| declare global {
00167|   var __freeLandingOtpStore: Map<string, OtpRecord> | undefined
00168| }
00169| 
00170| function getOtpStore() {
00171|   if (!globalThis.__freeLandingOtpStore) {
00172|     globalThis.__freeLandingOtpStore = new Map()
00173|   }
00174|   return globalThis.__freeLandingOtpStore
00175| }
00176| ```
00177| 
00178| ### Security
00179| 
00180| - Use `crypto.timingSafeEqual()` for comparisons
00181| - HMAC for cookie signing
00182| - Cookies: `httpOnly`, `sameSite: "lax"`, `secure` in production
00183| - Environment variables: `NEXT_PUBLIC_*` for client, others server-only
00184| 
00185| ### Animations
00186| 
00187| ```tsx
00188| import gsap from "gsap"
00189| import { ScrollTrigger } from "gsap/ScrollTrigger"
00190| 
00191| gsap.registerPlugin(ScrollTrigger)
00192| 
00193| useEffect(() => {
00194|   gsap.to(ref.current, {
00195|     y: -100,
00196|     scrollTrigger: { trigger: ref, scrub: true },
00197|   })
00198| }, [])
00199| ```
00200| 
00201| Framer Motion for component animations, Lenis for smooth scrolling (via `<SmoothScroll>` wrapper).
00202| 
00203| ### Form Validation
00204| 
00205| Use `react-hook-form` + `zod`:
00206| 
00207| ```tsx
00208| import { useForm } from "react-hook-form"
00209| import { zodResolver } from "@hookform/resolvers/zod"
00210| import { z } from "zod"
00211| 
00212| const schema = z.object({
00213|   email: z.string().email("Invalid email"),
00214| })
00215| 
00216| const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: "" } })
00217| ```
00218| 
00219| ### Path Aliases
00220| 
00221| `@/*` maps to project root. Use for all internal imports:
00222| 
00223| ```tsx
00224| import { Button } from "@/components/ui/button"
00225| import { cn } from "@/lib/utils"
00226| ```
00227| 

(End of file - total 227 lines)
</file>
```
```

---

## Assistant (Build · glm-4.7-free · 37.7s)

_Thinking:_

The file is a bit longer than requested (about 227 lines instead of ~150 lines), but the user asked to include all the relevant code style guidelines. I should condense it a bit while keeping the important information. Let me rewrite it to be more concise.

```
Tool: write

**Input:**
```json
{
  "content": "# AGENTS.md\n\nThis file provides guidance to agentic coding assistants working in this repository.\n\n## Commands\n\n```bash\n# Development\nnpm run dev              # Start dev server at http://localhost:3000\n\n# Build & Production\nnpm run build            # Build for production\nnpm run start            # Start production server\n\n# Linting\nnpm run lint             # Run ESLint (extends next/core-web-vitals, next/typescript)\n```\n\nNo test framework is configured. Add tests in `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files when implementing.\n\n## Code Style\n\n### Imports\n\nUse explicit `import * as React from \"react\"` for React. Group imports with blank lines: standard library, third-party, then internal (`@/*` alias).\n\n```tsx\n\"use client\"\n\nimport { useMemo, useState } from \"react\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { cn } from \"@/lib/utils\"\nimport { Button } from \"@/components/ui/button\"\n```\n\n### Formatting\n\n- No semicolons\n- Double quotes for strings\n- Arrow functions with explicit/implicit return\n- `className` prop for Tailwind classes\n- Use `cn()` from `@/lib/utils` for conditional class merging\n\n### Types\n\nStrict TypeScript enabled. Define explicit types for complex objects.\n\n```tsx\ntype FormValues = { companyType: string; email: string }\nconst t = useTranslations(\"FreeLanding\" as any) as unknown as (key: string) => string\n```\n\nUse `as unknown as` sparingly for type assertions (e.g., next-intl workarounds).\n\n### Naming Conventions\n\n- Components: PascalCase (`Button`, `HeroSection`)\n- Functions: camelCase (`getOtpStore`, `verifyOtp`)\n- Constants: UPPER_SNAKE_CASE (`OTP_CHALLENGE_COOKIE`)\n- Files: kebab-case (`button.tsx`, `free-landing.ts`)\n\n### Error Handling\n\n```tsx\ntry {\n  const resp = await fetch(\"/api/endpoint\")\n  const data = await resp.json()\n} catch {\n  setStatus({ type: \"error\", message: t(\"error.network\") })\n} finally {\n  setBusy(null)\n}\n```\n\nAPI routes: return `{ ok: false, error: string }` with appropriate HTTP status codes.\n\n### State & Effects\n\n```tsx\nconst [busy, setBusy] = useState<null | \"requestOtp\" | \"submit\">(null)\nconst ref = useRef<HTMLElement>(null)\n\nuseEffect(() => {\n  const ctx = gsap.context(() => {}, ref)\n  return () => ctx.revert()\n}, [])\n```\n\n### Components\n\n- Server components by default (no \"use client\")\n- Client components: top `\"use client\"` directive\n- Minimal default exports, type props inline\n\n```tsx\n\"use client\"\nexport function Button({ className, variant, ...props }: ButtonProps) {\n  return <button className={cn(base, className)} {...props} />\n}\n```\n\n### Styling\n\n- Tailwind CSS utility classes with `dark:` prefix (dark mode always enabled)\n- `cn()` merges classes with `clsx` + `tailwind-merge`\n- Variants via `class-variance-authority` (cva)\n- Shadcn/ui primitives for consistent UI\n\n### Internationalization (next-intl)\n\nServer: `const t = await getTranslations(\"HomePage.hero\")`\nClient: `const t = useTranslations(\"FreeLanding\" as any) as unknown as (key: string) => string`\n\nMessages in `messages/en.json`, `messages/mn.json`, namespaced by section.\n\n### API Routes\n\n```tsx\nexport async function POST(req: Request) {\n  try {\n    const body = await req.json() as { email?: string }\n    const email = typeof body.email === \"string\" ? body.email.trim() : \"\"\n    if (!isValidEmail(email)) {\n      return NextResponse.json({ ok: false, error: \"invalid_email\" }, { status: 400 })\n    }\n    return NextResponse.json({ ok: true })\n  } catch (e) {\n    console.error(\"[api-name] error\", e)\n    return NextResponse.json({ ok: false, error: \"bad_request\" }, { status: 400 })\n  }\n}\n```\n\n### Global State\n\nServer-side with `declare global`:\n\n```ts\ndeclare global { var __freeLandingOtpStore: Map<string, OtpRecord> | undefined }\nfunction getOtpStore() {\n  if (!globalThis.__freeLandingOtpStore) {\n    globalThis.__freeLandingOtpStore = new Map()\n  }\n  return globalThis.__freeLandingOtpStore\n}\n```\n\n### Security\n\n- Use `crypto.timingSafeEqual()` for comparisons\n- HMAC for cookie signing\n- Cookies: `httpOnly`, `sameSite: \"lax\"`, `secure` in production\n- Environment variables: `NEXT_PUBLIC_*` for client, others server-only\n\n### Animations\n\n```tsx\nimport gsap from \"gsap\"\nimport { ScrollTrigger } from \"gsap/ScrollTrigger\"\ngsap.registerPlugin(ScrollTrigger)\n\nuseEffect(() => {\n  gsap.to(ref.current, { y: -100, scrollTrigger: { trigger: ref, scrub: true } })\n}, [])\n```\n\nFramer Motion for component animations, Lenis for smooth scrolling (`<SmoothScroll>` wrapper).\n\n### Form Validation\n\nUse `react-hook-form` + `zod`:\n\n```tsx\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nconst form = useForm({ resolver: zodResolver(schema), defaultValues: { email: \"\" } })\n```\n\n### Path Aliases\n\n`@/*` maps to project root. Use for all internal imports:\n\n```tsx\nimport { Button } from \"@/components/ui/button\"\nimport { cn } from \"@/lib/utils\"\n```\n",
  "filePath": "/Users/enkhbayarenkhorkhon/project/personal/interface-landing/AGENTS.md"
}
```
**Output:**
```
Wrote file successfully.
```
```

---

## Assistant (Build · glm-4.7-free · 8.9s)

_Thinking:_

The file has been created with concise but comprehensive coverage of the codebase conventions. It's around 170 lines, which is close to the requested 150 lines while still covering all the important topics.

Created AGENTS.md with build/lint/test commands and code style guidelines (imports, formatting, types, naming, error handling, components, styling, i18n, API routes, state, security, animations, forms, path aliases).

---

