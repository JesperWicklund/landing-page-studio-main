import { useContent } from '@/contexts/ContentContext';
import { Sparkles, Palette, Users } from 'lucide-react';

const icons = [Sparkles, Palette, Users];

export function FeaturesSection() {
  const { content } = useContent();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {content.features.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
