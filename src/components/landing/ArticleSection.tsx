import { useContent } from '@/contexts/ContentContext';

export function ArticleSection() {
  const { content } = useContent();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-medium">Our Story</span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
            {content.article.title}
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {content.article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              {content.article.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-foreground">{content.article.author}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
