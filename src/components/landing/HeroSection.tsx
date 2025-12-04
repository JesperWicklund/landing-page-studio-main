import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { content } = useContent();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {content.hero.subtitle}
            </p>
            <Button size="lg">
              {content.hero.buttonText}
            </Button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Hero image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
