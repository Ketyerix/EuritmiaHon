import React from 'react';

export interface Article {
  id: string;
  title: string;
  subtitle?: string; // Added subtitle support
  excerpt: string;
  content: string;
}

export interface GalleryYear {
  id: string;
  year: number;
  title: string;
  coverImages: string[];
  fullGallery: string[];
}

export interface Sponsor {
  name: string;
  role?: string;
  logo?: React.ReactNode;
}

export interface ScheduleItem {
  time: string;
  description: string;
}