"use client" // Indica que este componente será executado no lado do cliente (client-side).

import { Button } from "@/components/ui/button"; // Importa o componente Button de uma biblioteca UI personalizada.
import { Newspaper, SquareUser } from "lucide-react"; // Importa ícones da biblioteca lucide-react.
import Link from "next/link"; // Importa o componente Link do Next.js para navegação entre páginas.
import { usePathname } from "next/navigation"; // Importa o hook usePathname para obter o caminho atual da URL.
import { cn } from "@/lib/utils"; // Importa uma função utilitária para combinar classes CSS.

export const NavItems = () => {
  const pathname = usePathname(); // Obtém o caminho atual da URL.

  // Define um array de itens de navegação, cada um com um rótulo, ícone e caminho.
  const navItems = [
    {
      label: "Curriculos", // Rótulo do item de navegação.
      icon: Newspaper, // Ícone associado ao item.
      path: "/dashboard/resumes", // Caminho para o qual o item leva.
    },
    {
      label: "Configurações de Conta", // Rótulo do item de navegação.
      icon: SquareUser, // Ícone associado ao item.
      path: "/dashboard/account", // Caminho para o qual o item leva.
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {/* Mapeia cada item de navegação para um Link e Button. */}
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path); // Verifica se o caminho atual começa com o caminho do item, indicando que o item está ativo.
        return (
          <Link key={item.path} href={item.path}>
            {/* Renderiza um Button com estilos condicionais baseados no estado ativo. */}
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start", // Classes CSS padrão.
                isActive && "bg-accent" // Adiciona uma classe CSS se o item estiver ativo.
              )}
            >
              <item.icon size={16} /> {/* Renderiza o ícone do item. */}
              {item.label} {/* Renderiza o rótulo do item. */}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};