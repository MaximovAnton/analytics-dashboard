import { Container } from "@/shared/ui/Container";
import { LiveCounter } from "@/widgets/live-counter/ui/LiveCounter";

export default function HomePage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <LiveCounter />
      </div>
    </Container>
  );
}