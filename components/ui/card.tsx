import { cn } from "@/lib/utils";

function Card({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:border-2 after:border-white/20 after:content-['']",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/grain.jpg')] opacity-5" />

      {children}
    </div>
  );
}

function CardHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col p-6 md:px-10 md:py-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-x-2 font-serif text-3xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("mt-2 text-sm text-white/60 xl:text-base", className)}
      {...props}
    >
      {children}
    </p>
  );
}

Card.Header = CardHeader;
Card.Description = CardDescription;
Card.Title = CardTitle;

export default Card;
