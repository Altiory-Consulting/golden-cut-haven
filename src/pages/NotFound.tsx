import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="text-center px-6">
        <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
          Errore 404
        </p>
        <h1 className="font-playfair text-6xl md:text-8xl text-gradient-gold mb-6">404</h1>
        <p className="font-cormorant text-xl text-foreground/70 mb-10 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata
        </p>
        <Button variant="luxury" size="xl" asChild>
          <Link to="/">Torna alla Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
