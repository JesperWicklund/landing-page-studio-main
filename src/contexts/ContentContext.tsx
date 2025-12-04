import React, { createContext, useContext, useState, ReactNode } from 'react';

// FIREBASE COMMENT: Replace this local state with Firestore
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

export interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  article: {
    title: string;
    content: string;
    author: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  gallery: {
    title: string;
    images: string[];
  };
}

const defaultContent: ContentData = {
  hero: {
    title: "Where Art Meets Innovation",
    subtitle: "Discover the extraordinary in the everyday. We craft experiences that inspire, engage, and transform.",
    buttonText: "Explore Our World",
  },
  article: {
    title: "The Story Behind Our Craft",
    content: `Every great creation begins with a spark of imagination. For over a decade, we've been nurturing that spark into flames of innovation that illuminate the path forward.

Our journey started in a small studio, where passionate minds gathered around a shared vision: to create something meaningful. Today, that vision has blossomed into a collective of artists, thinkers, and dreamers who believe in the power of beauty to change perspectives.

We don't just design—we curate experiences. Each project is a conversation between form and function, tradition and innovation. Our approach is rooted in understanding the soul of what we create, ensuring every detail resonates with purpose and intention.

The world moves fast, but true artistry takes time. We embrace the slow, deliberate process of creation, knowing that the most profound works emerge from patience and dedication.`,
    author: "Creative Studio",
  },
  features: {
    title: "What We Believe",
    items: [
      {
        title: "Authentic Expression",
        description: "Every creation tells a story. We ensure yours speaks volumes.",
      },
      {
        title: "Thoughtful Design",
        description: "Beauty with purpose. Function with soul.",
      },
      {
        title: "Collaborative Spirit",
        description: "Great ideas flourish when minds connect.",
      },
    ],
  },
  gallery: {
    title: "Visual Stories",
    images: [],
  },
};

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: ContentData) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isAdmin, setIsAdmin] = useState(false);

  // FIREBASE COMMENT: Fetch content from Firestore on mount
  // useEffect(() => {
  //   const fetchContent = async () => {
  //     const docRef = doc(db, 'content', 'landing');
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setContent(docSnap.data() as ContentData);
  //     }
  //   };
  //   fetchContent();
  // }, []);

  const updateContent = (newContent: ContentData) => {
    setContent(newContent);
    // FIREBASE COMMENT: Save content to Firestore
    // const docRef = doc(db, 'content', 'landing');
    // await setDoc(docRef, newContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdmin, setIsAdmin }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
