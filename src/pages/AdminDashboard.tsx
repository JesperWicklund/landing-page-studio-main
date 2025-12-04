import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useContent, ContentData } from '@/contexts/ContentContext';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Eye } from 'lucide-react';

// FIREBASE COMMENT: Import Firestore for saving content
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

const AdminDashboard = () => {
  const { content, updateContent, isAdmin } = useContent();
  const [editedContent, setEditedContent] = useState<ContentData>(content);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  const handleSave = () => {
    updateContent(editedContent);
    // FIREBASE COMMENT: Save to Firestore
    // await setDoc(doc(db, 'content', 'landing'), editedContent);
    toast({ title: 'Changes saved!' });
  };

  const updateHero = (field: keyof ContentData['hero'], value: string) => {
    setEditedContent({
      ...editedContent,
      hero: { ...editedContent.hero, [field]: value },
    });
  };

  const updateArticle = (field: keyof ContentData['article'], value: string) => {
    setEditedContent({
      ...editedContent,
      article: { ...editedContent.article, [field]: value },
    });
  };

  const updateFeature = (index: number, field: 'title' | 'description', value: string) => {
    const newItems = [...editedContent.features.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setEditedContent({
      ...editedContent,
      features: { ...editedContent.features, items: newItems },
    });
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="font-semibold">Content Manager</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" target="_blank">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </Link>
            <Button onClick={handleSave} size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="article">Article</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          {/* Hero */}
          <TabsContent value="hero">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">Hero Section</h2>
              <div className="space-y-4 max-w-xl">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={editedContent.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={editedContent.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={editedContent.hero.buttonText}
                    onChange={(e) => updateHero('buttonText', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Article */}
          <TabsContent value="article">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">Article Section</h2>
              <div className="space-y-4 max-w-xl">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={editedContent.article.title}
                    onChange={(e) => updateArticle('title', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Content</Label>
                  <Textarea
                    value={editedContent.article.content}
                    onChange={(e) => updateArticle('content', e.target.value)}
                    rows={10}
                  />
                  <p className="text-sm text-muted-foreground">
                    Use double line breaks for new paragraphs.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Author</Label>
                  <Input
                    value={editedContent.article.author}
                    onChange={(e) => updateArticle('author', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Features */}
          <TabsContent value="features">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">Features Section</h2>
              <div className="space-y-4 max-w-xl mb-8">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input
                    value={editedContent.features.title}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        features: { ...editedContent.features, title: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {editedContent.features.items.map((item, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg space-y-3">
                    <p className="font-medium">Feature {index + 1}</p>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={item.title}
                        onChange={(e) => updateFeature(index, 'title', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={item.description}
                        onChange={(e) => updateFeature(index, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">Gallery Section</h2>
              <div className="space-y-4 max-w-xl">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input
                    value={editedContent.gallery.title}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        gallery: { ...editedContent.gallery, title: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="mt-6 p-8 bg-muted rounded-lg text-center text-muted-foreground">
                {/* FIREBASE COMMENT: Add image upload with Firebase Storage here */}
                Image uploads require database connection.
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
