import { useContent } from '@/contexts/ContentContext';

const defaultImages = [
  "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop",
];

export function GallerySection() {
  const { content } = useContent();
  const images = content.gallery.images.length > 0 ? content.gallery.images : defaultImages;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {content.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(0, 6).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
