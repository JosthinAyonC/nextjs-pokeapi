import { SimpleWidget, WidgetsGrid } from "@/components";


export const metadata = {
  title: 'Dashboard main',
  description: 'Administracion de la aplicacion.',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h2 className="mt-2 text-3xl">Dashboard</h2>
      <span className="text-xl">Información general.</span>
      <WidgetsGrid />

    </div>
  );
}