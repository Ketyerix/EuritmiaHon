import React from 'react';

export interface GalleryYear {
  id: string;
  year: number;
  title: string;
  coverImage: string;
  fullGallery: string[];
  videoLinks?: Record<string, string>;
}

export interface Sponsor {
  name: string;
  role?: string;
  logo?: React.ReactNode;
}